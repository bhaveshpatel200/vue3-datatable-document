<template>
    <div>
        <div class="flex items-center justify-between mb-5">
            <h2 class="text-3xl">Custom text for no data and pagination info</h2>
            <a target="_blank" href="https://github.com/bhaveshpatel200/vue3-datatable-document/blob/main/pages/custom-message.vue" class="btn">
                <icon-github class="w-5 h-5 mr-2" />
                View Source
            </a>
        </div>

        <div class="mb-5">
            <input v-model="search" type="text" class="form-input max-w-xs" placeholder="Search..." />
        </div>

        <vue3-datatable
            :rows="rows"
            :columns="cols"
            :totalRows="rows?.length"
            :search="search"
            noDataContent="No records found in the database."
            paginationInfo="Отображение от {0} до {1} записей из {2} записей"
            :loading="true"
        >
        </vue3-datatable>
    </div>
</template>
<script setup lang="ts">
    import { ref } from 'vue';
    import Vue3Datatable from '@bhplugin/vue3-datatable';
    import '@bhplugin/vue3-datatable/dist/style.css';
    const config = useRuntimeConfig();

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
    const rows = data.value || [];
</script>
