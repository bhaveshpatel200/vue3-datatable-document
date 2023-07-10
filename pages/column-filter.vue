<template>
    <div>
        <div class="flex items-center justify-between mb-5">
            <h2 class="text-3xl">Column Filter</h2>
            <a target="_blank" href="https://github.com/bhaveshpatel200/vue3-datatable-document/blob/main/pages/column-filter.vue" class="btn">
                <icon-github class="w-5 h-5 mr-2" />
                View Source
            </a>
        </div>

        <!-- <vue3-datatable :rows="rows" :columns="cols" :loading="loading" :columnFilter="true" class="column-filter"></vue3-datatable> -->
        <vue3-datatable
            :rows="rows"
            :columns="cols"
            :loading="loading"
            :totalRows="total_rows"
            :isServerMode="true"
            :pageSize="params.pagesize"
            :columnFilter="true"
            class="column-filter"
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
    const loading: any = ref(true);
    const total_rows = ref(0);

    const params = reactive({
        current_page: 1,
        pagesize: 10,
        column_filters: [],
    });
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

    onMounted(() => {
        getUsers();
    });

    let controller: any;
    let timer: any;
    const filterUsers = () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            getUsers();
        }, 300);
    };
    const getUsers = async () => {
        try {
            // cancel request if previous request still pending before next request fire
            if (controller) {
                controller.abort();
            }
            controller = new AbortController();
            const signal = controller.signal;

            loading.value = true;

            const response = await fetch('/api/user', {
                method: 'POST',
                body: JSON.stringify(params),
                signal: signal, // Assign the signal to the fetch request
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
        params.column_filters = data.column_filters;

        if (data.change_type === 'filter') {
            filterUsers();
        } else {
            getUsers();
        }
    };
</script>
<style>
    .bh-datatable .bh-table-responsive {
        @apply min-h-[380px];
    }
</style>
