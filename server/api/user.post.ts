import { readRawBody } from 'h3';
const config = useRuntimeConfig();
export default defineEventHandler(async (event) => {
    setResponseHeaders(event, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
    });

    const rawBody = await readRawBody(event);
    const params = rawBody ? JSON.parse(rawBody) : {};

    let result: any = [];
    let rows: any = await $fetch(config.public.SITE_URL + '/data.json');

    let total = 0;

    params.column_filters?.forEach((d: any) => {
        if (d.filter !== false && ((d.value !== undefined && d.value !== null && d.value !== '') || d.condition === 'is_null' || d.condition == 'is_not_null')) {
            // null checks — handle first, skip type-specific block
            if (d.condition === 'is_null') {
                rows = rows.filter((item: any) => {
                    return cellValue(item, d.field) == null || cellValue(item, d.field) == '';
                });
                d.value = '';
                return;
            } else if (d.condition === 'is_not_null') {
                d.value = '';
                rows = rows.filter((item: any) => {
                    return cellValue(item, d.field);
                });
                return;
            }

            // string filters
            if (d.type === 'string') {
                if (d.condition === 'contain') {
                    rows = rows.filter((item: any) => {
                        return cellValue(item, d.field)?.toString().toLowerCase().includes(d.value.toLowerCase());
                    });
                } else if (d.condition === 'not_contain') {
                    rows = rows.filter((item: any) => {
                        return !cellValue(item, d.field)?.toString().toLowerCase().includes(d.value.toLowerCase());
                    });
                } else if (d.condition === 'equal') {
                    rows = rows.filter((item: any) => {
                        return cellValue(item, d.field)?.toString().toLowerCase() === d.value.toLowerCase();
                    });
                } else if (d.condition === 'not_equal') {
                    rows = rows.filter((item: any) => {
                        return cellValue(item, d.field)?.toString().toLowerCase() !== d.value.toLowerCase();
                    });
                } else if (d.condition == 'start_with') {
                    rows = rows.filter((item: any) => {
                        return cellValue(item, d.field)?.toString().toLowerCase().indexOf(d.value.toLowerCase()) === 0;
                    });
                } else if (d.condition == 'end_with') {
                    rows = rows.filter((item: any) => {
                        return (
                            cellValue(item, d.field)
                                ?.toString()
                                .toLowerCase()
                                .substr(d.value.length * -1) === d.value.toLowerCase()
                        );
                    });
                }
            }
            // number filters
            else if (d.type === 'number') {
                if (d.condition === 'equal') {
                    rows = rows.filter((item: any) => {
                        return cellValue(item, d.field) && parseFloat(cellValue(item, d.field)) === parseFloat(d.value);
                    });
                } else if (d.condition === 'not_equal') {
                    rows = rows.filter((item: any) => {
                        return cellValue(item, d.field) && parseFloat(cellValue(item, d.field)) !== parseFloat(d.value);
                    });
                } else if (d.condition === 'greater_than') {
                    rows = rows.filter((item: any) => {
                        return cellValue(item, d.field) && parseFloat(cellValue(item, d.field)) > parseFloat(d.value);
                    });
                } else if (d.condition === 'greater_than_equal') {
                    rows = rows.filter((item: any) => {
                        return cellValue(item, d.field) && parseFloat(cellValue(item, d.field)) >= parseFloat(d.value);
                    });
                } else if (d.condition === 'less_than') {
                    rows = rows.filter((item: any) => {
                        return cellValue(item, d.field) && parseFloat(cellValue(item, d.field)) < parseFloat(d.value);
                    });
                } else if (d.condition === 'less_than_equal') {
                    rows = rows.filter((item: any) => {
                        return cellValue(item, d.field) && parseFloat(cellValue(item, d.field)) <= parseFloat(d.value);
                    });
                }
            }
            // date filters
            else if (d.type === 'date') {
                if (d.condition === 'equal') {
                    rows = rows.filter((item: any) => {
                        return cellValue(item, d.field) && dateFormat(cellValue(item, d.field)) === d.value;
                    });
                } else if (d.condition === 'not_equal') {
                    rows = rows.filter((item: any) => {
                        return cellValue(item, d.field) && dateFormat(cellValue(item, d.field)) !== d.value;
                    });
                } else if (d.condition === 'greater_than') {
                    rows = rows.filter((item: any) => {
                        return cellValue(item, d.field) && dateFormat(cellValue(item, d.field)) > d.value;
                    });
                } else if (d.condition === 'less_than') {
                    rows = rows.filter((item: any) => {
                        return cellValue(item, d.field) && dateFormat(cellValue(item, d.field)) < d.value;
                    });
                }
            }
            // boolean filters
            else if (d.type === 'bool') {
                rows = rows.filter((item: any) => {
                    return cellValue(item, d.field) === d.value;
                });
            }
        }
    });

    if (params.search && rows.length) {
        const filterKeys = (params.column_filters || [])
            .filter((d: any) => d.search !== false && !d.hide)
            .map((d: any) => d.field)
            .filter(Boolean);

        // Fallback: if no column_filters sent, flatten row keys to dot-notation paths (handles nested)
        const keys = filterKeys.length ? filterKeys : flattenKeys(rows[0] || {});

        const searchLower = params.search.toLowerCase();
        rows = rows.filter((row: any) => keys.some((key: string) => cellValue(row, key)?.toString().toLowerCase().includes(searchLower)));
    }

    // sort rows — skip if no sort_column
    if (params.sort_column) {
        const collator = new Intl.Collator(undefined, {
            numeric: true,
            sensitivity: 'base',
        });
        const sortOrder = params.sort_direction === 'desc' ? -1 : 1;

        rows.sort((a: any, b: any): number => {
            const valA = cellValue(a, params.sort_column);
            const valB = cellValue(b, params.sort_column);
            return collator.compare(valA, valB) * sortOrder;
        });
    }

    total = rows.length || 0;
    const pagesize = params.pagesize || 10;
    const total_pages = maxPage({ pagesize }, total);

    // Clamp current_page to valid range — if client sent page beyond totals, fall back to last valid page
    const currentPage = Math.min(Math.max(1, params.current_page || 1), total_pages);
    const clampedOffset = (currentPage - 1) * pagesize + 1;
    let limit = currentPage * pagesize;
    limit = total >= limit ? limit : total;

    result = rows.slice(clampedOffset - 1, limit);

    // sample delay function
    await delayFunction(); // temporary delay, just for showind loader for few seconds

    const response = {
        data: result,
        meta: {
            current_page: currentPage,
            per_page: pagesize,
            first_page: 1,
            last_page: total_pages,
            total_pages: total_pages,
            total: total,
        },
    };

    return response;
});

