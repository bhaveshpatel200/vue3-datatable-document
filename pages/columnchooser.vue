<template>
    <div>
        <div class="flex items-center justify-between mb-5">
            <h2 class="text-3xl">Column Chooser</h2>
            <a target="_blank" href="https://github.com/bhaveshpatel200/vue3-datatable-document/blob/main/pages/columnchooser.vue" class="btn">
                <icon-github class="w-5 h-5 mr-2" />
                View Source
            </a>
        </div>

        <div class="mb-5 relative">
            <button type="button" class="btn gap-2" @click="isOpen = !isOpen">
                Column Chooser
                <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="transition"
                    :class="{ 'rotate-180': isOpen }"
                >
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </button>
            <ul v-if="isOpen" class="absolute left-0 mt-0.5 p-2.5 min-w-[150px] bg-white rounded shadow-md space-y-1 z-10">
                <li v-for="col in cols" :key="col.field">
                    <label class="flex items-center gap-2 w-full cursor-pointer text-gray-600 hover:text-black">
                        <input type="checkbox" class="form-checkbox" :checked="!col.hide" @change="col.hide = !$event.target.checked" />
                        <span>{{ col.title }}</span>
                    </label>
                </li>
            </ul>
        </div>

        <!-- <vue3-datatable :rows="rows" :columns="cols" :loading="loading" :sortable="true"> </vue3-datatable> -->
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
    const isOpen = ref(false);

    onMounted(() => {
        getUsers();
    });

    const loading: any = ref(true);
    const total_rows = ref(0);

    const params = reactive({ current_page: 1, pagesize: 10, sort_column: 'id', sort_direction: 'asc' });
    const rows: any = ref(null);

    const cols =
        ref([
            { field: 'id', title: 'ID', isUnique: true, hide: false },
            { field: 'firstName', title: 'First Name', hide: false },
            { field: 'lastName', title: 'Last Name', hide: false },
            { field: 'email', title: 'Email', hide: false },
            { field: 'phone', title: 'Phone', hide: false },
            { field: 'company', title: 'Company', hide: false },
            { field: 'address.street', title: 'Address', hide: false },
            { field: 'age', title: 'Age', type: 'number', hide: true },
            { field: 'dob', title: 'Birthdate', type: 'date', hide: true },
            { field: 'isActive', title: 'Active', type: 'bool', hide: true },
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
