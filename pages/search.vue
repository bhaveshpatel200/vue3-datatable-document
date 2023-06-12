<template>
    <div>
        <div class="flex items-center justify-between mb-5">
            <h2 class="text-3xl">Global Serach</h2>
            <a target="_blank" href="https://github.com/bhaveshpatel200/vue3-datatable-document/blob/main/pages/search.vue" class="btn">
                <icon-github class="w-5 h-5 mr-2" />
                View Source
            </a>
        </div>

        <div class="mb-5">
            <input v-model="search" type="text" class="form-input max-w-xs" placeholder="Search..." />
        </div>

        <vue3-datatable :rows="rows" :columns="cols" :loading="loading" :search="search"> </vue3-datatable>

        <!-- specific column search -->
        <div class="flex items-center justify-between mb-5 border-t border-gray-200 mt-10 pt-10">
            <h2 class="text-3xl">Specific Column Search</h2>
            <a target="_blank" href="https://github.com/bhaveshpatel200/vue3-datatable-document/blob/main/pages/search.vue" class="btn">
                <icon-github class="w-5 h-5 mr-2" />
                View Source
            </a>
        </div>

        <div class="mb-5">
            <input v-model="search1" type="text" class="form-input max-w-xs" placeholder="Search Firsname and Lastname..." />
        </div>

        <vue3-datatable :rows="rows1" :columns="cols1" :loading="loading1" :search="search1"> </vue3-datatable>
    </div>
</template>
<script setup lang="ts">
    import { ref } from 'vue';
    import Vue3Datatable from '@bhplugin/vue3-datatable';
    import '@bhplugin/vue3-datatable/dist/style.css';
    const config = useRuntimeConfig();
    const loading: any = ref(true);

    const search = ref('');
    const cols =
        ref([
            { field: 'id', title: 'ID' },
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

    // specific column search
    const search1 = ref('');
    const cols1 =
        ref([
            { field: 'id', title: 'ID', isUnique: true, search: false },
            { field: 'firstName', title: 'First Name' },
            { field: 'lastName', title: 'Last Name' },
            { field: 'email', title: 'Email', search: false },
            { field: 'phone', title: 'Phone', search: false },
        ]) || [];

    const { data: data1 } = await useFetch(config.SITE_URL + '/data.json');
    let rows1: any = [];
    const loading1: any = ref(true);
    setTimeout(() => {
        rows1 = data1.value || [];
        loading1.value = false;
    }, 1000);
</script>
