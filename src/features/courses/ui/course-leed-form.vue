<script setup lang="ts">
import AppSectionFluid from "~/widgets/layout/app-section-fluid.vue"
import { useCommonApi } from "~/api/common"
import { useSiteSettingsStore } from "~/entities/site-settings/site-settings.store"

const { t } = useI18n({ useScope: "local" })
const commonApi = useCommonApi()
const siteSettingsStore = useSiteSettingsStore()
const { siteSettings } = storeToRefs(siteSettingsStore)

const { required } = useRule()
const modal = useModal()

const form = ref({
  full_name: "",
  phone_number: "",
  meet_date: "",
  comment: "",
  agreed: true
})

interface IProps {
  course: any
}

const props = defineProps<IProps>()

const rules = ref({
  full_name: { required },
  phone_number: { required },
  meet_date: { required },
  comment: { required }
})

const { hasError, vuelidate } = useValidate(form, rules)
const loading = ref(false)
const submit = async () => {
  const isValid = await vuelidate.value.$validate()
  if (isValid) {
    const orderData = {
      ...form.value,
      service_id: props.course?.id,
      specialist_id: props.course?.specialist?.id
    }
    commonApi.createOrder(orderData).finally(() => {
      loading.value = false
      form.value = {
        full_name: "",
        phone_number: "",
        meet_date: "",
        comment: "",
        agreed: true
      }
      modal.show("success-modal")
      vuelidate.value.$reset()
    })
  }
}
</script>

<template>
  <app-section-fluid
    class="bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-20/ornGaxc2yP.png)] bg-[length:100%_100%] bg-no-repeat py-[40px] md:py-[120px]">
    <div class="flex flex-col gap-[40px] overflow-hidden md:flex-row md:items-center md:justify-between">
      <div class="flex flex-col flex-nowrap items-start gap-[30px] md:w-[50.63%]">
        <div class="relative flex shrink-0 flex-col flex-nowrap items-start gap-[10px] self-stretch md:gap-[15px]">
          <span
            class="text-left font-['Onest'] whitespace-nowrap mb-[20px] text-mobile-headline-1 font-semibold text-[#fff] md:text-headline-2">
            Присоединяйтесь к обучению
          </span>
          <span class="text-left font-['Onest'] text-mobile-body-16 font-normal text-[#fff] md:text-body-18">
            Освойте новые навыки, получайте поддержку от экспертов и применяйте знания на практике
          </span>
        </div>
        <div
          class="relative mt-0 flex shrink-0 flex-nowrap items-center gap-[8px] self-stretch border-b border-solid border-t-[#ffffff20] pb-5 md:border-b-0 md:border-t md:pb-0 md:pt-[30px]">
          <icon class="text-[18px] !text-white" name="h-icon:phone"></icon>
          <div class="relative w-[184px] shrink-0 whitespace-nowrap text-left font-['Onest'] font-semibold">
            <a class="font-['Onest'] text-mobile-subtitle-18 font-semibold text-[#fff] md:text-subtitle-22"
              :href="`tel:${siteSettings?.phone?.trim()}`">
              {{ siteSettings?.phone }}
            </a>
          </div>
        </div>
      </div>
      <div class="flex w-full flex-col flex-nowrap items-start gap-[40px] md:w-[345px]">
        <div class="relative flex shrink-0 flex-col flex-nowrap items-start gap-[10px] self-stretch">
          <ui-form-group v-bind="hasError('full_name')" v-slot="{ id }" class="w-full">
            <ui-input v-model="form.full_name"
              class="ui-input-outline !h-auto !border-0 !border-b-2 py-[10px] !text-white !placeholder-white md:py-[15px]"
              :id :placeholder="t('form-inputs.fio')"></ui-input>
          </ui-form-group>
          <ui-form-group v-bind="hasError('phone_number')" v-slot="{ id }" class="w-full">
            <ui-mask-input v-model="form.phone_number"
              class="ui-input-outline !h-auto !border-0 !border-b-2 py-[10px] !text-white !placeholder-white md:py-[15px]"
              mask="+### (##) ###-##-##" unmasked :id :placeholder="t('form-inputs.phone')"></ui-mask-input>
          </ui-form-group>
          <ui-form-group v-bind="hasError('meet_date')" v-slot="{ id }" class="relative w-full">
            <ui-input v-model="form.meet_date"
              class="ui-input-outline !h-auto !border-0 !border-b-2 py-[10px] !pr-10 !text-white !placeholder-white md:py-[15px]"
              type="date" :id :placeholder="t('form-inputs.date')"></ui-input>
            <div class="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 transform">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2 12C2 8.229 2 6.343 3.172 5.172C4.344 4.001 6.229 4 10 4H14C17.771 4 19.657 4 20.828 5.172C21.999 6.344 22 8.229 22 12V14C22 17.771 22 19.657 20.828 20.828C19.656 21.999 17.771 22 14 22H10C6.229 22 4.343 22 3.172 20.828C2.001 19.656 2 17.771 2 14V12Z"
                  stroke="#FFFFFF" stroke-width="1.5" />
                <path d="M7 4V2.5M17 4V2.5M2.5 9H21.5" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" />
                <path
                  d="M18 17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18C16.7348 18 16.4804 17.8946 16.2929 17.7071C16.1054 17.5196 16 17.2652 16 17C16 16.7348 16.1054 16.4804 16.2929 16.2929C16.4804 16.1054 16.7348 16 17 16C17.2652 16 17.5196 16.1054 17.7071 16.2929C17.8946 16.4804 18 16.7348 18 17ZM18 13C18 13.2652 17.8946 13.5196 17.7071 13.7071C17.5196 13.8946 17.2652 14 17 14C16.7348 14 16.4804 13.8946 16.2929 13.7071C16.1054 13.5196 16 13.2652 16 13C16 12.7348 16.1054 12.4804 16.2929 12.2929C16.4804 12.1054 16.7348 12 17 12C17.2652 12 17.5196 12.1054 17.7071 12.2929C17.8946 12.4804 18 12.7348 18 13ZM13 17C13 17.2652 12.8946 17.5196 12.7071 17.7071C12.5196 17.8946 12.2652 18 12 18C11.7348 18 11.4804 17.8946 11.2929 17.7071C11.1054 17.5196 11 17.2652 11 17C11 16.7348 11.1054 16.4804 11.2929 16.2929C11.4804 16.1054 11.7348 16 12 16C12.2652 16 12.5196 16.1054 12.7071 16.2929C12.8946 16.4804 13 16.7348 13 17ZM13 13C13 13.2652 12.8946 13.5196 12.7071 13.7071C12.5196 13.8946 12.2652 14 12 14C11.7348 14 11.4804 13.8946 11.2929 13.7071C11.1054 13.5196 11 13.2652 11 13C11 12.7348 11.1054 12.4804 11.2929 12.2929C11.4804 12.1054 11.7348 12 12 12C12.2652 12 12.5196 12.1054 12.7071 12.2929C12.8946 12.4804 13 12.7348 13 13ZM8 17C8 17.2652 7.89464 17.5196 7.70711 17.7071C7.51957 17.8946 7.26522 18 7 18C6.73478 18 6.48043 17.8946 6.29289 17.7071C6.10536 17.5196 6 17.2652 6 17C6 16.7348 6.10536 16.4804 6.29289 16.2929C6.48043 16.1054 6.73478 16 7 16C7.26522 16 7.51957 16.1054 7.70711 16.2929C7.89464 16.4804 8 16.7348 8 17ZM8 13C8 13.2652 7.89464 13.5196 7.70711 13.7071C7.51957 13.8946 7.26522 14 7 14C6.73478 14 6.48043 13.8946 6.29289 13.7071C6.10536 13.5196 6 13.2652 6 13C6 12.7348 6.10536 12.4804 6.29289 12.2929C6.48043 12.1054 6.73478 12 7 12C7.26522 12 7.51957 12.1054 7.70711 12.2929C7.89464 12.4804 8 12.7348 8 13Z"
                  fill="#FFFFFF" />
              </svg>
            </div>
          </ui-form-group>
          <ui-form-group v-bind="hasError('comment')" v-slot="{ id }" class="w-full">
            <ui-input v-model="form.comment"
              class="ui-input-outline !h-auto !border-0 !border-b-2 py-[10px] !text-white !placeholder-white md:py-[15px]"
              :id :placeholder="t('form-inputs.reason')"></ui-input>
          </ui-form-group>
        </div>
        <div class="flex w-full flex-col gap-5">
          <ui-button class="!w-full !bg-white !text-green-500 md:w-auto" type="button" :label="t('Записаться')"
            @click="submit" />
        </div>
      </div>
    </div>
  </app-section-fluid>
