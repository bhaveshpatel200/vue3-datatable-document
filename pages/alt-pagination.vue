<template>
    <div>
        <div class="flex items-center justify-between mb-5">
            <h2 class="text-3xl">Alt Pagination</h2>
            <a target="_blank" href="https://github.com/bhaveshpatel200/vue3-datatable-document/blob/main/pages/alt-pagination.vue" class="btn">
                <icon-github class="w-5 h-5 mr-2" />
                View Source
            </a>
        </div>

        <!-- <vue3-datatable :rows="rows" :columns="cols" :loading="loading" firstArrow="First" lastArrow="Last" previousArrow="Prev" nextArrow="Next" :showNumbersCount="3" class="alt-pagination">
        </vue3-datatable> -->
        <vue3-datatable
            :rows="rows"
            :columns="cols"
            :loading="loading"
            :totalRows="total_rows"
            :isServerMode="true"
            :pageSize="params.pagesize"
            firstArrow="First"
            lastArrow="Last"
            previousArrow="Prev"
            nextArrow="Next"
            :showNumbersCount="3"
            class="alt-pagination"
            @change="changeServer"
        >
        </vue3-datatable>

        <!-- disable first last pagination -->
        <div class="flex items-center justify-between mb-5 border-t border-gray-200 mt-10 pt-10">
            <h2 class="text-3xl">Disable First Last Pagination</h2>
            <a target="_blank" href="https://github.com/bhaveshpatel200/vue3-datatable-document/blob/main/pages/alt-pagination.vue" class="btn">
                <icon-github class="w-5 h-5 mr-2" />
                View Source
            </a>
        </div>

        <!-- <vue3-datatable :rows="rows1" :columns="cols1" :loading="loading1" :showFirstPage="false" :showLastPage="false"> </vue3-datatable> -->
        <vue3-datatable
            :rows="rows1"
            :columns="cols1"
            :loading="loading1"
            :totalRows="total_rows1"
            :isServerMode="true"
            :pageSize="params1.pagesize"
            :showFirstPage="false"
            :showLastPage="false"
            @change="changeServer1"
        >
        </vue3-datatable>

        <!-- pagination without number -->
        <div class="flex items-center justify-between mb-5 border-t border-gray-200 mt-10 pt-10">
            <h2 class="text-3xl">Pagination Without number</h2>
            <a target="_blank" href="https://github.com/bhaveshpatel200/vue3-datatable-document/blob/main/pages/alt-pagination.vue" class="btn">
                <icon-github class="w-5 h-5 mr-2" />
                View Source
            </a>
        </div>

        <!-- <vue3-datatable :rows="rows2" :columns="cols2" :loading="loading2" :showNumbers="false"> </vue3-datatable> -->
        <vue3-datatable :rows="rows2" :columns="cols2" :loading="loading2" :totalRows="total_rows2" :isServerMode="true" :pageSize="params2.pagesize" :showNumbers="false" @change="changeServer2">
        </vue3-datatable>

        <!-- next previous -->
        <div class="flex items-center justify-between mb-5 border-t border-gray-200 mt-10 pt-10">
            <h2 class="text-3xl">Next Previous</h2>
            <a target="_blank" href="https://github.com/bhaveshpatel200/vue3-datatable-document/blob/main/pages/alt-pagination.vue" class="btn">
                <icon-github class="w-5 h-5 mr-2" />
                View Source
            </a>
        </div>

        <!-- <vue3-datatable
            :rows="rows3"
            :columns="cols3"
            :loading="loading3"
            :showNumbers="false"
            :showFirstPage="false"
            :showLastPage="false"
            previousArrow="Previous"
            nextArrow="Next"
            class="next-prev-pagination"
            paginationInfo="{0} to {1} of {2}"
            :showPageSize="false"
        >
        </vue3-datatable> -->
        <vue3-datatable
            :rows="rows3"
            :columns="cols3"
            :loading="loading3"
            :totalRows="total_rows3"
            :isServerMode="true"
            :pageSize="params3.pagesize"
            :showNumbers="false"
            :showFirstPage="false"
            :showLastPage="false"
            previousArrow="Previous"
            nextArrow="Next"
            class="next-prev-pagination"
            paginationInfo="{0} to {1} of {2}"
            :showPageSize="false"
            @change="changeServer3"
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
    });
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

    // disable first last pagination
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

    // pagination without number
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

    // next previous
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
</script>
<style>
    /* alt-pagination */
    .alt-pagination .bh-pagination .bh-page-item {
        @apply !w-max min-w-[32px] !rounded;
    }

    /* next-prev-pagination */
    .next-prev-pagination .bh-pagination .bh-page-item {
        @apply !w-max min-w-[100px] !rounded;
    }
    .next-prev-pagination .bh-pagination > div:first-child {
        @apply flex-col font-semibold;
    }
    .next-prev-pagination .bh-pagination .bh-pagination-number {
        @apply mx-auto gap-3;
    }
</style>
