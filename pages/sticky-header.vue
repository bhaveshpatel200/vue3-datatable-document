<template>
    <div class="sticky-table">
        <div class="flex items-center justify-between mb-5">
            <h2 class="text-3xl">Sticky Header</h2>
            <a target="_blank" href="https://github.com/bhaveshpatel200/vue3-datatable-document/blob/main/pages/sticky-header.vue" class="btn">
                <icon-github class="w-5 h-5 mr-2" />
                View Source
            </a>
        </div>

        <vue3-datatable :rows="rows" :columns="cols" :totalRows="rows?.length" :sortable="true" :pageSize="20" :hasCheckbox="true" :stickyHeader="true">
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

        <vue3-datatable :rows="rows1" :columns="cols1" :totalRows="rows1?.length" :sortable="true" :hasCheckbox="true" :stickyFirstColumn="true">
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

        <vue3-datatable :rows="rows2" :columns="cols2" :totalRows="rows2?.length" :sortable="true" :pageSize="20" :hasCheckbox="true" :stickyFirstColumn="true" :stickyHeader="true">
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
    const cols =
        ref([
            { field: 'id', title: 'ID', isUnique: true, filter: false },
            { field: 'firstName', title: 'First Name' },
            { field: 'lastName', title: 'Last Name' },
            { field: 'email', title: 'Email' },
            { field: 'phone', title: 'Phone' },
        ]) || [];

    const { data } = await useFetch(config.SITE_URL + '/data.json');
    const rows = data.value || [];

    // sticky first column
    const cols1 =
        ref([
            { field: 'id', title: 'ID', isUnique: true, filter: false },
            { field: 'firstName', title: 'First Name' },
            { field: 'lastName', title: 'Last Name' },
            { field: 'email', title: 'Email' },
            { field: 'phone', title: 'Phone' },
            { field: 'company', title: 'Company' },
            { field: 'address.street', title: 'Address' },
            { field: 'age', title: 'Age', type: 'number' },
            { field: 'dob', title: 'Birthdate', type: 'date' },
            { field: 'isActive', title: 'Active', type: 'bool' },
        ]) || [];

    const { data: data1 } = await useFetch(config.SITE_URL + '/data.json');
    const rows1 = data1.value || [];

    // sticky hader & first column
    const cols2 =
        ref([
            { field: 'id', title: 'ID', isUnique: true, filter: false },
            { field: 'firstName', title: 'First Name' },
            { field: 'lastName', title: 'Last Name' },
            { field: 'email', title: 'Email' },
            { field: 'phone', title: 'Phone' },
            { field: 'company', title: 'Company' },
            { field: 'address.street', title: 'Address' },
            { field: 'age', title: 'Age', type: 'number' },
            { field: 'dob', title: 'Birthdate', type: 'date' },
            { field: 'isActive', title: 'Active', type: 'bool' },
        ]) || [];

    const { data: data2 } = await useFetch(config.SITE_URL + '/data.json');
    const rows2 = data2.value || [];
</script>
<style>
    .sticky-table .bh-table-responsive table thead tr th {
        @apply whitespace-nowrap;
    }
    .sticky-table .bh-table-responsive table tbody tr td {
        @apply lg:whitespace-nowrap;
    }
</style>
