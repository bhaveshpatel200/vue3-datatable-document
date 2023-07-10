<template>
    <div>
        <div class="flex items-center justify-between mb-5">
            <h2 class="text-3xl">Skin - Striped</h2>
            <a target="_blank" href="https://github.com/bhaveshpatel200/vue3-datatable-document/blob/main/pages/skin.vue" class="btn">
                <icon-github class="w-5 h-5 mr-2" />
                View Source
            </a>
        </div>

        <!-- <vue3-datatable :rows="rows" :columns="cols" :loading="loading" skin="bh-table-striped"> </vue3-datatable> -->
        <vue3-datatable :rows="rows" :columns="cols" :loading="loading" :totalRows="total_rows" :isServerMode="true" :pageSize="params.pagesize" skin="bh-table-striped" @change="changeServer">
        </vue3-datatable>

        <!-- hover -->
        <div class="flex items-center justify-between mb-5 border-t border-gray-200 mt-10 pt-10">
            <h2 class="text-3xl">Skin - Hover</h2>
            <a target="_blank" href="https://github.com/bhaveshpatel200/vue3-datatable-document/blob/main/pages/skin.vue" class="btn">
                <icon-github class="w-5 h-5 mr-2" />
                View Source
            </a>
        </div>

        <!-- <vue3-datatable :rows="rows1" :columns="cols" :loading="loading1" skin="bh-table-hover"> </vue3-datatable> -->
        <vue3-datatable :rows="rows1" :columns="cols1" :loading="loading1" :totalRows="total_rows1" :isServerMode="true" :pageSize="params1.pagesize" skin="bh-table-hover" @change="changeServer1">
        </vue3-datatable>

        <!-- bordered -->
        <div class="flex items-center justify-between mb-5 border-t border-gray-200 mt-10 pt-10">
            <h2 class="text-3xl">Skin - Bordered</h2>
            <a target="_blank" href="https://github.com/bhaveshpatel200/vue3-datatable-document/blob/main/pages/skin.vue" class="btn">
                <icon-github class="w-5 h-5 mr-2" />
                View Source
            </a>
        </div>

        <!-- <vue3-datatable :rows="rows2" :columns="cols" :loading="loading2" skin="bh-table-bordered"> </vue3-datatable> -->
        <vue3-datatable :rows="rows2" :columns="cols2" :loading="loading2" :totalRows="total_rows2" :isServerMode="true" :pageSize="params2.pagesize" skin="bh-table-bordered" @change="changeServer2">
        </vue3-datatable>

        <!-- compact -->
        <div class="flex items-center justify-between mb-5 border-t border-gray-200 mt-10 pt-10">
            <h2 class="text-3xl">Skin - Compact</h2>
            <a target="_blank" href="https://github.com/bhaveshpatel200/vue3-datatable-document/blob/main/pages/skin.vue" class="btn">
                <icon-github class="w-5 h-5 mr-2" />
                View Source
            </a>
        </div>

        <!-- <vue3-datatable :rows="rows3" :columns="cols" :loading="loading3" skin="bh-table-compact"> </vue3-datatable> -->
        <vue3-datatable :rows="rows3" :columns="cols3" :loading="loading3" :totalRows="total_rows3" :isServerMode="true" :pageSize="params3.pagesize" skin="bh-table-compact" @change="changeServer3">
        </vue3-datatable>

        <!-- all -->
        <div class="flex items-center justify-between mb-5 border-t border-gray-200 mt-10 pt-10">
            <h2 class="text-3xl">Skin - All</h2>
            <a target="_blank" href="https://github.com/bhaveshpatel200/vue3-datatable-document/blob/main/pages/skin.vue" class="btn">
                <icon-github class="w-5 h-5 mr-2" />
                View Source
            </a>
        </div>

        <!-- <vue3-datatable :rows="rows4" :columns="cols" :loading="loading4" skin="bh-table-striped bh-table-hover bh-table-bordered bh-table-compact"> </vue3-datatable> -->
        <vue3-datatable
            :rows="rows4"
            :columns="cols4"
            :loading="loading4"
            :totalRows="total_rows4"
            :isServerMode="true"
            :pageSize="params4.pagesize"
            skin="bh-table-striped bh-table-hover bh-table-bordered bh-table-compact"
            @change="changeServer4"
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
        setTimeout(() => {
            getUsers1();
        }, 10);
        setTimeout(() => {
            getUsers2();
        }, 20);
        setTimeout(() => {
            getUsers3();
        }, 30);
        setTimeout(() => {
            getUsers4();
        }, 40);
    });

    const loading: any = ref(true);
    const total_rows = ref(0);
    const params = reactive({ current_page: 1, pagesize: 10 });
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
        getUsers();
    };

    // hover
    const loading1: any = ref(true);
    const total_rows1 = ref(0);
    const params1 = reactive({ current_page: 1, pagesize: 10 });
    const rows1: any = ref(null);
    const cols1 =
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

    const getUsers1 = async () => {
        try {
            loading1.value = true;

            const response = await fetch('/api/user', {
                method: 'POST',
                body: JSON.stringify(params1),
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
        getUsers1();
    };

    // bordered
    const loading2: any = ref(true);
    const total_rows2 = ref(0);
    const params2 = reactive({ current_page: 1, pagesize: 10 });
    const rows2: any = ref(null);
    const cols2 =
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

    const getUsers2 = async () => {
        try {
            loading2.value = true;

            const response = await fetch('/api/user', {
                method: 'POST',
                body: JSON.stringify(params2),
            });

            const data = await response.json();

            rows2.value = data?.data;
            total_rows2.value = data?.meta?.total;
        } catch {}

        loading2.value = false;
    };
    const changeServer2 = (data: any) => {
        params2.current_page = data.current_page;
        params2.pagesize = data.pagesize;
        getUsers2();
    };

    // compact
    const loading3: any = ref(true);
    const total_rows3 = ref(0);
    const params3 = reactive({ current_page: 1, pagesize: 10 });
    const rows3: any = ref(null);
    const cols3 =
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

    const getUsers3 = async () => {
        try {
            loading3.value = true;

            const response = await fetch('/api/user', {
                method: 'POST',
                body: JSON.stringify(params3),
            });

            const data = await response.json();

            rows3.value = data?.data;
            total_rows3.value = data?.meta?.total;
        } catch {}

        loading3.value = false;
    };
    const changeServer3 = (data: any) => {
        params3.current_page = data.current_page;
        params3.pagesize = data.pagesize;
        getUsers3();
    };

    // all
    const loading4: any = ref(true);
    const total_rows4 = ref(0);
    const params4 = reactive({ current_page: 1, pagesize: 10 });
    const rows4: any = ref(null);
    const cols4 =
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

    const getUsers4 = async () => {
        try {
            loading4.value = true;

            const response = await fetch('/api/user', {
                method: 'POST',
                body: JSON.stringify(params4),
            });

            const data = await response.json();

            rows4.value = data?.data;
            total_rows4.value = data?.meta?.total;
        } catch {}

        loading4.value = false;
    };
    const changeServer4 = (data: any) => {
        params4.current_page = data.current_page;
        params4.pagesize = data.pagesize;
        getUsers4();
    };
</script>
