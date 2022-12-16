<template>
    <div>
        <div class="flex items-center justify-between mb-5">
            <h2 class="text-3xl">Sorting</h2>
            <a target="_blank" href="https://github.com/bhaveshpatel200/vue3-datatable-document/blob/main/pages/sorting.vue" class="btn">
                <icon-github class="w-5 h-5 mr-2" />
                View Source
            </a>
        </div>

        <vue3-datatable :rows="rows" :columns="cols" :totalRows="rows?.length" :sortable="true"> </vue3-datatable>
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

    const { data } = await useFetch(config.SITE_URL + '/data.json');
    const rows = data.value || [];
</script>
