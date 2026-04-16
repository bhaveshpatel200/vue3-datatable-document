<template>
    <div class="sticky-table">
        <div class="flex items-center justify-between mb-5">
            <h2 class="text-3xl">Sticky Header</h2>
            <a target="_blank" href="https://github.com/bhaveshpatel200/vue3-datatable-document/blob/main/pages/sticky-header.vue" class="btn">
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
            :sortable="true"
            :sortColumn="params.sort_column"
            :sortDirection="params.sort_direction"
            :hasCheckbox="true"
            :stickyHeader="true"
            @page-change="changePage"
            @page-size-change="changePageSize"
            @sort-change="sortChange"
        >
            <template #id="data">
                <strong>#{{ data.value.id }}</strong>
            </template>
        </vue3-datatable>

        <!-- sticky first column -->
        <div class="flex items-center justify-between mb-5 border-t border-gray-200 mt-10 pt-10">
            <h2 class="text-3xl">Sticky First Column</h2>
            <a target="_blank" href="https://github.com/bhaveshpatel200/vue3-datatable-document/blob/main/pages/sticky-header.vue" class="btn">
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
            :sortable="true"
            :sortColumn="params1.sort_column"
            :sortDirection="params1.sort_direction"
            :hasCheckbox="true"
            :stickyFirstColumn="true"
            @page-change="changePage1"
            @page-size-change="changePageSize1"
            @sort-change="sortChange1"
        >
            <template #id="data">
                <strong>#{{ data.value.id }}</strong>
            </template>
            <template #email="data">
                <a :href="`mailto:${data.value.email}`" class="text-primary hover:underline" @click.stop>{{ data.value.email }}</a>
            </template>
        </vue3-datatable>

        <!-- sticky header & first column -->
        <div class="flex items-center justify-between mb-5 border-t border-gray-200 mt-10 pt-10">
            <h2 class="text-3xl">Sticky Header & First Column</h2>
            <a target="_blank" href="https://github.com/bhaveshpatel200/vue3-datatable-document/blob/main/pages/sticky-header.vue" class="btn">
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
            :sortable="true"
            :sortColumn="params2.sort_column"
            :sortDirection="params2.sort_direction"
            :hasCheckbox="true"
            :stickyFirstColumn="true"
            :stickyHeader="true"
            @page-change="changePage2"
            @page-size-change="changePageSize2"
            @sort-change="sortChange2"
        >
            <template #id="data">
                <strong>#{{ data.value.id }}</strong>
            </template>
            <template #email="data">
                <a :href="`mailto:${data.value.email}`" class="text-primary hover:underline" @click.stop>{{ data.value.email }}</a>
            </template>
        </vue3-datatable>
    </div>
</template>
<script setup lang="ts">
    import { ref, toRaw } from 'vue';
    import Vue3Datatable from '@bhplugin/vue3-datatable';
    import type { IColumnDefinition, ISortChangeResponse } from '@bhplugin/vue3-datatable';
    import '@bhplugin/vue3-datatable/dist/style.css';

    onMounted(() => {
        getUsers();
        setTimeout(() => {
            getUsers1();
        }, 10);
        setTimeout(() => {
            getUsers2();
        }, 20);
    });

    const loading: any = ref(true);
    const total_rows = ref(0);

    const defaultParams = { current_page: 1, pagesize: 20, sort_column: 'id', sort_direction: 'asc' as 'asc' | 'desc' };
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
    const sortChange = (sort: ISortChangeResponse) => {
        params.sort_column = sort.field;
        params.sort_direction = sort.direction;
        getUsers();
    };

    // sticky first column
    const loading1: any = ref(true);
    const total_rows1 = ref(0);

    const defaultParams1 = { current_page: 1, pagesize: 20, sort_column: 'id', sort_direction: 'asc' as 'asc' | 'desc' };
    const params1 = reactive({ ...defaultParams1 });
    const rows1: any = ref(null);

    const cols1 = ref<IColumnDefinition[]>([
        { field: 'id', title: 'ID', isUnique: true, type: 'number' },
        { field: 'firstName', title: 'First Name' },
        { field: 'lastName', title: 'Last Name' },
        { field: 'email', title: 'Email' },
        { field: 'phone', title: 'Phone' },
        { field: 'company', title: 'Company' },
        { field: 'address.street', title: 'Address' },
        { field: 'address.city', title: 'City' },
        { field: 'age', title: 'Age', type: 'number' },
        { field: 'dob', title: 'Birthdate', type: 'date' },
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
    const sortChange1 = (sort: ISortChangeResponse) => {
        params1.sort_column = sort.field;
        params1.sort_direction = sort.direction;
        getUsers1();
    };

    // sticky hader & first column
    const loading2: any = ref(true);
    const total_rows2 = ref(0);

    const defaultParams2 = { current_page: 1, pagesize: 20, sort_column: 'id', sort_direction: 'asc' as 'asc' | 'desc' };
    const params2 = reactive({ ...defaultParams2 });
    const rows2: any = ref(null);

    const cols2 = ref<IColumnDefinition[]>([
        { field: 'id', title: 'ID', isUnique: true, type: 'number' },
        { field: 'firstName', title: 'First Name' },
        { field: 'lastName', title: 'Last Name' },
        { field: 'email', title: 'Email' },
        { field: 'phone', title: 'Phone' },
        { field: 'company', title: 'Company' },
        { field: 'address.street', title: 'Address' },
        { field: 'address.city', title: 'City' },
        { field: 'age', title: 'Age', type: 'number' },
        { field: 'dob', title: 'Birthdate', type: 'date' },
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
    const sortChange2 = (sort: ISortChangeResponse) => {
        params2.sort_column = sort.field;
        params2.sort_direction = sort.direction;
        getUsers2();
    };
</script>
<style>
    .sticky-table .bh-table-responsive table thead tr th {
        @apply whitespace-nowrap;
    }
    .sticky-table .bh-table-responsive table tbody tr td {
        @apply lg:whitespace-nowrap;
    }
</style>