</template>

<style scoped>
/* Date input styling */
input[type="date"] {
  position: relative;
  color-scheme: dark;
}

/* Hide default date picker icon */
input[type="date"]::-webkit-calendar-picker-indicator {
  opacity: 0;
  position: absolute;
  right: 0;
  width: 20px;
  height: 20px;
  cursor: pointer;
}

input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-clear-button {
  display: none;
}

/* Firefox */
input[type="date"] {
  appearance: textfield;
  -moz-appearance: textfield;
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
      "date": "Дата визита",
      "reason": "Что вы хотите изменить?",
      "privacy_agreement": "Я согласен с ",
      "privacy_policy": "политикой конфиденциальности"
    },
    "Записаться": "Записаться"
  },
  "en": {
    "form-inputs": {
      "fio": "Full Name",
      "phone": "Phone Number",
      "date": "Visit Date",
      "reason": "What do you want to change?",
      "privacy_agreement": "I agree with the ",
      "privacy_policy": "privacy policy"
    },
    "Записаться": "Sign Up"
  },
  "uz": {
    "title": "Ruhiy salomatlikka qadam qo'ying",
    "description": "Konsultatsiyaga yoziling va muammolaringizni hal qilishga yordam beramiz",
    "form-inputs": {
      "fio": "F.I.O",
      "phone": "Telefon raqami",
      "date": "Tashrif sanasi",
      "reason": "Nima o'zgartirmoqchisiz?",
      "privacy_agreement": "Men ",
      "privacy_policy": "maxfiylik siyosati bilan roziman"
    },
    "Записаться": "Ro'yxatdan o'tish"
  }
}
</i18n>
