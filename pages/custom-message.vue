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
            <input v-model="params.search" type="text" class="form-input max-w-xs" placeholder="Search..." />
        </div>

        <!-- <vue3-datatable
            :rows="rows"
            :columns="cols"
            :loading="loading"
            :search="search"
            noDataContent="No records found in the database."
            paginationInfo="Отображение от {0} до {1} записей из {2} записей"
        >
        </vue3-datatable> -->
        <vue3-datatable
            :rows="rows"
            :columns="cols"
            :loading="loading"
            :totalRows="total_rows"
            :isServerMode="true"
            :pageSize="params.pagesize"
            :search="params.search"
            noDataContent="No records found in the database."
            paginationInfo="Отображение от {0} до {1} записей из {2} записей"
            @change="changeServer"
        >
        </vue3-datatable>
    </div>
</template>
<script setup lang="ts">
    import { ref, toRaw } from 'vue';
    import Vue3Datatable from '@bhplugin/vue3-datatable';
    import '@bhplugin/vue3-datatable/dist/style.css';
    const loading: any = ref(true);
    const total_rows = ref(0);

    const params = reactive({
        current_page: 1,
        pagesize: 10,
        search: '',
        column_filters: [],
    });
    const rows: any = ref(null);

    const cols =
        ref([
            { field: 'id', title: 'ID', isUnique: true, type: 'number' },
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
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(toRaw(params)),
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
        params.search = data.search;

        if (data.change_type === 'search') {
            filterUsers();
        } else {
            getUsers();
        }
    };
</script>
