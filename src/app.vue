<script setup lang="ts">
import { useSiteSettingsApi } from "~/api/site-settings/api"
import { useSiteSettingsStore } from "~/entities/site-settings/site-settings.store"

const { t } = useI18n()
const siteSettingsApi = useSiteSettingsApi()
const siteSettingsStore = useSiteSettingsStore()
const { siteSettings } = storeToRefs(siteSettingsStore)

const { data, error } = await useAsyncData("app", async () => {
  const request = [siteSettingsApi.getSiteSettings()]

  return await Promise.all(request)
})
const [_siteSettings] = data.value || []

onMounted(() => {
  console.log("App mounted, site settings:", _siteSettings?.data)
  siteSettings.value = _siteSettings?.data
})

useHead({ titleTemplate: (title) => (title ? `${title} | ${t("labels.app_name")}` : t("labels.app_name")) })
</script>

<template>
  <app-root />
</template>
