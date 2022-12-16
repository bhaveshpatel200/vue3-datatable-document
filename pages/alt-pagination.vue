<template>
    <div>
        <div class="flex items-center justify-between mb-5">
            <h2 class="text-3xl">Alt Pagination</h2>
            <a target="_blank" href="https://github.com/bhaveshpatel200/vue3-datatable-document/blob/main/pages/alt-pagination.vue" class="btn">
                <icon-github class="w-5 h-5 mr-2" />
                View Source
            </a>
        </div>

        <vue3-datatable :rows="rows" :columns="cols" :totalRows="rows?.length" firstArrow="First" lastArrow="Last" previousArrow="Prev" nextArrow="Next" :showNumbersCount="3" class="alt-pagination">
        </vue3-datatable>

        <!-- disable first last pagination -->
        <div class="flex items-center justify-between mb-5 border-t border-gray-200 mt-10 pt-10">
            <h2 class="text-3xl">Disable First Last Pagination</h2>
            <a target="_blank" href="https://github.com/bhaveshpatel200/vue3-datatable-document/blob/main/pages/alt-pagination.vue" class="btn">
                <icon-github class="w-5 h-5 mr-2" />
                View Source
            </a>
        </div>

        <vue3-datatable :rows="rows1" :columns="cols1" :totalRows="rows1?.length" :showFirstPage="false" :showLastPage="false"> </vue3-datatable>

        <!-- pagination without number -->
        <div class="flex items-center justify-between mb-5 border-t border-gray-200 mt-10 pt-10">
            <h2 class="text-3xl">Pagination Without number</h2>
            <a target="_blank" href="https://github.com/bhaveshpatel200/vue3-datatable-document/blob/main/pages/alt-pagination.vue" class="btn">
                <icon-github class="w-5 h-5 mr-2" />
                View Source
            </a>
        </div>

        <vue3-datatable :rows="rows2" :columns="cols2" :totalRows="rows2?.length" :showNumbers="false"> </vue3-datatable>

        <!-- next previous -->
        <div class="flex items-center justify-between mb-5 border-t border-gray-200 mt-10 pt-10">
            <h2 class="text-3xl">Next Previous</h2>
            <a target="_blank" href="https://github.com/bhaveshpatel200/vue3-datatable-document/blob/main/pages/alt-pagination.vue" class="btn">
                <icon-github class="w-5 h-5 mr-2" />
                View Source
            </a>
        </div>

        <vue3-datatable
            :rows="rows2"
            :columns="cols2"
            :totalRows="rows2?.length"
            :showNumbers="false"
            :showFirstPage="false"
            :showLastPage="false"
            previousArrow="Previous"
            nextArrow="Next"
            class="next-prev-pagination"
            paginationInfo="{0} to {1} of {2}"
            :showPageSize="false"
        >
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
            { field: 'id', title: 'ID' },
            { field: 'firstName', title: 'First Name' },
            { field: 'lastName', title: 'Last Name' },
            { field: 'email', title: 'Email' },
            { field: 'phone', title: 'Phone' },
        ]) || [];

    const { data } = await useFetch(config.SITE_URL + '/data.json');
    const rows = data.value || [];

    // disable first last pagination
    const cols1 =
        ref([
            { field: 'id', title: 'ID' },
            { field: 'firstName', title: 'First Name' },
            { field: 'lastName', title: 'Last Name' },
            { field: 'email', title: 'Email' },
            { field: 'phone', title: 'Phone' },
        ]) || [];
    const { data: data1 } = await useFetch(config.SITE_URL + '/data.json');
    const rows1 = data1.value || [];

    // pagination without number
    const cols2 =
        ref([
            { field: 'id', title: 'ID' },
            { field: 'firstName', title: 'First Name' },
            { field: 'lastName', title: 'Last Name' },
            { field: 'email', title: 'Email' },
            { field: 'phone', title: 'Phone' },
        ]) || [];

    const { data: data2 } = await useFetch(config.SITE_URL + '/data.json');
    const rows2 = data2.value || [];

    // next previous
    const cols3 =
        ref([
            { field: 'id', title: 'ID' },
            { field: 'firstName', title: 'First Name' },
            { field: 'lastName', title: 'Last Name' },
            { field: 'email', title: 'Email' },
            { field: 'phone', title: 'Phone' },
        ]) || [];

    const { data: data3 } = await useFetch(config.SITE_URL + '/data.json');
    const rows3 = data3.value || [];
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