const dateFormat = (date: any) => {
    try {
        if (!date) {
            return '';
        }
        const dt = new Date(date);
        const day = dt.getDate();
        const month = dt.getMonth() + 1;
        const year = dt.getFullYear();

        return year + '-' + (month > 9 ? month : '0' + month) + '-' + (day > 9 ? day : '0' + day);
    } catch {}
    return '';
};
const cellValue = (item: any, field: string) => {
    return field?.split('.').reduce((obj, key) => obj?.[key], item);
};

const flattenKeys = (obj: any, prefix = ''): string[] => {
    const result: string[] = [];
    for (const key in obj) {
        const path = prefix ? `${prefix}.${key}` : key;
        const val = obj[key];
        if (val && typeof val === 'object' && !Array.isArray(val)) {
            result.push(...flattenKeys(val, path));
        } else {
            result.push(path);
        }
    }
    return result;
};

const maxPage = (params: any, total: number) => {
    const totalPages = params.pagesize < 1 ? 1 : Math.ceil(total / params.pagesize);
    return Math.max(totalPages || 0, 1);
};

const delayFunction = () => {
    return new Promise((resolve) => {
        let y = 0;
        setTimeout(() => {
            for (let i = 0; i < 10; i++) {
                y++;
            }
            resolve(y);
        }, 200);
    });
};
