<script setup lang="ts">
import { useCommonApi } from "~/api/common"

const form = ref({
  fullName: "",
  email: "",
  phone: "",
  portfolio: null as File | null,
  experience: null as number | null,
  specialization: "",
  description: "",
  cv: null as File | null
})
const { required, email } = useRule()
const rules = ref({
  fullName: { required },
  email: { required, email },
  phone: { required },
  experience: { required },
  specialization: { required },
  description: { required },
  cv: { required }
})

const { hasError, vuelidate, model } = useValidate(form, rules)
const { files, open, reset, onCancel, onChange } = useFileDialog({
  directory: false,
  multiple: false
})
const { t } = useI18n({ useScope: "local" })
const { $toast } = useNuxtApp()
const fileName = ref("")

onChange((files) => {
  if (files?.length) {
    const filesize = (files[0].size / 1024 / 1024).toFixed(4) // MB
    if (filesize > 2) {
      $toast.error(t("messages.info.file_size_limit"))
      return
    }
    fileName.value = files[0].name
    form.value.cv = files[0]
  } else {
    model.value = undefined
    fileName.value = ""
  }
})

onCancel(() => {
  form.value.cv = null
  fileName.value = ""
  reset()
})

const commonApi = useCommonApi()

const submit = async () => {
  const isValid = await vuelidate.value.$validate()
  if (isValid) {
    const formData = new FormData()
    formData.append("full_name", form.value.fullName)
    formData.append("email", form.value.email)
    formData.append("phone_number", form.value.phone)
    formData.append("experience_year", form.value.experience.toString())
    formData.append("specialization", form.value.specialization)
    formData.append("comment", form.value.description)
    formData.append("cv", form.value.cv)

    try {
      await commonApi.joinTeam(formData)
      $toast.success(t("messages.success.application_submitted"))
      form.value = {
        fullName: "",
        email: "",
        phone: "",
        portfolio: null,
        experience: null,
        specialization: "",
        description: "",
        cv: null
      }
      fileName.value = ""
      vuelidate.value.$reset()
      const modal = useModal()
      modal.hide("join-to-modal")
    } catch (error) {
      $toast.error(t("messages.error.something_went_wrong"))
    }
  }
}
</script>

<template>
  <ui-modal id="join-to-modal" size="xs" :label="t('title')">
    <div class="flex flex-col gap-4 md:p-[25px]">
      <ui-form-group v-bind="hasError('fullName')">
        <ui-input
          v-model="form.fullName"
          class="ui-input-outline !h-auto !border-0 !border-b py-[10px] !placeholder-[#848484] md:py-[15px]"
          :placeholder="t('fields.fullName')"
        />
      </ui-form-group>
      <ui-form-group v-bind="hasError('email')">
        <ui-input
          v-model="form.email"
          class="ui-input-outline !h-auto !border-0 !border-b py-[10px] !placeholder-[#848484] md:py-[15px]"
          type="email"
          :placeholder="t('fields.email')"
        />
      </ui-form-group>
      <ui-form-group v-bind="hasError('phone')">
        <ui-mask-input
          v-model="form.phone"
          class="ui-input-outline !h-auto !border-0 !border-b py-[10px] !placeholder-[#848484] md:py-[15px]"
          unmasked
          mask="+998 (##) ###-##-##"
          :placeholder="t('fields.phone')"
        />
      </ui-form-group>
      <ui-form-group v-bind="hasError('experience')">
        <ui-input
          v-model="form.experience"
          class="ui-input-outline !h-auto !border-0 !border-b py-[10px] !placeholder-[#848484] md:py-[15px]"
          type="number"
          :placeholder="t('fields.experience')"
        />
      </ui-form-group>
      <ui-form-group v-bind="hasError('specialization')">
        <ui-input
          v-model="form.specialization"
          class="ui-input-outline !h-auto !border-0 !border-b py-[10px] !placeholder-[#848484] md:py-[15px]"
          :placeholder="t('fields.specialization')"
        />
      </ui-form-group>
      <ui-form-group v-bind="hasError('description')">
        <ui-input
          v-model="form.description"
          class="ui-input-outline !h-auto !border-0 !border-b py-[10px] !placeholder-[#848484] md:py-[15px]"
          :placeholder="t('fields.description')"
        />
      </ui-form-group>
      <ui-form-group v-bind="hasError('cv')">
        <div
          class="flex cursor-pointer items-center gap-2 rounded-[10px] bg-[#F0F4F1] p-[10px] text-green-500 md:px-[15px] md:py-3"
          @click="open"
        >
          <icon class="h-5 w-5 md:h-[22px] md:w-[22px]" name="h-icon:plus"></icon>
          <span class="text-mobile-body-16 md:text-body-18">
            {{ fileName ? fileName : t("fields.portfolio") }}
          </span>
        </div>
      </ui-form-group>

      <ui-button class="mt-4 w-full" @click="submit">
        {{ t("submit") }}
      </ui-button>
    </div>
  </ui-modal>
</template>

<style scoped></style>

<i18n>
{
  "en": {
    "title": "Join the team",
    "fields": {
      "fullName": "Full Name",
      "email": "Email",
      "phone": "Phone",
      "portfolio": "Resume",
      "experience": "Experience (years)",
      "specialization": "Specialization",
      "description": "Cover letter"
    },
    "submit": "Submit"
  },
  "ru": {
    "title": "Вступить в команду",
    "fields": {
      "fullName": "ФИО",
      "email": "Email",
      "phone": "Номер телефона",
      "portfolio": "Файл резюме",
      "experience": "Опыт",
      "specialization": "Специальность",
      "description": "Сопроводительный текст"
    },
    "submit": "Отправить"
  },
  "uz": {
    "title": "Jamoaga qo'shiling",
    "fields": {
      "fullName": "To'liq ism",
      "email": "Email",
      "phone": "Telefon",
      "portfolio": "Rezyume",
      "experience": "Tajriba",
      "specialization": "Mutaxassislik",
      "description": Ilova
      qilingan
      matn
    },
    "submit": "Yuborish"
  }
}
</i18n>
