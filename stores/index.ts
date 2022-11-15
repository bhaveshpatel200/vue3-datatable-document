import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
    state: () => ({
        sidebar: false,
    }),
    actions: {
        toggleSidebar(state: boolean = false) {
            this.sidebar = !this.sidebar;
        },
    },
    getters: {},
});