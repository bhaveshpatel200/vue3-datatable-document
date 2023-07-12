const config = useRuntimeConfig();
export default defineEventHandler(async (event) => {
    const params = await readBody(event);

    let result: any = [];
    let rows: any = await $fetch(config.SITE_URL + '/data.json');
    let total = 0;
    const offset = (<number>params.current_page - 1) * <number>params.pagesize + 1;

    params.column_filters?.forEach((d: any) => {
        if (d.filter && ((d.value !== undefined && d.value !== null && d.value !== '') || d.condition === 'is_null' || d.condition == 'is_not_null')) {
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

            if (d.condition === 'is_null') {
                rows = rows.filter((item: any) => {
                    return cellValue(item, d.field) == null || cellValue(item, d.field) == '';
                });
                d.value = '';
            } else if (d.condition === 'is_not_null') {
                d.value = '';
                rows = rows.filter((item: any) => {
                    return cellValue(item, d.field);
                });
            }
        }
    });

    if (params.search && rows.length) {
        let final: Array<any> = [];

        const keys = (params.column_filters || [])
            .filter((d: any) => d.search && !d.hide)
            .map((d: any) => {
                return d.field;
            });

        for (var j = 0; j < rows.length; j++) {
            for (var i = 0; i < keys.length; i++) {
                if (cellValue(rows[j], keys[i])?.toString().toLowerCase().includes(params.search.toLowerCase())) {
                    final.push(rows[j]);
                    break;
                }
            }
        }

        rows = final;
    }

    // sort rows
    var collator = new Intl.Collator(undefined, {
        numeric: true,
        sensitivity: 'base',
    });
    const sortOrder = params.sort_direction === 'desc' ? -1 : 1;
    const arr = params.sort_column?.split('.');

    rows.sort((a: any, b: any): number => {
        const valA = params.sort_column?.split('.').reduce((obj: any, key: string) => obj?.[key], a);
        const valB = params.sort_column?.split('.').reduce((obj: any, key: string) => obj?.[key], b);

        return collator.compare(valA, valB) * sortOrder;
    });

    total = rows.length || 0;
    let limit = params.current_page * params.pagesize;
    limit = total >= limit ? limit : total;

    result = rows.slice(offset - 1, limit);
    const total_pages = maxPage(params, total);

    // sample delay function
    await delayFunction(); // temporary delay, just for showind loader for few seconds

    const response = {
        data: result,
        meta: {
            current_page: params.current_page,
            per_page: params.pagesize,
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

const maxPage = (params: any, total: number) => {
    const totalPages = params.pagesize < 1 ? 1 : Math.ceil(total / params.pagesize);
    return Math.max(totalPages || 0, 1);
};

const delayFunction = () => {
    return new Promise((resolve, reject) => {
        let y = 0;
        setTimeout(() => {
            for (let i = 0; i < 10; i++) {
                y++;
            }
            resolve(y);
        }, 200);
    });
};
