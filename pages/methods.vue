<template>
    <div>
        <div class="flex items-center justify-between mb-5">
            <h2 class="text-3xl">Methods</h2>
            <a target="_blank" href="https://github.com/bhaveshpatel200/vue3-datatable-document/blob/main/pages/methods.vue" class="btn">
                <icon-github class="w-5 h-5 mr-2" />
                View Source
            </a>
        </div>

        <div class="my-6 flex items-center flex-wrap gap-4 font-semibold">
            <button type="button" class="btn btn-outline" @click="getSelectedRows()">Get Selected Rows</button>
            <button type="button" class="btn btn-outline" @click="clearSelectedRows()">Clear Selected Rows</button>
            <button type="button" class="btn btn-outline" @click="selectRow(1)">Select 2<sup class="mr-1">nd</sup> Rows</button>
            <button type="button" class="btn btn-outline" @click="unselectRow(1)">Unselect 2<sup class="mr-1">nd</sup> Row</button>
            <button type="button" class="btn btn-outline" @click="isRowSelected(1)">Check 2<sup class="mr-1">nd</sup> Row Selected</button>
            <button type="button" class="btn btn-outline" @click="getColumnFilters()">Get Column Filters</button>
            <button type="button" class="btn btn-outline" @click="reset()">Reset</button>
        </div>

        <vue3-datatable ref="datatable" :rows="rows" :columns="cols" :loading="loading" :hasCheckbox="true" :sortable="true" :columnFilter="true" class="column-filter"> </vue3-datatable>
    </div>
</template>
<script setup lang="ts">
    import { ref } from 'vue';
    import Vue3Datatable from '@bhplugin/vue3-datatable';
    import '@bhplugin/vue3-datatable/dist/style.css';
    const config = useRuntimeConfig();
    const datatable: any = ref(null);

    onMounted(() => {
        getUsers();
    });

    const loading: any = ref(true);
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
                body: JSON.stringify({ pagesize: 500 }),
            });

            const data = await response.json();

            rows.value = data?.data;
        } catch {}

        loading.value = false;
    };

    // methods
    const getSelectedRows = () => {
        const selected = datatable.value.getSelectedRows();
        console.log(selected);
        alert('Rows selected: ' + selected?.length || 0);
    };
    const clearSelectedRows = () => {
        const selected = datatable.value.getSelectedRows();
        datatable.value.clearSelectedRows();
        alert('Rows unselected: ' + selected?.length || 0);
    };
    const selectRow = (index: number) => {
        datatable.value.selectRow(index);
        alert('Rows selected with position: ' + (index + 1));
    };
    const unselectRow = (index: number) => {
        datatable.value.unselectRow(index);
        alert('Rows unselected with position: ' + (index + 1));
    };
    const isRowSelected = (index: number) => {
        const selected = datatable.value.isRowSelected(index);
        alert('Rows with position ' + (index + 1) + ' selected: ' + selected);
    };
    const getColumnFilters = () => {
        console.log(datatable.value.getColumnFilters());
        alert('Check console log to see the column filters');
    };
    const reset = () => {
        datatable.value.reset();
        alert('All options like selected rows, filter, search, currennt page, pagesize etc successfully resets');
    };
</script>
<style>
    .bh-datatable .bh-table-responsive {
        @apply min-h-[380px];
    }
</style>
