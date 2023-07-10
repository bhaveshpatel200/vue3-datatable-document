<template>
    <div>
        <div class="flex items-center justify-between mb-5">
            <h2 class="text-3xl">Slot</h2>
            <a target="_blank" href="https://github.com/bhaveshpatel200/vue3-datatable-document/blob/main/pages/slot.vue" class="btn">
                <icon-github class="w-5 h-5 mr-2" />
                View Source
            </a>
        </div>

        <!-- <vue3-datatable :rows="rows" :columns="cols" :loading="loading">
            <template #id="data">
                <strong>#{{ data.value.id }}</strong>
            </template>
            <template #email="data">
                <a :href="`mailto:${data.value.email}`" class="text-primary hover:underline">{{ data.value.email }}</a>
            </template>
        </vue3-datatable> -->

        <vue3-datatable :rows="rows" :columns="cols" :loading="loading" :totalRows="total_rows" :isServerMode="true" :pageSize="params.pagesize" @change="changeServer">
            <template #id="data">
                <strong>#{{ data.value.id }}</strong>
            </template>
            <template #email="data">
                <a :href="`mailto:${data.value.email}`" class="text-primary hover:underline">{{ data.value.email }}</a>
            </template>
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
</script>
