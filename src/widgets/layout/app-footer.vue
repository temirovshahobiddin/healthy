<script setup lang="ts">
import Logo from "~/shared/assets/Logo.svg"
import AppSectionFluid from "~/widgets/layout/app-section-fluid.vue"
import { useSiteSettingsStore } from "~/entities/site-settings/site-settings.store"

const siteSettingsStore = useSiteSettingsStore()
const siteSettings = computed(() => siteSettingsStore.siteSettings)
</script>

<template>
  <app-section-fluid class="!bg-[#6f8f6e] py-[10px]">
    <div class="flex items-center justify-between">
      <nuxt-link-locale to="/">
        <logo class="h-[70px] w-[70px] text-white md:h-[80px] md:w-[80px]" alt="Logo" />
      </nuxt-link-locale>
      <div class="relative flex items-center gap-[20px] md:w-[160px]">
        <a class="h-[30px] w-[30px] shrink-0 cursor-pointer overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-20/yPJLFS0Mrn.png)] bg-cover bg-no-repeat md:h-[40px] md:w-[40px]"
          target="_blank" :href="siteSettings?.telegram"></a>
        <a class="h-[30px] w-[30px] shrink-0 cursor-pointer overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-20/M0xHPN9iJa.png)] bg-cover bg-no-repeat md:h-[40px] md:w-[40px]"
          target="_blank" :href="siteSettings?.facebook"></a>
        <a class="h-[30px] w-[30px] shrink-0 cursor-pointer bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-20/ij44xJ0f0Q.png)] bg-cover bg-no-repeat md:h-[40px] md:w-[40px]"
          target="_blank" :href="siteSettings?.instagram"></a>
      </div>
    </div>
  </app-section-fluid>

  <app-section-fluid class="border-t border-t-[#ffffff20] !bg-[#6f8f6e]">
    <div
      class="mx-auto grid grid-cols-4 items-center justify-between gap-[60px] py-[30px] md:py-[60px] max-[1100px]:grid-cols-3 max-[768px]:grid-cols-1 max-[768px]:gap-[30px]">
      <div class=" flex flex-col flex-nowrap items-start gap-[20px] md:gap-[30px]">
        <div class="relative flex shrink-0 flex-col flex-nowrap items-start justify-center gap-[5px] self-stretch">
          <span class="text-mobile-body-14 font-normal text-[#fff] opacity-80 md:text-body-17">Телефон</span>
          <span class="text-mobile-subtitle-18 font-semibold text-[#fff] md:text-subtitle-22">
            {{ siteSettings?.phone }}
          </span>
        </div>
        <div class="relative flex shrink-0 flex-col flex-nowrap items-start justify-center gap-[5px] self-stretch">
          <span class="text-mobile-body-14 font-normal text-[#fff] opacity-80 md:text-body-17">Адрес</span>
          <a class="text-mobile-subtitle-18 font-semibold text-[#fff] md:text-subtitle-22" target="_blank"
            :href="siteSettings?.address_url">
            {{ siteSettings?.address }}
          </a>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-[100px] max-[1100px]:col-span-2 max-[768px]:col-span-1">
        <div class="flex flex-col flex-nowrap items-start gap-[10px] md:gap-[15px]">
          <span
            class="relative font-['Onest'] text-mobile-body-16 font-normal text-[#fff] md:text-[20px] md:font-medium">
            <nuxt-link-locale to="/specialisty">
              Специалисты
            </nuxt-link-locale>
          </span>
          <span
            class="relative font-['Onest'] text-mobile-body-16 font-normal text-[#fff] md:text-[20px] md:font-medium">
            <nuxt-link-locale to="/courses">
              Курсы
            </nuxt-link-locale>
          </span>
          <span
            class="relative font-['Onest'] text-mobile-body-16 font-normal text-[#fff] md:text-[20px] md:font-medium">
            <nuxt-link-locale to="/about">
              О проекте
            </nuxt-link-locale>
          </span>
        </div>

        <div class="flex flex-col flex-nowrap items-start gap-[10px] md:gap-[15px]">
          <span
            class="relative font-['Onest'] text-mobile-body-16 font-normal text-[#fff] md:text-[20px] md:font-medium">
            <nuxt-link-locale to="/blog">
              Блог
            </nuxt-link-locale>
          </span>
          <span
            class="relative font-['Onest'] text-mobile-body-16 font-normal text-[#fff] md:text-[20px] md:font-medium">
            <nuxt-link-locale to="/contacts">
              Контакты
            </nuxt-link-locale>
          </span>
          <span
            class="relative font-['Onest'] text-mobile-body-16 font-normal text-[#fff] md:text-[20px] md:font-medium">
            <nuxt-link-locale to="/about">
              Специалистам
            </nuxt-link-locale>
          </span>
        </div>
      </div>

      <div
        class="flex flex-col ml-[60px] flex-nowrap items-start gap-[10px] md:gap-[15px] max-w-[224px] max-[1100px]:max-w-[unset]">
        <span
          class="relative font-['Onest'] text-mobile-body-16 font-normal text-[#fff] md:text-[20px] leading-[1.2] md:font-medium">
          Политика конфиденциальности
        </span>
        <span
          class="relative font-['Onest'] text-mobile-body-16 font-normal text-[#fff] md:text-[20px] leading-[1.2] md:font-medium">
          Пользовательское соглашение
        </span>
      </div>
    </div>
  </app-section-fluid>
  <app-section-fluid class="border-t border-t-[#ffffff20] !bg-[#6f8f6e] py-[20px] md:py-[30px]">
    <span class="text-mobile-body-14 font-medium text-[#fff] md:text-body-18">© 2025 «Душевное Здоровье»</span>
  </app-section-fluid>
</template>
