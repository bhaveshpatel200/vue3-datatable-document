<template>
    <div>
        <div class="flex items-center justify-between mb-5">
            <h2 class="text-3xl">Alt Pagination</h2>
            <a target="_blank" href="https://github.com/bhaveshpatel200/vue3-datatable-document/blob/main/pages/alt-pagination.vue" class="btn">
                <icon-github class="w-5 h-5 mr-2" />
                View Source
            </a>
        </div>

        <vue3-datatable
            :rows="rows"
            :columns="cols"
            :loading="loading"
            :totalRows="total_rows"
            :isServerMode="true"
            :pageSize="params.pagesize"
            :showNumbersCount="3"
            class="alt-pagination"
            @page-change="changePage"
            @page-size-change="changePageSize"
        >
            <template #firstArrow>First</template>
            <template #lastArrow>Last</template>
            <template #previousArrow>Prev</template>
            <template #nextArrow>Next</template>
        </vue3-datatable>

        <!-- disable first last pagination -->
        <div class="flex items-center justify-between mb-5 border-t border-gray-200 mt-10 pt-10">
            <h2 class="text-3xl">Disable First Last Pagination</h2>
            <a target="_blank" href="https://github.com/bhaveshpatel200/vue3-datatable-document/blob/main/pages/alt-pagination.vue" class="btn">
                <icon-github class="w-5 h-5 mr-2" />
                View Source
            </a>
        </div>

        <vue3-datatable
            :rows="rows1"
            :columns="cols1"
            :loading="loading1"
            :totalRows="total_rows1"
            :isServerMode="true"
            :pageSize="params1.pagesize"
            :showFirstPage="false"
            :showLastPage="false"
            @page-change="changePage1"
            @page-size-change="changePageSize1"
        >
        </vue3-datatable>

        <!-- pagination without number -->
        <div class="flex items-center justify-between mb-5 border-t border-gray-200 mt-10 pt-10">
            <h2 class="text-3xl">Pagination Without number</h2>
            <a target="_blank" href="https://github.com/bhaveshpatel200/vue3-datatable-document/blob/main/pages/alt-pagination.vue" class="btn">
                <icon-github class="w-5 h-5 mr-2" />
                View Source
            </a>
        </div>

        <vue3-datatable
            :rows="rows2"
            :columns="cols2"
            :loading="loading2"
            :totalRows="total_rows2"
            :isServerMode="true"
            :pageSize="params2.pagesize"
            :showNumbers="false"
            @page-change="changePage2"
            @page-size-change="changePageSize2"
        >
        </vue3-datatable>

        <!-- next previous -->
        <div class="flex items-center justify-between mb-5 border-t border-gray-200 mt-10 pt-10">
            <h2 class="text-3xl">Next Previous</h2>
            <a target="_blank" href="https://github.com/bhaveshpatel200/vue3-datatable-document/blob/main/pages/alt-pagination.vue" class="btn">
                <icon-github class="w-5 h-5 mr-2" />
                View Source
            </a>
        </div>

        <vue3-datatable
            :rows="rows3"
            :columns="cols3"
            :loading="loading3"
            :totalRows="total_rows3"
            :isServerMode="true"
            :pageSize="params3.pagesize"
            :showNumbers="false"
            :showFirstPage="false"
            :showLastPage="false"
            class="next-prev-pagination"
            paginationInfo="{0} to {1} of {2}"
            :showPageSize="false"
            @page-change="changePage3"
            @page-size-change="changePageSize3"
        >
            <template #previousArrow>Previous</template>
            <template #nextArrow>Next</template>
        </vue3-datatable>
    </div>
