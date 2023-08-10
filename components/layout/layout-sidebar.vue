<template>
    <div
        class="sidebar bg-white shadow z-20 fixed top-0 h-screen overflow-y-auto -left-[260px] md:left-0 whitespace-normal w-[260px] transition-all duration-300"
        :class="{ '!left-0': store.sidebar }"
    >
        <div class="w-full px-3">
            <div class="flex items-center justify-between flex-wrap sticky top-0 bg-white z-10">
                <NuxtLink to="/" class="flex items-center text-black py-4 w-full">
                    <span class="flex font-semibold items-center text-xl"> Vue3 Datatable </span>
                </NuxtLink>
            </div>

            <ul class="relative space-y-0.5 text-gray-500 pb-8">
                <li class="menu nav-item">
                    <NuxtLink to="/" class="nav-link">
                        <div class="flex items-center gap-1">
                            <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z"></path>
                                <path d="M19 16h-12a2 2 0 0 0 -2 2"></path>
                                <path d="M9 8h6"></path>
                            </svg>
                            <span> Documentation </span>
                        </div>
                    </NuxtLink>
                </li>

                <ul class="pl-5">
                    <li class="sub-item">
                        <NuxtLink to="/#install"> <icon-arrow-sub /> Installation </NuxtLink>
                    </li>
                    <li class="sub-item">
                        <NuxtLink to="/#props"><icon-arrow-sub /> Props </NuxtLink>
                    </li>
                    <li class="sub-item">
                        <NuxtLink to="/#events"><icon-arrow-sub /> Events </NuxtLink>
                    </li>
                    <li class="sub-item">
                        <NuxtLink to="/#methods"><icon-arrow-sub /> Methods </NuxtLink>
                    </li>
                    <li class="sub-item">
                        <NuxtLink to="/#slots"><icon-arrow-sub /> Slots </NuxtLink>
                    </li>
                    <li class="sub-item">
                        <NuxtLink to="/#usage"><icon-arrow-sub /> Usage </NuxtLink>
                    </li>
                    <li class="sub-item">
                        <NuxtLink to="/#license"><icon-arrow-sub /> License </NuxtLink>
                    </li>
                    <li class="sub-item">
                        <NuxtLink to="/#support"><icon-arrow-sub /> Support </NuxtLink>
                    </li>
                </ul>

                <li class="px-3 pt-5 pb-3 text-sm font-semibold leading-none uppercase text-black">Examples</li>

                <li class="menu nav-item">
                    <NuxtLink to="/static-mode" class="nav-link"><icon-grid-static /> Static Mode </NuxtLink>
                </li>
                <li class="menu nav-item">
                    <NuxtLink to="/advanced" class="nav-link"><icon-grid-advanced /> Advanced </NuxtLink>
                </li>
                <li class="menu nav-item">
                    <NuxtLink to="/basic" class="nav-link"><icon-grid /> Basic </NuxtLink>
                </li>
                <li class="menu nav-item">
                    <NuxtLink to="/sorting" class="nav-link"><icon-grid-sort /> Sorting</NuxtLink>
                </li>
                <li class="menu nav-item">
                    <NuxtLink to="/alt-pagination" class="nav-link"><icon-grid-pagination /> Alt Pagination</NuxtLink>
                </li>
                <li class="menu nav-item">
                    <NuxtLink to="/custom-page-size" class="nav-link"><icon-grid-custom /> Custom Page Size & Info </NuxtLink>
                </li>
                <li class="menu nav-item">
                    <NuxtLink to="/search" class="nav-link"><icon-grid-search /> Global Search</NuxtLink>
                </li>
                <li class="menu nav-item">
                    <NuxtLink to="/checkbox" class="nav-link"><icon-grid-checkbox /> Checkbox</NuxtLink>
                </li>
                <li class="menu nav-item">
                    <NuxtLink to="/slot" class="nav-link"><icon-grid-slot /> Slot</NuxtLink>
                </li>
                <li class="menu nav-item">
                    <NuxtLink to="/custom-message" class="nav-link"><icon-grid-custom /> Custom Text</NuxtLink>
                </li>
                <li class="menu nav-item">
                    <NuxtLink to="/column-filter" class="nav-link"><icon-grid-filter /> Column Filter</NuxtLink>
                </li>
                <li class="menu nav-item">
                    <NuxtLink to="/skin" class="nav-link"><icon-grid-skin /> Skin</NuxtLink>
                </li>
                <li class="menu nav-item">
                    <NuxtLink to="/actions" class="nav-link"><icon-grid-action /> Actions</NuxtLink>
                </li>
                <li class="menu nav-item">
                    <NuxtLink to="/rowclick" class="nav-link"><icon-grid-click /> Row Click</NuxtLink>
                </li>
                <li class="menu nav-item">
                    <NuxtLink to="/sticky-header" class="nav-link"><icon-grid-sticky /> Sticky Header</NuxtLink>
                </li>
                <li class="menu nav-item">
                    <NuxtLink to="/header-clone" class="nav-link"><icon-grid-clone /> Clone Header</NuxtLink>
                </li>
                <li class="menu nav-item">
                    <NuxtLink to="/columnchooser" class="nav-link"><icon-grid-column /> Column Chooser</NuxtLink>
                </li>
                <li class="menu nav-item">
                    <NuxtLink to="/skeleton-loader" class="nav-link"><icon-grid-loader /> Skeleton Loader</NuxtLink>
                </li>
                <li class="menu nav-item">
                    <NuxtLink to="/methods" class="nav-link"><icon-grid-method /> Methods</NuxtLink>
                </li>
                <li class="menu nav-item pt-4">Coming Soon (More Samples)</li>
            </ul>
        </div>
    </div>
</template>
<script setup>
    import { useAppStore } from '@/stores/index';
    const store = useAppStore();
</script>
