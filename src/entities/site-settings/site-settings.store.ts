// export const useSiteSettingsStore = defineStore("site-settings", () => {
//   const siteSettings = reactive<Record<string, any>>({})

//   return {
//     siteSettings
//   }
// })



import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useSiteSettingsStore = defineStore('site-settings', () => {
  const siteSettings = reactive({})

  return { siteSettings }
})