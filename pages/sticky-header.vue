<template>
    <div class="sticky-table">
        <div class="flex items-center justify-between mb-5">
            <h2 class="text-3xl">Sticky Header</h2>
            <a target="_blank" href="https://github.com/bhaveshpatel200/vue3-datatable-document/blob/main/pages/sticky-header.vue" class="btn">
                <icon-github class="w-5 h-5 mr-2" />
                View Source
            </a>
        </div>

        <vue3-datatable :rows="rows" :columns="cols" :loading="loading" :sortable="true" :pageSize="20" :hasCheckbox="true" :stickyHeader="true">
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

        <vue3-datatable :rows="rows1" :columns="cols1" :loading="loading1" :sortable="true" :hasCheckbox="true" :stickyFirstColumn="true">
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

        <vue3-datatable :rows="rows2" :columns="cols2" :loading="loading2" :sortable="true" :pageSize="20" :hasCheckbox="true" :stickyFirstColumn="true" :stickyHeader="true">
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
    const loading: any = ref(true);
    const cols =
        ref([
            { field: 'id', title: 'ID', isUnique: true, filter: false },
            { field: 'firstName', title: 'First Name' },
            { field: 'lastName', title: 'Last Name' },
            { field: 'email', title: 'Email' },
            { field: 'phone', title: 'Phone' },
        ]) || [];

    const { data } = await useFetch(config.SITE_URL + '/data.json');
    let rows: any = [];
    setTimeout(() => {
        rows = data.value || [];
        loading.value = false;
    }, 1000);

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
    let rows1: any = [];
    const loading1: any = ref(true);
    setTimeout(() => {
        rows1 = data1.value || [];
        loading1.value = false;
    }, 1000);

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
    let rows2: any = [];
    const loading2: any = ref(true);
    setTimeout(() => {
        rows2 = data2.value || [];
        loading2.value = false;
    }, 1000);
</script>
<style>
    .sticky-table .bh-table-responsive table thead tr th {
        @apply whitespace-nowrap;
    }
    .sticky-table .bh-table-responsive table tbody tr td {
        @apply lg:whitespace-nowrap;
    }
</style>
