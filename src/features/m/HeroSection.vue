<template>
  <app-section-fluid class="min-h-[735px] overflow-hidden !bg-[#6f8f6e] md:min-h-[820px]">
    <div
      class="flex h-full w-full flex-col items-start gap-6 pt-[30px] md:flex-row md:items-center md:justify-between md:gap-8 md:pt-0">
      <div class="flex w-full flex-col flex-nowrap items-start gap-[25px] md:w-1/2 md:gap-[42px]">
        <div class="flex flex-col flex-nowrap items-start gap-[10px] self-stretch md:gap-[20px]">
          <h1 v-html="t('title')"
            class="font-['Onest'] text-mobile-headline-1 font-semibold text-[#fff] md:text-headline-1" />
          <p v-html="t('description')"
            class="text-left font-['Onest'] text-mobile-body-16 font-normal text-[#fff] md:text-body-20" />
        </div>
        <ui-button class="min-w-full text-green-500 md:min-w-[223px]" color="white" @click="show">
          {{ t("button") }}
        </ui-button>
      </div>
      <div class="w-full md:w-1/2">
        <img src="/img/ill-mob.png" alt="" class="h-auto w-full md:hidden" />
        <img src="/img/ill-des.png" alt="" class="hidden h-auto w-full md:block" />
      </div>
    </div>
  </app-section-fluid>
</template>

<script lang="ts" setup>
import AppSectionFluid from "~/widgets/layout/app-section-fluid.vue"

const { t } = useI18n({ useScope: "local" })
const modal = useModal()
const show = () => modal.show("join-to-modal")
</script>

<i18n>
{
  "en": {
    "title": "Join the Mental Health platform",
    "description": "Work in a strong professional community, <br /> develop yourself and find new clients",
    "button": "Join"
  },
  "ru": {
    "title": "Присоединяйтесь к платформе <br /> Душевное Здоровье",
    "description": "Работайте в сильном профессиональном сообществе, <br /> развивайтесь и находите новых клиентов",
    "button": "Присоединиться"
  },
  "uz": {
    "title": "Ruhiy salomatlik platformasiga qo'shiling",
    "description": "Kuchli professional hamjamiyatda ishlang, <br /> o'zingizni rivojlantiring va yangi mijozlar toping",
    "button": "Qo'shilish"
  }
}
</i18n>
