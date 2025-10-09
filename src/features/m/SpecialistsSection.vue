<template>
  <app-section class="my-[80px] md:my-[120px]">
    <h2
      class="w-[202px] text-left font-['Onest'] text-mobile-headline-1 font-semibold text-[#323232] md:w-auto md:text-headline-2"
    >
      {{ t("specialists.title") }}
    </h2>
    <div class="mt-[20px] grid grid-cols-1 gap-[10px] md:mt-[40px] md:grid-cols-3 md:gap-[20px]">
      <specialist-card
        v-for="specialist in specialists"
        :key="specialist.id"
        :title="t(`specialists.items.${specialist.id}`)"
      />
    </div>
  </app-section>
</template>

<script lang="ts" setup>
import SpecialistCard from "./SpecialistCard.vue"
import AppSection from "~/widgets/layout/app-section.vue"

const { t } = useI18n({ useScope: "local" })

const specialists = [
  {
    id: 1,
    title: "Психотерапевты",
    iconUrl: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-09/raF04xW0pp.png"
  },
  {
    id: 2,
    title: "Клинические психологи",
    iconUrl: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-09/wHFG60Zu4G.png"
  },
  {
    id: 3,
    title: "Психиатры",
    iconUrl: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-09/3kNz2AQc3A.png"
  },
  {
    id: 4,
    title: "Детские психологи",
    iconUrl: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-09/USGMLDyQuG.png"
  },
  {
    id: 5,
    title: "Наркологи",
    iconUrl: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-09/1FrEoDGk7p.png"
  },
  {
    id: 6,
    title: "Психологи-консультанты",
    iconUrl: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-09/M1U2RY6wzz.png"
  }
]
</script>

<i18n>
{
  "en": {
    "specialists": {
      "title": "Who We Invite",
      "items": {
        "1": "Psychotherapists",
        "2": "Clinical Psychologists",
        "3": "Psychiatrists",
        "4": "Child Psychologists",
        "5": "Addiction Specialists",
        "6": "Counseling Psychologists"
      }
    }
  },
  "ru": {
    "specialists": {
      "title": "Кого мы приглашаем",
      "items": {
        "1": "Психотерапевты",
        "2": "Клинические психологи",
        "3": "Психиатры",
        "4": "Детские психологи",
        "5": "Наркологи",
        "6": "Психологи-консультанты"
      }
    }
  },
  "uz": {
    "specialists": {
      "title": "Kimlarni taklif qilamiz",
      "items": {
        "1": "Psixoterapevtlar",
        "2": "Klinik psixologlar",
        "3": "Psixiatrlar",
        "4": "Bolalar psixologlari",
        "5": "Narkologlar",
        "6": "Maslahatchi psixologlar"
      }
    }
  }
}
</i18n>
