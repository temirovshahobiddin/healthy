<script setup>
const { t } = useI18n()
import { useSiteSettingsApi } from '~/api/site-settings/api'
import { useSiteSettingsStore } from '~/entities/site-settings/site-settings.store'

const siteSettingsApi = useSiteSettingsApi()
const siteSettingsStore = useSiteSettingsStore()
const { siteSettings } = storeToRefs(siteSettingsStore) // siteSettings is a ref

const { data, error, status } = await useAsyncData(
  'siteSettingsKey',
  () => siteSettingsApi.getSiteSettings()
)

if (error.value) {
  // handle error, maybe log or show toast
  console.error('Failed to fetch site settings:', error.value)
} else if (data.value && data.value.data) {
  // update the store reactively
  const settings = data.value.data
  Object.keys(settings).forEach((key) => {
    siteSettings.value[key] = settings[key]
  })
}

onMounted(() => {
  console.log("App mounted, site settings:", siteSettings.value)
})

useHead({ titleTemplate: (title) => (title ? `${title} | ${t("labels.app_name")}` : t("labels.app_name")) })
</script>

<template>
  <app-root />
</template>
