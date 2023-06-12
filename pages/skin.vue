<template>
    <div>
        <div class="flex items-center justify-between mb-5">
            <h2 class="text-3xl">Skin - Striped</h2>
            <a target="_blank" href="https://github.com/bhaveshpatel200/vue3-datatable-document/blob/main/pages/skin.vue" class="btn">
                <icon-github class="w-5 h-5 mr-2" />
                View Source
            </a>
        </div>

        <vue3-datatable :rows="rows" :columns="cols" :loading="loading" skin="bh-table-striped"> </vue3-datatable>

        <!-- hover -->
        <div class="flex items-center justify-between mb-5 border-t border-gray-200 mt-10 pt-10">
            <h2 class="text-3xl">Skin - Hover</h2>
            <a target="_blank" href="https://github.com/bhaveshpatel200/vue3-datatable-document/blob/main/pages/skin.vue" class="btn">
                <icon-github class="w-5 h-5 mr-2" />
                View Source
            </a>
        </div>

        <vue3-datatable :rows="rows1" :columns="cols" :loading="loading1" skin="bh-table-hover"> </vue3-datatable>

        <!-- bordered -->
        <div class="flex items-center justify-between mb-5 border-t border-gray-200 mt-10 pt-10">
            <h2 class="text-3xl">Skin - Bordered</h2>
            <a target="_blank" href="https://github.com/bhaveshpatel200/vue3-datatable-document/blob/main/pages/skin.vue" class="btn">
                <icon-github class="w-5 h-5 mr-2" />
                View Source
            </a>
        </div>

        <vue3-datatable :rows="rows2" :columns="cols" :loading="loading2" skin="bh-table-bordered"> </vue3-datatable>

        <!-- compact -->
        <div class="flex items-center justify-between mb-5 border-t border-gray-200 mt-10 pt-10">
            <h2 class="text-3xl">Skin - Compact</h2>
            <a target="_blank" href="https://github.com/bhaveshpatel200/vue3-datatable-document/blob/main/pages/skin.vue" class="btn">
                <icon-github class="w-5 h-5 mr-2" />
                View Source
            </a>
        </div>

        <vue3-datatable :rows="rows3" :columns="cols" :loading="loading3" skin="bh-table-compact"> </vue3-datatable>

        <!-- all -->
        <div class="flex items-center justify-between mb-5 border-t border-gray-200 mt-10 pt-10">
            <h2 class="text-3xl">Skin - All</h2>
            <a target="_blank" href="https://github.com/bhaveshpatel200/vue3-datatable-document/blob/main/pages/skin.vue" class="btn">
                <icon-github class="w-5 h-5 mr-2" />
                View Source
            </a>
        </div>

        <vue3-datatable :rows="rows4" :columns="cols" :loading="loading4" skin="bh-table-striped bh-table-hover bh-table-bordered bh-table-compact"> </vue3-datatable>
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
            { field: 'id', title: 'ID', isUnique: true },
            { field: 'firstName', title: 'First Name' },
            { field: 'lastName', title: 'Last Name' },
            { field: 'email', title: 'Email' },
            { field: 'phone', title: 'Phone' },
        ]) || [];

    // striped
    const { data } = await useFetch(config.SITE_URL + '/data.json');
    let rows: any = [];
    setTimeout(() => {
        rows = data.value || [];
        loading.value = false;
    }, 1000);

    // hover
    const { data: data1 } = await useFetch(config.SITE_URL + '/data.json');
    let rows1: any = [];
    const loading1: any = ref(true);
    setTimeout(() => {
        rows1 = data1.value || [];
        loading1.value = false;
    }, 1000);

    // bordered
    const { data: data2 } = await useFetch(config.SITE_URL + '/data.json');
    let rows2: any = [];
    const loading2: any = ref(true);
    setTimeout(() => {
        rows2 = data2.value || [];
        loading2.value = false;
    }, 1000);

    // compact
    const { data: data3 } = await useFetch(config.SITE_URL + '/data.json');
    let rows3: any = [];
    const loading3: any = ref(true);
    setTimeout(() => {
        rows3 = data3.value || [];
        loading3.value = false;
    }, 1000);

    // all
    const { data: data4 } = await useFetch(config.SITE_URL + '/data.json');
    let rows4: any = [];
    const loading4: any = ref(true);
    setTimeout(() => {
        rows4 = data4.value || [];
        loading4.value = false;
    }, 1000);
</script>
