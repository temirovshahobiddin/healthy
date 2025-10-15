<script setup lang="ts">
import { ProfileMenu } from "~/features/profile"
import { AppLanguage, AppThemeSwitcher } from "~/features/layout"
import Logo from "~/shared/assets/Logo.svg"
import AppMenu from "~/widgets/layout/app-menu.vue"
import { useSiteSettingsStore } from "~/entities/site-settings/site-settings.store"

const { orderModalOpen } = useModal()

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}
const { t } = useI18n({
  useScope: "local"
})
const siteSettingsStore = useSiteSettingsStore()
const { siteSettings } = storeToRefs(siteSettingsStore)
const localePath = useLocalePath()

const showMenu = ref(false)

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>

<template>
  <header :class="['app-header', { 'app-header--scrolled': isScrolled }]">
    <div class="app-header-container">
      <nuxt-link-locale to="/">
        <logo class="h-[60px] w-[65px] md:h-[80px] md:w-[80px]" alt="Logo" :class="{
          'text-white': !isScrolled,
          'text-green-500': isScrolled
        }" />
      </nuxt-link-locale>

      <div class="flex items-center gap-[60px] max-[1240px]:hidden">
        <nuxt-link-locale class="text-body-18" to="/specialisty" :class="{
          'text-white': !isScrolled,
          'text-[#585958]': isScrolled
        }">
          {{ t("labels.specialists") }}
        </nuxt-link-locale>
        <nuxt-link-locale class="text-body-18" to="/courses" :class="{
          'text-white': !isScrolled,
          'text-[#585958]': isScrolled
        }">
          {{ t("labels.courses") }}
        </nuxt-link-locale>
        <nuxt-link-locale class="text-body-18" to="/about" :class="{
          'text-white': !isScrolled,
          'text-[#585958]': isScrolled
        }">
          {{ t("labels.about") }}
        </nuxt-link-locale>
        <nuxt-link-locale class="text-body-18" to="/contacts" :class="{
          'text-white': !isScrolled,
          'text-[#585958]': isScrolled
        }">
          {{ t("labels.contacts") }}
        </nuxt-link-locale>
        <nuxt-link-locale class="text-body-18" to="/blog" :class="{
          'text-white': !isScrolled,
          'text-[#585958]': isScrolled
        }">
          {{ t("labels.blog") }}
        </nuxt-link-locale>
      </div>

      <div class="app-header-right">
        <a class="flex items-center justify-center rounded-[15px] !border-0 min-[1240px]:h-[50px] min-[1240px]:w-[50px] min-[1240px]:!border"
          :href="`tel:${siteSettings?.phone}`" :class="{
            '!border-white text-white': !isScrolled,
            '!border-[#E8E8E8] text-green-500': isScrolled
          }">
          <icon class="text-[25px]" name="h-icon:phone" :class="{
            'text-white': !isScrolled,
            'text-green-500': isScrolled
          }"></icon>
        </a>
        <app-language :is-scrolled="isScrolled" />
        <!--        <ui-button-->
        <!--          class="rounded-[15px] !border-0 !p-0 md:h-[50px] md:w-[50px] md:!border"-->
        <!--          variant="outline"-->
        <!--          :class="{-->
        <!--            '!border-white': !isScrolled,-->
        <!--            '!border-[#E8E8E8] text-green-500': isScrolled-->
        <!--          }"-->
        <!--        >-->
        <!--          <icon-->
        <!--            class="text-[25px]"-->
        <!--            name="h-icon:language"-->
        <!--            :class="{-->
        <!--              'text-white': !isScrolled,-->
        <!--              'text-green-500': isScrolled-->
        <!--            }"-->
        <!--          ></icon>-->
        <!--        </ui-button>-->
        <ui-button class="!hidden rounded-[15px] border-0 border-white !p-0 max-[1240px]:!flex max-[1240px]:!border-0"
          variant="outline" @click="showMenu = !showMenu">
          <icon class="text-[25px]" name="h-icon:menu" :class="{
            'text-white': !isScrolled,
            'text-green-500': isScrolled
          }"></icon>
        </ui-button>

        <ui-button class="!block max-[1240px]:!hidden" :to="localePath('/for-psychologists')" :class="{
          '!bg-white/20 !text-white': !isScrolled,
          '!bg-[#63845C33] !text-green-500': isScrolled
        }">
          {{ t("labels.for_specialist") }}
        </ui-button>

        <ui-button class="!block max-[1240px]:!hidden" :class="{
          '!bg-white !text-green-500': !isScrolled,
          '!bg-green-500 !text-white': isScrolled
        }" @click="orderModalOpen = true">
          {{ t("actions.sign") }}
        </ui-button>
      </div>
    </div>
    <app-menu v-model:is-menu-open="showMenu" />

  </header>
</template>

<i18n>
{
  "ru": {
    "labels": {
      "for_specialist": "Для специалистов",
      "specialists": "Специалисты",
      "courses": "Курсы",
      "about": "О проекте",
      "contacts": "Контакты",
      "blog": "Блог"
    },
    "actions": {
      "sign": "Записаться"
    }
  },
  "en": {
    "labels": {
      "for_specialist": "For specialists",
      "specialists": "Specialists",
      "courses": "Courses",
      "about": "About",
      "contacts": "Contacts",
      "blog": "Blog"
    },
    "actions": {
      "sign": "Sign up"
    }
  },
  "uz": {
    "labels": {
      "for_specialist": "Mutaxassislar uchun",
      "specialists": "Mutaxassislar",
      "courses": "Kurslar",
      "about": "Loyiha haqida",
      "contacts": "Aloqa",
      "blog": "Blog"
    },
    "actions": {
      "sign": "Ro'yxatdan o'tish"
    }
  }
}
</i18n>
