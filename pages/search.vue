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
            <input v-model="params.search" type="text" class="form-input max-w-xs" placeholder="Search..." />
        </div>

        <!-- <vue3-datatable :rows="rows" :columns="cols" :loading="loading" :search="search"> </vue3-datatable> -->
        <vue3-datatable :rows="rows" :columns="cols" :loading="loading" :totalRows="total_rows" :isServerMode="true" :pageSize="params.pagesize" :search="params.search" @change="changeServer">
        </vue3-datatable>

        <!-- specific column search -->
        <div class="flex items-center justify-between mb-5 border-t border-gray-200 mt-10 pt-10">
            <h2 class="text-3xl">Specific Column Search</h2>
            <a target="_blank" href="https://github.com/bhaveshpatel200/vue3-datatable-document/blob/main/pages/search.vue" class="btn">
                <icon-github class="w-5 h-5 mr-2" />
                View Source
            </a>
        </div>

        <div class="mb-5">
            <input v-model="params1.search" type="text" class="form-input max-w-xs" placeholder="Search Firsname and Lastname..." />
        </div>

        <!-- <vue3-datatable :rows="rows1" :columns="cols1" :loading="loading1" :search="search1"> </vue3-datatable> -->
        <vue3-datatable :rows="rows1" :columns="cols1" :loading="loading1" :totalRows="total_rows1" :isServerMode="true" :pageSize="params1.pagesize" :search="params1.search" @change="changeServer1">
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
        search: '',
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
        getUsers1();
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
        params.search = data.search;

        if (data.change_type === 'search') {
            filterUsers();
        } else {
            getUsers();
        }
    };

    // specific column search
    const loading1: any = ref(true);
    const total_rows1 = ref(0);

    const params1 = reactive({
        current_page: 1,
        pagesize: 10,
        search: '',
        column_filters: [],
    });
    const rows1: any = ref(null);

    const cols1 =
        ref([
            { field: 'id', title: 'ID', isUnique: true, search: false },
            { field: 'firstName', title: 'First Name' },
            { field: 'lastName', title: 'Last Name' },
            { field: 'email', title: 'Email', search: false },
            { field: 'age', title: 'Age', type: 'number', search: false },
            { field: 'dob', title: 'Birthdate', type: 'date', search: false },
            { field: 'address.city', title: 'City', search: false },
            { field: 'isActive', title: 'Active', type: 'bool', search: false },
        ]) || [];

    let controller1: any;
    let timer1: any;
    const filterUsers1 = () => {
        clearTimeout(timer1);
        timer1 = setTimeout(() => {
            getUsers1();
        }, 300);
    };
    const getUsers1 = async () => {
        try {
            // cancel request if previous request still pending before next request fire
            if (controller1) {
                controller1.abort();
            }
            controller1 = new AbortController();
            const signal = controller1.signal;

            loading1.value = true;

            const response = await fetch('/api/user', {
                method: 'POST',
                body: JSON.stringify(params1),
                signal: signal, // Assign the signal to the fetch request
            });

            const data = await response.json();

            rows1.value = data?.data;
            total_rows1.value = data?.meta?.total;
        } catch {}

        loading1.value = false;
    };
    const changeServer1 = (data: any) => {
        params1.current_page = data.current_page;
        params1.pagesize = data.pagesize;
        params1.column_filters = data.column_filters;
        params1.search = data.search;

        if (data.change_type === 'search') {
            filterUsers1();
        } else {
            getUsers1();
        }
    };
</script>
