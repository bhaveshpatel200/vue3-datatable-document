import { getQuery } from 'h3';
const config = useRuntimeConfig();

export default defineEventHandler(async (event) => {
    setResponseHeaders(event, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
    });

    // Handle OPTIONS preflight
    if (event.method === 'OPTIONS') {
        return '';
    }

    // Get query parameters instead of body
    const query = getQuery(event);

    // Parse complex parameters (they'll come as JSON strings in query params)
    const params: any = {
        page: parseInt(query.page as string) || 1,
        pagesize: parseInt(query.pagesize as string) || 10,
        column_filters: query.column_filters ? JSON.parse(query.column_filters as string) : [],
        search_fields: query.search_fields ? JSON.parse(query.search_fields as string) : [],
        search: (query.search as string) || '',
        sort_configs: query.sort_configs ? JSON.parse(query.sort_configs as string) : [],
    };

    let result: any = [];
    let rows: any = await $fetch(config.public.SITE_URL + '/data.json');

    let total = 0;
    const offset = (params.page - 1) * params.pagesize + 1;

    params.column_filters?.forEach((d: any) => {
        if (d.field && d.value) {
            if (d.condition === 'contain') {
                rows = rows.filter((item: any) => {
                    return cellValue(item, d.field)?.toString().toLowerCase().includes(d.value.toLowerCase());
                });
            } else if (d.condition === 'equal') {
                rows = rows.filter((item: any) => {
                    return cellValue(item, d.field)?.toString().toLowerCase() === d.value.toLowerCase();
                });
            }
        }
    });

    if (params.search && params.search_fields?.length && rows.length) {
        let final: Array<any> = [];
        const keys = params.search_fields;

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
    if (params.sort_configs?.length) {
        rows = [...rows].sort((a, b) => {
            for (let i = 0; i < params.sort_configs.length; i++) {
                const sort = params.sort_configs[i];
                const aVal = String(getNestedValue(a, sort.key) || '').toLowerCase();
                const bVal = String(getNestedValue(b, sort.key) || '').toLowerCase();

                console.log('aVal:: ', aVal);
                console.log('bVal:: ', bVal);

                if (aVal < bVal) {
                    return sort.direction === 'asc' ? -1 : 1;
                }
                if (aVal > bVal) {
                    return sort.direction === 'asc' ? 1 : -1;
                }
                // If equal, continue to next sort criteria
            }
            return 0;
        });
    }

    total = rows.length || 0;
    let limit = params.page * params.pagesize;
    limit = total >= limit ? limit : total;

    result = rows.slice(offset - 1, limit);
    const total_pages = maxPage(params, total);

    // sample delay function
    // await delayFunction(); // temporary delay, just for showing loader for few seconds

    const response = {
        data: result,
        meta: {
            page: params.page,
            per_page: params.pagesize,
            first_page: 1,
            last_page: total_pages,
            total_pages: total_pages,
            total: total,
        },
    };

    return response;
});

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

const getNestedValue = (obj: any, path: string) => {
    return path.split('.').reduce((current: unknown, key: string) => {
        return (current as Record<string, unknown> | null)?.[key];
    }, obj as unknown);
};
