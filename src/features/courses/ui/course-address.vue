<script setup lang="ts">
import AppSectionFluid from "~/widgets/layout/app-section-fluid.vue"
import { useSiteSettingsStore } from "~/entities/site-settings/site-settings.store"
import dayjs from 'dayjs'
import 'dayjs/locale/ru'

dayjs.locale('ru')

const { openCourseOrderModal } = useModal()

const siteSettingsStore = useSiteSettingsStore()
const { siteSettings } = storeToRefs(siteSettingsStore)

interface IProps {
  course: any
}

const props = defineProps<IProps>()

const formattedDateRange = computed(() => {
  if (!props.course?.start_date || !props.course?.end_date) {
    return ''
  }

  const startDate = dayjs(props.course.start_date)
  const endDate = dayjs(props.course.end_date)

  const startFormatted = startDate.format('D MMMM')
  const endFormatted = endDate.format('D MMMM YYYY')

  return `${startFormatted} – ${endFormatted}`
})

const formatTime = (time: string) => {
  if (!time) return ''
  const [hours, minutes] = time.split(':')
  return `${hours}:${minutes}`
}

const formatPhoneNumber = (phone: string | undefined) => {
  if (!phone) return ''
  const cleaned = phone.replace(/\D/g, '')
  if (cleaned.length === 12 && cleaned.startsWith('998')) {
    return `+${cleaned.slice(0, 3)} (${cleaned.slice(3, 5)}) ${cleaned.slice(5, 8)}-${cleaned.slice(8, 10)}-${cleaned.slice(10, 12)}`
  }
  return phone
}
</script>

