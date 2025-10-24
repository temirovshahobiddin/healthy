<template>
  <div class="mx-auto w-full max-w-screen-2xl overflow-hidden px-4">
    <div
      class="flex flex-col-reverse items-center justify-between z-50 overflow-hidden pb-[20px] pt-[30px] md:h-[820px] md:flex-row md:pb-[80px] md:pt-[65px]">
      <div class="flex flex-col flex-nowrap items-start gap-[49px] md:h-[369px] md:w-[710px] md:gap-[40px]">
        <div class="z-[3] flex shrink-0 flex-col flex-nowrap items-start gap-[15px] self-stretch md:gap-[30px]">
          <div class="z-[4] flex shrink-0 flex-nowrap items-center gap-[5px] md:gap-[10px]">
            <h-tag>
              <div class="flex flex-nowrap items-center gap-[8px]">
                <icon class="text-[18px] text-green-500" name="h-icon:calendar"></icon>
                <span>{{ formattedDate }}</span>
              </div>
            </h-tag>
            <h-tag>
              {{ course.type.name }}
            </h-tag>
            <h-tag>
              {{ t('format') }}
            </h-tag>
          </div>
          <div class="z-[13] flex shrink-0 flex-col flex-nowrap items-start gap-[12px] self-stretch">
            <h1
              class="font-['Onest'] text-[58px] text-mobile-headline-2 font-semibold text-[#323232] md:w-[710px] md:text-headline-1">
              {{ course.title }}
            </h1>
            <div class="md:w-[598px]">
              <span class="font-['Onest'] text-mobile-body-15 font-normal text-[#585958] md:text-body-18"
                v-html="course.description">

              </span>
            </div>
          </div>
        </div>
        <div class="flex w-full flex-col flex-nowrap items-start gap-[10px] md:flex-row md:gap-[20px]">
          <ui-button class="w-full cursor-pointer md:w-auto md:min-w-[223px]"
            @click="openCourseOrderModal(course.id, course.specialist.id)">Записаться на курс</ui-button>
          <ui-button class="w-full md:w-auto md:min-w-[223px]" variant="outline"
            @click="scrollToFaq">Подробнее</ui-button>
        </div>
      </div>
      <div class="mb-[20px] h-[328px] w-[328px] overflow-hidden rounded-[20px] md:mb-0 md:h-[670px] md:w-[670px]">
        <img class="object-cover h-[328px] w-[328px] overflow-hidden rounded-[20px] md:mb-0 md:h-[670px] md:w-[670px]"
          :src="course.thumbnail" alt="" />
      </div>
    </div>
  </div>
  <app-section>
  </app-section>
</template>

<script lang="ts" setup>
import AppSection from "~/widgets/layout/app-section.vue"
import HTag from "~/features/base/h-tag.vue"

const { t, locale } = useI18n({ useScope: "local" })
const { openCourseOrderModal } = useModal()
interface IProps {
  course: {
    start_date: string
    title: string
    description: string
    type: {
      name: string
    }
    format: string
    thumbnail: string
    id: string | number
    specialist: {
      id: string | number
    }
  }
}

const props = defineProps<IProps>()

const uzMonths = [
  "yanvar", "fevral", "mart", "aprel", "may", "iyun",
  "iyul", "avgust", "sentyabr", "oktyabr", "noyabr", "dekabr"
]


function formatUzDate(dateString: string) {
  // Parse the date string directly to avoid timezone issues
  const [year, month, day] = dateString.split('T')[0].split('-').map(Number)
  const m = uzMonths[month - 1]
  return `${day} ${m} ${year}`
}

function formatRuDate(dateString: string) {
  const [year, month, day] = dateString.split('T')[0].split('-').map(Number)
  const date = new Date(year, month - 1, day)
  const formatted = new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(date)
  return formatted.replace(' г.', '')
}

// const formattedDate = computed(() => {
//   if (!props.course?.start_date) return ""
//   const date = new Date(props.course.start_date)

//   if (locale.value === "uz") {
//     return formatUzDate(date)
//   }

//   return new Intl.DateTimeFormat("ru-RU", {
//     day: "numeric",
//     month: "long",
//     year: "numeric"
//   }).format(date)
// })
const formattedDate = computed(() => {
  if (!props.course?.start_date) return ""

  if (locale.value === "uz") {
    return formatUzDate(props.course.start_date)
  }

  return formatRuDate(props.course.start_date)
})

const scrollToFaq = () => {
  const faqElement = document.getElementById('faq')
  if (faqElement) {
    faqElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>


<i18n>
{
  "ru": {
    "title": "Обучающие курсы и тренинги  ",
    "description": "Мы проводим офлайн-курсы по психологии и психотерапии для разных аудиторий – от тех, кто хочет лучше понять себя, до практикующих специалистов, желающих повысить квалификацию",
    "format": "Офлайн"
  },
  "uz": {
    "title": "Sharhlar va muvaffaqiyat hikoyalari",
    "description": "Bu yerda bizning platformamizning malakali psixoterapevtlari, psixologlari va psixiatrlarining ro'yxati mavjud. Sizning so'rovingizga mos mutaxassisni topish uchun filtrlarni ishlating",
    "format": "Offline"
  }
}
</i18n>