</template>
<script setup lang="ts">
    import { ref, toRaw } from 'vue';
    import Vue3Datatable from '@bhplugin/vue3-datatable';
    import type { IColumnDefinition } from '@bhplugin/vue3-datatable';
    import '@bhplugin/vue3-datatable/dist/style.css';
    const loading: any = ref(true);
    const total_rows = ref(0);

    const defaultParams = { current_page: 1, pagesize: 10 };
    const params = reactive({ ...defaultParams });
    const rows: any = ref(null);

    const cols = ref<IColumnDefinition[]>([
        { field: 'id', title: 'ID', isUnique: true, type: 'number' },
        { field: 'firstName', title: 'First Name' },
        { field: 'lastName', title: 'Last Name' },
        { field: 'email', title: 'Email' },
        { field: 'age', title: 'Age', type: 'number' },
        { field: 'dob', title: 'Birthdate', type: 'date' },
        { field: 'address.city', title: 'City' },
        { field: 'isActive', title: 'Active', type: 'bool' },
    ]);

    onMounted(() => {
        getUsers();
        setTimeout(() => {
            getUsers1();
        }, 10);
        setTimeout(() => {
            getUsers2();
        }, 20);
        setTimeout(() => {
            getUsers3();
        }, 30);
    });
    const getUsers = async () => {
        try {
            loading.value = true;

            const response = await fetch('/api/user', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(toRaw(params)),
            });

            const data = await response.json();

            rows.value = data?.data;
            total_rows.value = data?.meta?.total;
        } catch {}

        loading.value = false;
    };
    const changePage = (page: number) => {
        params.current_page = page;
        getUsers();
    };
    const changePageSize = (size: number) => {
        params.pagesize = size;
        params.current_page = 1;
        getUsers();
    };

    // disable first last pagination
    const loading1: any = ref(true);
    const total_rows1 = ref(0);

    const defaultParams1 = { current_page: 1, pagesize: 10 };
    const params1 = reactive({ ...defaultParams1 });
    const rows1: any = ref(null);

    const cols1 = ref<IColumnDefinition[]>([
        { field: 'id', title: 'ID', isUnique: true, type: 'number' },
        { field: 'firstName', title: 'First Name' },
        { field: 'lastName', title: 'Last Name' },
        { field: 'email', title: 'Email' },
        { field: 'age', title: 'Age', type: 'number' },
        { field: 'dob', title: 'Birthdate', type: 'date' },
        { field: 'address.city', title: 'City' },
        { field: 'isActive', title: 'Active', type: 'bool' },
    ]);

    const getUsers1 = async () => {
        try {
            loading1.value = true;

            const response = await fetch('/api/user', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(toRaw(params1)),
            });

            const data = await response.json();

            rows1.value = data?.data;
            total_rows1.value = data?.meta?.total;
        } catch {}

        loading1.value = false;
    };
    const changePage1 = (page: number) => {
        params1.current_page = page;
        getUsers1();
    };
    const changePageSize1 = (size: number) => {
        params1.pagesize = size;
        params1.current_page = 1;
        getUsers1();
    };

    // pagination without number
    const loading2: any = ref(true);
    const total_rows2 = ref(0);

    const defaultParams2 = { current_page: 1, pagesize: 10 };
    const params2 = reactive({ ...defaultParams2 });
    const rows2: any = ref(null);

    const cols2 = ref<IColumnDefinition[]>([
        { field: 'id', title: 'ID', isUnique: true, type: 'number' },
        { field: 'firstName', title: 'First Name' },
        { field: 'lastName', title: 'Last Name' },
        { field: 'email', title: 'Email' },
        { field: 'age', title: 'Age', type: 'number' },
        { field: 'dob', title: 'Birthdate', type: 'date' },
        { field: 'address.city', title: 'City' },
        { field: 'isActive', title: 'Active', type: 'bool' },
    ]);

    const getUsers2 = async () => {
        try {
            loading2.value = true;

            const response = await fetch('/api/user', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(toRaw(params2)),
            });

            const data = await response.json();

            rows2.value = data?.data;
            total_rows2.value = data?.meta?.total;
        } catch {}

        loading2.value = false;
    };
    const changePage2 = (page: number) => {
        params2.current_page = page;
        getUsers2();
    };
    const changePageSize2 = (size: number) => {
        params2.pagesize = size;
        params2.current_page = 1;
        getUsers2();
    };

    // next previous
    const loading3: any = ref(true);
    const total_rows3 = ref(0);

    const defaultParams3 = { current_page: 1, pagesize: 10 };
    const params3 = reactive({ ...defaultParams3 });
    const rows3: any = ref(null);

    const cols3 = ref<IColumnDefinition[]>([
        { field: 'id', title: 'ID', isUnique: true, type: 'number' },
        { field: 'firstName', title: 'First Name' },
        { field: 'lastName', title: 'Last Name' },
        { field: 'email', title: 'Email' },
        { field: 'age', title: 'Age', type: 'number' },
        { field: 'dob', title: 'Birthdate', type: 'date' },
        { field: 'address.city', title: 'City' },
        { field: 'isActive', title: 'Active', type: 'bool' },
    ]);

    const getUsers3 = async () => {
        try {
            loading3.value = true;

            const response = await fetch('/api/user', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(toRaw(params3)),
            });

            const data = await response.json();

            rows3.value = data?.data;
            total_rows3.value = data?.meta?.total;
        } catch {}

        loading3.value = false;
    };
    const changePage3 = (page: number) => {
        params3.current_page = page;
        getUsers3();
    };
    const changePageSize3 = (size: number) => {
        params3.pagesize = size;
        params3.current_page = 1;
        getUsers3();
    };
</script>
<style>
    /* alt-pagination */
    .alt-pagination .bh-pagination .bh-page-item {
        @apply !w-max min-w-[32px] !rounded;
    }

    /* next-prev-pagination */
    .next-prev-pagination .bh-pagination .bh-page-item {
        @apply !w-max min-w-[100px] !rounded;
    }
    .next-prev-pagination .bh-pagination > div:first-child {
        @apply flex-col font-semibold;
    }
    .next-prev-pagination .bh-pagination .bh-pagination-number {
        @apply mx-auto gap-3;
    }
</style>
