import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "D:/Projects/plugins/vue3-vite/vue3-datatable-document/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}