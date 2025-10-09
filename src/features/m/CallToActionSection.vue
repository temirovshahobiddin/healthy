<template>
  <app-section-fluid class="!bg-[#63845c] py-10 md:py-20">
    <div class="mx-auto max-w-[588px]">
      <div class="flex flex-col flex-nowrap items-center gap-[10px] text-left md:gap-[15px] md:text-center">
        <h2 class="font-['Onest'] text-mobile-headline-1 font-semibold text-[#fff] md:text-headline-2">
          {{ t("cta.title") }}
        </h2>
        <p class="font-['Onest'] text-mobile-body-16 font-normal text-[#fff] md:text-body-20">
          {{ t("cta.description") }}
        </p>
        <ui-button @click="show" class="mt-[25px] w-full text-green-500 md:mt-[9px] md:w-fit" color="white">
          {{ t("cta.button") }}
        </ui-button>
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

<i18n lang="json">
{
  "en": {
    "cta": {
      "title": "Join our team",
      "description": "Submit an application - we'll explain everything and connect you to the platform",
      "button": "Join the team"
    }
  },
  "ru": {
    "cta": {
      "title": "Станьте частью нашей команды",
      "description": "Оставьте заявку – мы всё расскажем и подключим вас к платформе",
      "button": "Вступить в команду"
    }
  },
  "uz": {
    "cta": {
      "title": "Jamoamizning bir qismi bo'ling",
      "description": "Ariza qoldiring - biz hamma narsani tushuntiramiz va sizni platformaga ulaymiz",
      "button": "Jamoaga qo'shilish"
    }
  }
}
</i18n>
