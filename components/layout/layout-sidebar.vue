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

      <ul class="relative space-y-0.5 text-gray-500 pb-5">
        <li class="menu nav-item">
          <NuxtLink to="/" class="nav-link">
            <div class="flex items-center">
              <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
              <span class="ml-3"> Documentation </span>
            </div>
          </NuxtLink>
        </li>

        <ul class="!mt-3 pl-5">
          <li class="sub-item">
            <NuxtLink to="/#install">
              <span class="mr-2 text-2xl leading-5">•</span>
              Installation
            </NuxtLink>
          </li>
          <li class="sub-item">
            <NuxtLink to="/#props"><span class="mr-2 text-2xl leading-5">•</span> Props </NuxtLink>
          </li>
          <li class="sub-item">
            <NuxtLink to="/#events"><span class="mr-2 text-2xl leading-5">•</span> Events </NuxtLink>
          </li>
          <li class="sub-item">
            <NuxtLink to="/#methods"><span class="mr-2 text-2xl leading-5">•</span> Methods </NuxtLink>
          </li>
          <li class="sub-item">
            <NuxtLink to="/#slots"><span class="mr-2 text-2xl leading-5">•</span> Slots </NuxtLink>
          </li>
          <li class="sub-item">
            <NuxtLink to="/#usage"><span class="mr-2 text-2xl leading-5">•</span> Usage </NuxtLink>
          </li>
          <li class="sub-item">
            <NuxtLink to="/#license"><span class="mr-2 text-2xl leading-5">•</span> License </NuxtLink>
          </li>
          <li class="sub-item">
            <NuxtLink to="/#support"><span class="mr-2 text-2xl leading-5">•</span> Support </NuxtLink>
          </li>
        </ul>

        <li class="px-3 pt-5 pb-3 text-sm font-semibold leading-none uppercase text-black">Examples</li>

        <li class="menu nav-item">
          <NuxtLink to="/basic" class="nav-link"> Basic </NuxtLink>
        </li>
        <li class="menu nav-item">
          <NuxtLink to="/sorting" class="nav-link">Sorting</NuxtLink>
        </li>
        <li class="menu nav-item">
          <NuxtLink to="/custom-page-size" class="nav-link"> Custom Page Size & Info </NuxtLink>
        </li>
        <li class="menu nav-item">
          <NuxtLink to="/search" class="nav-link">Global Search</NuxtLink>
        </li>
        <li class="menu nav-item">
          <NuxtLink to="/column-search" class="nav-link">Specif Column Search</NuxtLink>
        </li>
        <li class="menu nav-item">
          <NuxtLink to="/checkbox" class="nav-link">Checkbox</NuxtLink>
        </li>
        <li class="menu nav-item">
          <NuxtLink to="/slot" class="nav-link">Slot</NuxtLink>
        </li>
        <li class="menu nav-item">Coming Soon (More Samples)</li>
      </ul>
    </div>
  </div>
</template>
<script setup>
  import { useAppStore } from '@/stores/index';
  const store = useAppStore();
</script>
