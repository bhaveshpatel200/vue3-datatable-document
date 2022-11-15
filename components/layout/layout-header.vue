<template>
  <div>
    <header>
      <div class="relative bg-white flex w-full items-center px-5 py-3 shadow">
        <button
          type="button"
          class="py-2 px-2 text-gray-500 hover:bg-gray-200 rounded"
        >
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.5"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-6 h-6"
          >
            <path
              d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"
            ></path>
          </svg>
        </button>

        <button
          type="button"
          class="py-2 px-2 text-gray-500 bg-gray-200 rounded-full ml-auto md:hidden block"
          @click="store.toggleSidebar()"
        >
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.5"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-6 h-6"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>
  </div>
</template>
<script setup>
import { useAppStore } from "@/stores/index";
const store = useAppStore();
</script>
