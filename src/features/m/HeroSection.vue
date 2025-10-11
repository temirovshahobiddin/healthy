<template>
  <app-section-fluid class="min-h-[735px] overflow-hidden !bg-[#6f8f6e] md:min-h-[820px]">
    <div class="relative flex h-full w-full items-start pt-[30px] md:items-center md:pt-0">
      <div class="flex w-[328px] flex-1 flex-col flex-nowrap items-start gap-[25px] md:w-full md:gap-[42px] md:flex-0">
        <div class="flex flex-col flex-1 flex-nowrap items-start gap-[10px] self-stretch md:gap-[20px]">
          <h1
            v-html="t('title')"
            class="font-['Onest'] text-mobile-headline-1 font-semibold text-[#fff] md:text-headline-1"
          />
          <p
            v-html="t('description')"
            class="text-left font-['Onest'] text-mobile-body-16 font-normal text-[#fff] md:text-body-20"
          />
        </div>
        <ui-button class="min-w-full text-green-500 md:min-w-[223px]" color="white" @click="show">
          {{ t("button") }}
        </ui-button>
      </div>
      <div
        class="absolute bottom-0 left-0 right-0 h-[416px] bg-[url('/img/ill-mob.png')] bg-cover bg-no-repeat md:left-auto md:h-full md:w-[50%] md:bg-[url('/img/ill-des.png')]"
      ></div>
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
    "button": "Присоедениться"
  },
  "uz": {
    "title": "Ruhiy salomatlik platformasiga qo'shiling",
    "description": "Kuchli professional hamjamiyatda ishlang, <br /> o'zingizni rivojlantiring va yangi mijozlar toping",
    "button": "Qo'shilish"
  }
}
</i18n>
