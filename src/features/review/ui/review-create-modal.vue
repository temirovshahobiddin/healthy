<script setup lang="ts">
import { ref } from "vue"
const { t } = useI18n({
  useScope: "local"
})

const review = ref({})

const onBeforeShow = (e: any) => {
  console.log("Review Modal Data:", e)
  review.value = e
}

const form = ref({
  rating: 0,
  comment: "",
  reviewer_name: "",
  phone: "",
  specialist_id: null
})
const submit = () => {
  console.log(form.value)
}

const setRating = (value: number) => {
  form.value.rating = value
}

</script>

<template>
  <ui-modal id="review-create-modal" class="review-create-modal" label="Ваша оценка" @before-show="onBeforeShow">
    <div class="px-[15px] pb-[20px] md:px-[20px]">
      <div class="mb-3 flex items-center gap-2">
        <span v-for="star in 5" :key="star" class="cursor-pointer text-3xl transition-colors"
          :class="form.rating >= star ? 'text-green-500' : 'text-gray-300'" @click="setRating(star)">
          ★
        </span>
      </div>

      <div class="relative flex shrink-0 flex-col flex-nowrap items-start gap-[10px] self-stretch">
        <ui-form-group class="w-full">
          <ui-input class="ui-input-outline !h-auto !border-0 !border-b-2 py-[10px] text-[#848484] md:py-[15px]"
            v-model="form.reviewer_name" :placeholder="t('form-inputs.fio')" />
        </ui-form-group>
        <ui-form-group class="w-full">
          <ui-input class="ui-input-outline !h-auto !border-0 !border-b-2 py-[10px] text-[#848484] md:py-[15px]"
            v-model="form.phone" :placeholder="t('form-inputs.phone')" />
        </ui-form-group>
        <ui-form-group class="w-full">
          <ui-input class="ui-input-outline !h-auto !border-0 !border-b-2 py-[10px] text-[#848484] md:py-[15px]"
            v-model="form.comment" :placeholder="t('form-inputs.reason')" />
        </ui-form-group>
        <ui-button class="w-full !bg-green-500 mt-[10px]" @click="submit">Отправить отзыв</ui-button>
      </div>
    </div>
  </ui-modal>
</template>

<style>
.review-modal {
  .ui-modal-header-title {
    @apply text-mobile-subtitle-18 font-semibold text-[#323232] md:text-subtitle-22;
  }

  .ui-modal-header-description {
    @apply font-['Onest'] text-mobile-body-15 font-normal text-[#848484] md:text-body-16;
  }
}
</style>
<i18n>
{
  "ru": {
    "title": "Cделайте шаг к душевному здоровью",
    "description": "Запишитесь на консультацию и мы поможем решить ваши проблемы",
    "form-inputs": {
      "fio": "ФИО",
      "phone": "Номер телефона",
      "reason": "Что вы хотите изменить?"
    },
    "Записаться": "Записаться"
  },
  "en": {
    "form-inputs": {
      "fio": "Full Name",
      "phone": "Phone Number",
      "reason": "What do you want to change?"
    },
    "Записаться": "Sign Up"
  },
  "uz": {
    "title": "Ruhiy salomatlikka qadam qo'ying",
    "description": "Konsultatsiyaga yoziling va muammolaringizni hal qilishga yordam beramiz",
    "form-inputs": {
      "fio": "F.I.O",
      "phone": "Telefon raqami",
      "reason": "Nima o'zgartirmoqchisiz?"
    },
    "Записаться": "Ro'yxatdan o'tish"
  }
}
</i18n>
