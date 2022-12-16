<template>
    <div>
        <div class="flex items-center justify-between mb-5">
            <h2 class="text-3xl">Skin - Striped</h2>
            <a target="_blank" href="https://github.com/bhaveshpatel200/vue3-datatable-document/blob/main/pages/skin.vue" class="btn">
                <icon-github class="w-5 h-5 mr-2" />
                View Source
            </a>
        </div>

        <vue3-datatable :rows="rows" :columns="cols" :totalRows="rows?.length" skin="table-striped"> </vue3-datatable>

        <!-- hover -->
        <div class="flex items-center justify-between mb-5 border-t border-gray-200 mt-10 pt-10">
            <h2 class="text-3xl">Skin - Hover</h2>
            <a target="_blank" href="https://github.com/bhaveshpatel200/vue3-datatable-document/blob/main/pages/skin.vue" class="btn">
                <icon-github class="w-5 h-5 mr-2" />
                View Source
            </a>
        </div>

        <vue3-datatable :rows="rows1" :columns="cols" :totalRows="rows1?.length" skin="table-hover"> </vue3-datatable>

        <!-- bordered -->
        <div class="flex items-center justify-between mb-5 border-t border-gray-200 mt-10 pt-10">
            <h2 class="text-3xl">Skin - Bordered</h2>
            <a target="_blank" href="https://github.com/bhaveshpatel200/vue3-datatable-document/blob/main/pages/skin.vue" class="btn">
                <icon-github class="w-5 h-5 mr-2" />
                View Source
            </a>
        </div>

        <vue3-datatable :rows="rows2" :columns="cols" :totalRows="rows2?.length" skin="table-bordered"> </vue3-datatable>

        <!-- compact -->
        <div class="flex items-center justify-between mb-5 border-t border-gray-200 mt-10 pt-10">
            <h2 class="text-3xl">Skin - Compact</h2>
            <a target="_blank" href="https://github.com/bhaveshpatel200/vue3-datatable-document/blob/main/pages/skin.vue" class="btn">
                <icon-github class="w-5 h-5 mr-2" />
                View Source
            </a>
        </div>

        <vue3-datatable :rows="rows3" :columns="cols" :totalRows="rows3?.length" skin="table-compact"> </vue3-datatable>

        <!-- all -->
        <div class="flex items-center justify-between mb-5 border-t border-gray-200 mt-10 pt-10">
            <h2 class="text-3xl">Skin - All</h2>
            <a target="_blank" href="https://github.com/bhaveshpatel200/vue3-datatable-document/blob/main/pages/skin.vue" class="btn">
                <icon-github class="w-5 h-5 mr-2" />
                View Source
            </a>
        </div>

        <vue3-datatable :rows="rows4" :columns="cols" :totalRows="rows4?.length" skin="table-striped table-hover table-bordered table-compact"> </vue3-datatable>
    </div>
</template>
<script setup lang="ts">
    import { ref } from 'vue';
    import Vue3Datatable from '@bhplugin/vue3-datatable';
    import '@bhplugin/vue3-datatable/dist/style.css';
    const config = useRuntimeConfig();
    const cols =
        ref([
            { field: 'id', title: 'ID', isUnique: true },
            { field: 'firstName', title: 'First Name' },
            { field: 'lastName', title: 'Last Name' },
            { field: 'email', title: 'Email' },
            { field: 'phone', title: 'Phone' },
        ]) || [];

    // striped
    const { data } = await useFetch(config.SITE_URL + '/data.json');
    const rows = data.value || [];

    // hover
    const { data: data1 } = await useFetch(config.SITE_URL + '/data.json');
    const rows1 = data1.value || [];

    // bordered
    const { data: data2 } = await useFetch(config.SITE_URL + '/data.json');
    const rows2 = data2.value || [];

    // compact
    const { data: data3 } = await useFetch(config.SITE_URL + '/data.json');
    const rows3 = data3.value || [];

    // all
    const { data: data4 } = await useFetch(config.SITE_URL + '/data.json');
    const rows4 = data4.value || [];
</script>
