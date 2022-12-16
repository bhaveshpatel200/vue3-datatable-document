<template>
    <div>
        <div class="flex items-center justify-between mb-5">
            <h2 class="text-3xl">Actions</h2>
            <a target="_blank" href="https://github.com/bhaveshpatel200/vue3-datatable-document/blob/main/pages/actions.vue" class="btn">
                <icon-github class="w-5 h-5 mr-2" />
                View Source
            </a>
        </div>

        <vue3-datatable :rows="rows" :columns="cols" :totalRows="rows?.length">
            <template #id="data">
                <strong>#{{ data.value.id }}</strong>
            </template>
            <template #actions="data">
                <div class="flex gap-4">
                    <button type="button" class="btn btn-success" @click="viewUser(data.value)">View</button>
                    <button type="button" class="btn btn-danger" @click="deleteUser(data.value)">Delete</button>
                </div>
            </template>
        </vue3-datatable>
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
            { field: 'actions', title: 'Actions' },
        ]) || [];

    const { data } = await useFetch(config.SITE_URL + '/data.json');
    const rows = data.value || [];

    const viewUser = (user: any) => {
        alert('View User \n' + user.id + ', ' + user.firstName + ', ' + user.lastName + ', ' + user.email);
    };
    const deleteUser = (user: any) => {
        alert('Delete User \n' + user.id + ', ' + user.firstName + ', ' + user.lastName + ', ' + user.email);
    };
</script>
