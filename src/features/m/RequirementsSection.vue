<template>
  <app-section-fluid class="q bg-[#fff] py-10 md:py-[120px]">
    <h2 class="section-title">
      {{ t("requirements.title") }}
    </h2>
    <div class="mt-[20px] grid grid-cols-1 md:grid-cols-2">
      <requirement-item
        v-for="requirement in requirements"
        class="border-[#E0E5E3]"
        :class="{
          'border-b': requirement.id === 1 || requirement.id === 2 || requirement.id === 3,
          'md:border-r': requirement.id === 1 || requirement.id === 3,
          'md:border-b-0': requirement.id === 3,
        }"
        :key="requirement.id"
        :icon-name="requirement.iconName"
        :title="t(`requirements.items.${requirement.id}.title`)"
        :description="t(`requirements.items.${requirement.id}.description`)"
        :has-border="requirement.hasBorder"
      />
    </div>
  </app-section-fluid>
</template>

<script lang="ts" setup>
import RequirementItem from "./RequirementItem.vue"
import AppSectionFluid from "~/widgets/layout/app-section-fluid.vue"

const { t } = useI18n({ useScope: "local" })
const requirements = [
  {
    id: 1,
    iconName: "h-icon:medal",
    title: "Диплом о профильном образовании",
    description:
      "Подтверждает вашу квалификацию и профессиональную подготовку в области психологии, психотерапии или медицины",
    hasBorder: true
  },
  {
    id: 2,
    iconName: "h-icon:offline",
    title: "Практический стаж от 3 лет",
    description:
      "Мы ценим опыт, но открыты и для мотивированных специалистов с меньшим стажем — главное, чтобы была качественная база",
    hasBorder: true,
    isCustomIcon: true
  },
  {
    id: 3,
    iconName: "h-icon:heart",
    title: "Этика и ответственный подход",
    description:
      "Нам важно, чтобы специалист действовал в интересах клиента, соблюдал границы и профессиональные стандарты",
    hasBorder: true
  },
  {
    id: 4,
    iconName: "h-icon:star",
    title: "Желание помогать и развиваться",
    description: "Мы ищем тех, ктоискренне вовлечён в свою работу и готов расти вместе с командой и сообществом.",
    hasBorder: false
  }
]
</script>

<i18n>
{
  "en": {
    "requirements": {
      "title": "Requirements for Candidates",
      "items": {
        "1": {
          "title": "Professional Education Diploma",
          "description": "Confirms your qualifications and professional training in psychology, psychotherapy, or medicine"
        },
        "2": {
          "title": "At least 3 years of practical experience",
          "description": "We value experience, but are also open to motivated specialists with less experience — the most important thing is a quality foundation"
        },
        "3": {
          "title": "Ethics and responsible approach",
          "description": "It's important to us that specialists act in the client's interest, respect boundaries, and follow professional standards"
        },
        "4": {
          "title": "Desire to help and develop",
          "description": "We're looking for those who are sincerely involved in their work and ready to grow together with the team and community"
        }
      }
    }
  },
  "ru": {
    "requirements": {
      "title": "Требования к кандидатам",
      "items": {
        "1": {
          "title": "Диплом о профильном образовании",
          "description": "Подтверждает вашу квалификацию и профессиональную подготовку в области психологии, психотерапии или медицины"
        },
        "2": {
          "title": "Практический стаж от 3 лет",
          "description": "Мы ценим опыт, но открыты и для мотивированных специалистов с меньшим стажем — главное, чтобы была качественная база"
        },
        "3": {
          "title": "Этика и ответственный подход",
          "description": "Нам важно, чтобы специалист действовал в интересах клиента, соблюдал границы и профессиональные стандарты"
        },
        "4": {
          "title": "Желание помогать и развиваться",
          "description": "Мы ищем тех, ктоискренне вовлечён в свою работу и готов расти вместе с командой и сообществом"
        }
      }
    }
  },
  "uz": {
    "requirements": {
      "title": "Nomzodlarga qo'yiladigan talablar",
      "items": {
        "1": {
          "title": "Kasbiy ta'lim diplomi",
          "description": "Psixologiya, psixoterapiya yoki tibbiyot sohasidagi malakangiz va kasbiy tayyorgarligingizni tasdiqlovchi hujjat"
        },
        "2": {
          "title": "Kamida 3 yillik amaliy tajriba",
          "description": "Biz tajribani qadrlaymiz, ammo kichikroq tajribaga ega bo'lgan motivatsiyali mutaxassislarga ham ochiqmiz — eng muhimi sifatli poydevor bo'lishi"
        },
        "3": {
          "title": "Etika va mas'uliyatli yondashuv",
          "description": "Bizga mutaxassis mijoz manfaatlarini ko'zlab ish yuritishi, chegaralarni va kasbiy standartlarni saqlashi muhim"
        },
        "4": {
          "title": "Yordam berish va rivojlanish istagi",
          "description": "Biz o'z ishiga samimiy berilgan va jamoa hamda hamjamiyat bilan birga o'sishga tayyor insonlarni izlaymiz"
        }
      }
    }
  }
}
</i18n>
