<template>
    <div class="sticky-table">
        <div class="flex items-center justify-between mb-5">
            <h2 class="text-3xl">Sticky Header</h2>
            <a target="_blank" href="https://github.com/bhaveshpatel200/vue3-datatable-document/blob/main/pages/sticky-header.vue" class="btn">
                <icon-github class="w-5 h-5 mr-2" />
                View Source
            </a>
        </div>

        <!-- <vue3-datatable :rows="rows" :columns="cols" :loading="loading" :sortable="true" :pageSize="20" :hasCheckbox="true" :stickyHeader="true">
            <template #id="data">
                <strong>#{{ data.value.id }}</strong>
            </template>
        </vue3-datatable> -->
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
            @change="changeServer"
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

        <!-- <vue3-datatable :rows="rows1" :columns="cols1" :loading="loading1" :sortable="true" :hasCheckbox="true" :stickyFirstColumn="true">
            <template #id="data">
                <strong>#{{ data.value.id }}</strong>
            </template>
            <template #email="data">
                <a :href="`mailto:${data.value.email}`" class="text-primary hover:underline">{{ data.value.email }}</a>
            </template>
        </vue3-datatable> -->

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
            @change="changeServer1"
        >
            <template #id="data">
                <strong>#{{ data.value.id }}</strong>
            </template>
            <template #email="data">
                <a :href="`mailto:${data.value.email}`" class="text-primary hover:underline">{{ data.value.email }}</a>
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

        <!-- <vue3-datatable :rows="rows2" :columns="cols2" :loading="loading2" :sortable="true" :pageSize="20" :hasCheckbox="true" :stickyFirstColumn="true" :stickyHeader="true">
            <template #id="data">
                <strong>#{{ data.value.id }}</strong>
            </template>
            <template #email="data">
                <a :href="`mailto:${data.value.email}`" class="text-primary hover:underline">{{ data.value.email }}</a>
            </template>
        </vue3-datatable> -->
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
            @change="changeServer2"
        >
            <template #id="data">
                <strong>#{{ data.value.id }}</strong>
            </template>
            <template #email="data">
                <a :href="`mailto:${data.value.email}`" class="text-primary hover:underline">{{ data.value.email }}</a>
            </template>
        </vue3-datatable>
    </div>
</template>
<script setup lang="ts">
    import { ref } from 'vue';
    import Vue3Datatable from '@bhplugin/vue3-datatable';
    import '@bhplugin/vue3-datatable/dist/style.css';
    const config = useRuntimeConfig();

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

    const params = reactive({ current_page: 1, pagesize: 20, sort_column: 'id', sort_direction: 'asc' });
    const rows: any = ref(null);

    const cols =
        ref([
            { field: 'id', title: 'ID', isUnique: true },
            { field: 'firstName', title: 'First Name' },
            { field: 'lastName', title: 'Last Name' },
            { field: 'email', title: 'Email' },
            { field: 'age', title: 'Age', type: 'number' },
            { field: 'dob', title: 'Birthdate', type: 'date' },
            { field: 'address.city', title: 'City' },
            { field: 'isActive', title: 'Active', type: 'bool' },
        ]) || [];

    const getUsers = async () => {
        try {
            loading.value = true;

            const response = await fetch('/api/user', {
                method: 'POST',
                body: JSON.stringify(params),
            });

            const data = await response.json();

            rows.value = data?.data;
            total_rows.value = data?.meta?.total;
        } catch {}

        loading.value = false;
    };
    const changeServer = (data: any) => {
        params.current_page = data.current_page;
        params.pagesize = data.pagesize;
        params.sort_column = data.sort_column;
        params.sort_direction = data.sort_direction;

        getUsers();
    };

    // sticky first column
    const loading1: any = ref(true);
    const total_rows1 = ref(0);

    const params1 = reactive({ current_page: 1, pagesize: 20, sort_column: 'id', sort_direction: 'asc' });
    const rows1: any = ref(null);

    const cols1 =
        ref([
            { field: 'id', title: 'ID', isUnique: true },
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
        ]) || [];

    const getUsers1 = async () => {
        try {
            loading1.value = true;

            const response = await fetch('/api/user', {
                method: 'POST',
                body: JSON.stringify(params1),
            });

            const data = await response.json();

            rows1.value = data?.data;
            total_rows1.value = data?.meta?.total;
        } catch {}

        loading1.value = false;
    };
    const changeServer1 = (data: any) => {
        params1.current_page = data.current_page;
        params1.pagesize = data.pagesize;
        params1.sort_column = data.sort_column;
        params1.sort_direction = data.sort_direction;

        getUsers1();
    };

    // sticky hader & first column
    const loading2: any = ref(true);
    const total_rows2 = ref(0);

    const params2 = reactive({ current_page: 1, pagesize: 20, sort_column: 'id', sort_direction: 'asc' });
    const rows2: any = ref(null);

    const cols2 =
        ref([
            { field: 'id', title: 'ID', isUnique: true },
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
        ]) || [];

    const getUsers2 = async () => {
        try {
            loading2.value = true;

            const response = await fetch('/api/user', {
                method: 'POST',
                body: JSON.stringify(params2),
            });

            const data = await response.json();

            rows2.value = data?.data;
            total_rows2.value = data?.meta?.total;
        } catch {}

        loading2.value = false;
    };
    const changeServer2 = (data: any) => {
        params2.current_page = data.current_page;
        params2.pagesize = data.pagesize;
        params2.sort_column = data.sort_column;
        params2.sort_direction = data.sort_direction;

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
