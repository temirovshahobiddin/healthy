<template>
  <app-section class="mt-[80px] md:mt-[120px]">
    <div class="flex flex-col flex-nowrap items-start gap-[10px]">
      <h2 class="section-title">{{ t("benefits.title") }}</h2>
      <p
        class="w-[328px] text-left font-['Onest'] text-mobile-body-15 font-normal text-[#585958] md:w-[710px] md:text-body-20"
      >
        {{ t("benefits.description") }}
      </p>
    </div>
    <div class="mt-[30px] grid grid-cols-1 gap-[10px] md:mt-[40px] md:grid-cols-3 md:gap-[20px]">
      <benefit-card
        icon-name="h-icon:clock"
        :title="t('benefits.items.flexible.title')"
        :description="t('benefits.items.flexible.description')"
      />
      <benefit-card
        icon-name="h-icon:heart-outline"
        :title="t('benefits.items.support.title')"
        :description="t('benefits.items.support.description')"
      />
      <benefit-card
        icon-name="h-icon:medal"
        :title="t('benefits.items.promotion.title')"
        :description="t('benefits.items.promotion.description')"
      />
      <benefit-card
        icon-name="h-icon:book"
        :title="t('benefits.items.education.title')"
        :description="t('benefits.items.education.description')"
      />
      <benefit-card
        icon-name="h-icon:star-outline"
        :title="t('benefits.items.ethics.title')"
        :description="t('benefits.items.ethics.description')"
      />
      <div class="relative h-auto min-h-[209px] rounded-[15px] bg-[#6f8f6e] p-[15px] md:px-[25px] md:py-[30px]">
        <p
          class="w-[178px] text-left font-['Onest'] text-mobile-subtitle-20 font-semibold text-[#fff] md:w-[220px] md:text-headline-4"
        >
          {{ t("benefits.confidence") }}
        </p>
        <div
          class="absolute bottom-0 left-0 right-0 top-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-09/V4vzSFZxdB.png)] bg-cover bg-no-repeat"
        ></div>
      </div>
    </div>
  </app-section>
</template>

<script lang="ts" setup>
import BenefitCard from "./BenefitCard.vue"
import AppSection from "~/widgets/layout/app-section.vue"

const { t } = useI18n({ useScope: "local" })
</script>

<i18n lang="json">
{
  "en": {
    "benefits": {
      "title": "What you'll get",
      "description": "We create a professional and supportive environment where you can grow, develop, and help others with confidence",
      "items": {
        "flexible": {
          "title": "Flexible schedule",
          "description": "Consult at a time convenient for you, online or offline"
        },
        "support": {
          "title": "Admin support",
          "description": "We handle registration, communications, and organization"
        },
        "promotion": {
          "title": "Promotion",
          "description": "We invest in advertising and enhance your expertise"
        },
        "education": {
          "title": "Education",
          "description": "Access to proprietary courses and growth opportunities"
        },
        "ethics": {
          "title": "Ethical environment",
          "description": "Professional community curated by Sanjar Akbarovich"
        }
      },
      "confidence": "Everything to make you feel confident"
    }
  },
  "ru": {
    "benefits": {
      "title": "Вы получите",
      "description": "Мы создаём профессиональную и поддерживающую среду, где вы можете расти, развиваться и помогать другим с уверенностью",
      "items": {
        "flexible": {
          "title": "Гибкий график",
          "description": "Консультируйте в удобное для себя время, онлайн или офлайн"
        },
        "support": {
          "title": "Админ-поддержка",
          "description": "Мы берём на себя запись, коммуникации и организацию"
        },
        "promotion": {
          "title": "Продвижение",
          "description": "Мы инвестируем в рекламу и усиливаем вашу экспертизу"
        },
        "education": {
          "title": "Обучение",
          "description": "Доступ к авторским курсам и возможностям роста"
        },
        "ethics": {
          "title": "Этичная среда",
          "description": "Профессиональное сообщество под кураторством Санджара Акбаровича"
        }
      },
      "confidence": "Всё, чтобы вы чувствовали себя уверенно"
    }
  },
  "uz": {
    "benefits": {
      "title": "Siz olasiz",
      "description": "Biz professional va qo'llab-quvvatlovchi muhit yaratamiz, bu yerda siz o'sishingiz, rivojlanishingiz va boshqalarga ishonch bilan yordam berishingiz mumkin",
      "items": {
        "flexible": {
          "title": "Moslashuvchan jadval",
          "description": "O'zingizga qulay vaqtda, onlayn yoki oflayn maslahat bering"
        },
        "support": {
          "title": "Admin-yordam",
          "description": "Ro'yxatga olish, aloqa va tashkiliy ishlarni o'z zimmamizga olamiz"
        },
        "promotion": {
          "title": "Tanitish",
          "description": "Biz reklamaga sarmoya kiritamiz va sizning tajribangizni kuchaytiramiz"
        },
        "education": {
          "title": "Ta'lim",
          "description": "Mualliflik kurslariga va o'sish imkoniyatlariga kirish"
        },
        "ethics": {
          "title": "Axloqiy muhit",
          "description": "Sanjar Akbarovich rahbarligidagi professional hamjamiyat"
        }
      },
      "confidence": "O'zingizni ishonchli his qilishingiz uchun barcha narsalar"
    }
  }
}
</i18n>
