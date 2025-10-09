export const useSiteSettingsStore = defineStore("site-settings", () => {
  const siteSettings = reactive<Record<string, any>>({})

  return {
    siteSettings
  }
})