<template>
  <app-section-fluid class="!bg-[#6f8f6e] pb-[40px] pt-[10px] md:py-[80px]">
    <div class="flex flex-col items-start gap-[18px] md:flex-row md:gap-x-[40px]">
      <div class="grid grid-cols-1 md:min-w-[832px] md:grid-cols-2">
        <div
          class="flex flex-row flex-nowrap items-start gap-[20px] border-b border-solid border-b-[rgba(255,255,255,0.2)] border-r-[rgba(255,255,255,0.2)] pb-[20px] pt-[20px] md:flex-col md:border-r md:pb-[30px] md:pt-0">
          <icon class="min-h-[30px] min-w-[30px] text-white md:h-[45px] md:w-[45px]" name="h-icon:calendar"></icon>
          <div class="flex flex-col flex-nowrap items-start gap-[5px] self-stretch md:gap-[8px]">
            <span class="font-['Onest'] text-mobile-body-15 font-medium text-[rgba(255,255,255,0.7)] md:text-body-17">
              Даты проведения
            </span>
            <span
              class="font-['Onest'] text-mobile-subtitle-16 font-bold text-[#fff] md:text-subtitle-24 md:font-semibold">
              {{ formattedDateRange }}
              <span v-if="course.schedule_description">({{ course.schedule_description }})</span>
            </span>
          </div>
        </div>
        <div
          class="flex flex-row flex-nowrap items-start gap-[20px] border-b border-solid border-b-[rgba(255,255,255,0.2)] pb-[20px] pt-[20px] md:flex-col md:pb-[30px] md:pl-[30px] md:pt-0">
          <icon class="min-h-[30px] min-w-[30px] text-white md:h-[45px] md:w-[45px]" name="h-icon:location"></icon>
          <div class="flex flex-col flex-nowrap items-start gap-[5px] self-stretch md:gap-[8px]">
            <span
              class="font-['Onest'] text-mobile-body-15 font-normal text-[rgba(255,255,255,0.7)] md:text-body-17 md:font-medium">
              Место проведения
            </span>
            <span
              class="font-['Onest'] text-mobile-subtitle-16 font-bold text-[#fff] md:text-subtitle-24 md:font-semibold">
              {{ course.location || siteSettings?.address }}
            </span>
          </div>
        </div>
        <div
          class="flex flex-row flex-nowrap items-start gap-[20px] border-b border-solid border-b-[rgba(255,255,255,0.2)] border-r-[rgba(255,255,255,0.2)] py-[20px] md:flex-col md:border-r md:py-[30px]">
          <icon class="min-h-[30px] min-w-[30px] text-white md:h-[45px] md:w-[45px]" name="h-icon:group"></icon>
          <div class="flex flex-col flex-nowrap items-start gap-[5px] self-stretch md:gap-[8px]">
            <span
              class="font-['Onest'] text-mobile-body-15 font-normal text-[rgba(255,255,255,0.7)] md:text-body-17 md:font-medium">
              Количество мест
            </span>
            <span
              class="font-['Onest'] text-mobile-subtitle-16 font-bold text-[#fff] md:text-subtitle-24 md:font-semibold">
              {{ course.max_participants }} мест
              <br />
              <span class="text-mobile-body-14 font-normal md:text-body-16">*предварительная запись</span>
            </span>
          </div>
        </div>
        <div
          class="flex flex-row flex-nowrap items-start gap-[20px] border-b border-solid border-b-[rgba(255,255,255,0.2)] py-[20px] md:flex-col md:py-[30px] md:pl-[30px]">
          <icon class="min-h-[30px] min-w-[30px] text-white md:h-[45px] md:w-[45px]" name="h-icon:card"></icon>
          <div class="flex flex-col flex-nowrap items-start gap-[5px] self-stretch md:gap-[8px]">
            <span
              class="font-['Onest'] text-mobile-body-15 font-normal text-[rgba(255,255,255,0.7)] md:text-body-17 md:font-medium">
              Стоимость за весь курс
            </span>
            <span
              class="font-['Onest'] text-mobile-subtitle-16 font-bold text-[#fff] md:text-subtitle-24 md:font-semibold">
              {{ Number(course.price).toLocaleString('ru-RU') }} сум
              <br />
              <span class="text-mobile-body-14 font-normal md:text-body-16">*возможна оплата по месяцам</span>
            </span>
          </div>
        </div>
        <div
          class="flex flex-row flex-nowrap items-start gap-[20px] border-b border-solid border-b-[rgba(255,255,255,0.2)] border-r-[rgba(255,255,255,0.2)] py-[20px] md:flex-col md:border-r md:py-[30px]">
          <icon class="min-h-[30px] min-w-[30px] text-white md:h-[45px] md:w-[45px]" name="h-icon:clock"></icon>
          <div class="flex flex-col flex-nowrap items-start gap-[5px] self-stretch md:gap-[8px]">
            <span
              class="font-['Onest'] text-mobile-body-15 font-normal text-[rgba(255,255,255,0.7)] md:text-body-17 md:font-medium">
              Время проведения
            </span>
            <span
              class="font-['Onest'] text-mobile-subtitle-16 font-bold text-[#fff] md:text-subtitle-24 md:font-semibold">
              с {{ formatTime(course.start_time || siteSettings?.start_time) }} до {{ formatTime(course.end_time ||
                siteSettings?.end_time) }}
            </span>
          </div>
        </div>
        <div
          class="flex flex-row flex-nowrap items-start gap-[20px] border-solid border-b-[rgba(255,255,255,0.2)] py-[20px] md:flex-col md:border-b md:py-[30px] md:pl-[30px]">
          <icon class="min-h-[30px] min-w-[30px] text-white md:h-[45px] md:w-[45px]" name="h-icon:phone "></icon>
          <div class="flex flex-col flex-nowrap items-start gap-[5px] self-stretch md:gap-[8px]">
            <span
              class="font-['Onest'] text-mobile-body-15 font-normal text-[rgba(255,255,255,0.7)] md:text-body-17 md:font-medium">
              По вопросам курса
            </span>
            <span
              class="font-['Onest'] text-mobile-subtitle-16 font-bold text-[#fff] md:text-subtitle-24 md:font-semibold">
              {{ formatPhoneNumber(course.contact_phone || siteSettings?.phone) }}
              <br />
              {{ course.contact_email || siteSettings?.email }}
            </span>
          </div>
        </div>
        <div class="col-span-full mt-[30px] !hidden md:!block">
          <ui-button class="!bg-white !text-green-500"
            @click="openCourseOrderModal(course.id, course.specialist.id)">Записаться на курс</ui-button>
        </div>
      </div>
      <iframe
        src="https://yandex.com/map-widget/v1/?um=constructor%3A5aff8a80fefd8c9947873ec7aedcef15800978c3887fb1dfac16840452378f9e&amp;source=constructor"
        width="560" height="400" class="h-[200px] w-full rounded-[20px] md:h-[687px]" frameborder="0"></iframe>
      <!-- <iframe
        class="h-[200px] w-full rounded-[20px] md:h-[687px]"
        src="https://yandex.uz/maps/-/CHdr5MYD"
        width="560"
        height="400"
        frameborder="1"
        allowfullscreen="true"
        style="position: relative"
      ></iframe> -->
    </div>
  </app-section-fluid>
</template>

<style scoped></style>
