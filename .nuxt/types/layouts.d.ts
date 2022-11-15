import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "D:/Projects/plugins/vue3-vite/vue3-datatable-document/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}