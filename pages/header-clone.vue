<template>
    <div>
        <div class="flex items-center justify-between mb-5">
            <h2 class="text-3xl">Clone Header in Footer</h2>
            <a target="_blank" href="https://github.com/bhaveshpatel200/vue3-datatable-document/blob/main/pages/header-clone.vue" class="btn">
                <icon-github class="w-5 h-5 mr-2" />
                View Source
            </a>
        </div>

        <!-- <vue3-datatable :rows="rows" :columns="cols" :loading="loading" :sortable="true" :cloneHeaderInFooter="true"> </vue3-datatable> -->
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
            :cloneHeaderInFooter="true"
            @change="changeServer"
        >
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
    });

    const loading: any = ref(true);
    const total_rows = ref(0);

    const params = reactive({ current_page: 1, pagesize: 10, sort_column: 'id', sort_direction: 'asc' });
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
</script>
