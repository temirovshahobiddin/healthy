<script setup lang="ts">
import AppSection from "~/widgets/layout/app-section.vue"
import HTag from "~/features/base/h-tag.vue"
import CourseStatisticsProgress from "~/features/courses/ui/course-statistics-progress.vue"
import { breakpointsTailwind } from "@vueuse/core/index"
const { openCourseOrderModal } = useModal()

const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smallerOrEqual("sm")
const isTablet = breakpoints.between("sm", "lg")
const isVerySmall = breakpoints.smallerOrEqual(525)
const circleSize = computed(() => {
  if (isVerySmall.value) return 55
  if (isMobile.value) return 70
  if (isTablet.value) return 85
  return 100
})
interface IProps {
  course: any
}
defineProps<IProps>()
type TimeLeft = {
  months: number
  days: number
  hours: number
}

function getTimeLeft(start_date: string): TimeLeft {
  const target = new Date(start_date)
  const now = new Date()

  if (isNaN(target.getTime()) || target <= now) {
    return { months: 0, days: 0, hours: 0 }
  }

  let months =
    target.getFullYear() * 12 + target.getMonth() -
    (now.getFullYear() * 12 + now.getMonth())

  // Adjust month difference if the day in the target month hasn't been reached yet
  if (target.getDate() < now.getDate()) {
    months--
  }

  // Get the date after adding full months to now
  const temp = new Date(now)
  temp.setMonth(temp.getMonth() + months)

  // Calculate remaining days and hours
  let diffMs = target.getTime() - temp.getTime()
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  diffMs -= days * 1000 * 60 * 60 * 24

  const hours = Math.floor(diffMs / (1000 * 60 * 60))

  return {
    months: Math.max(0, months),
    days: Math.max(0, days),
    hours: Math.max(0, hours)
  }
}

</script>

<template>
  <app-section class="py-[40px] md:py-[60px]">
    <div class="pt-[40px] relative overflow-hidden rounded-[20px] bg-[#6f8f6e] px-[15px] py-[40px] md:h-[590px] md:py-[80px]">
      <div
        class="mx-auto flex w-full max-w-full flex-nowrap items-center justify-center gap-[6px] sm:gap-[12px] md:gap-[20px] lg:gap-[26px]">
        <course-statistics-progress progress="50" :size="circleSize">
          <template #label>
            <div class="flex flex-col items-center">
              <span
                class="font-['Onest'] text-[22px] font-semibold text-[#fff] sm:text-[40px] md:text-[55px] lg:text-[70px]">{{
                  getTimeLeft(course.start_date).months }}</span>
              <span
                class="font-['Onest'] text-[9px] font-medium text-[#fff] opacity-80 sm:text-[13px] md:text-[16px] lg:text-body-18">
                месяцев
              </span>
            </div>
          </template>
        </course-statistics-progress>
        <course-statistics-progress progress="60" :size="circleSize">
          <template #label>
            <div class="flex flex-col items-center">
              <span
                class="font-['Onest'] text-[22px] font-semibold text-[#fff] sm:text-[40px] md:text-[55px] lg:text-[70px]">{{
                  getTimeLeft(course.start_date).days }}</span>
              <span
                class="font-['Onest'] text-[9px] font-medium text-[#fff] opacity-80 sm:text-[13px] md:text-[16px] lg:text-body-18">
                дней
              </span>
            </div>
          </template>
        </course-statistics-progress>
        <course-statistics-progress progress="35" :size="circleSize">
          <template #label>
            <div class="flex flex-col items-center">
              <span
                class="font-['Onest'] text-[22px] font-semibold text-[#fff] sm:text-[40px] md:text-[55px] lg:text-[70px]">{{
                  getTimeLeft(course.start_date).hours }}</span>
              <span
                class="font-['Onest'] text-[9px] font-medium text-[#fff] opacity-80 sm:text-[13px] md:text-[16px] lg:text-body-18">
                часов
              </span>
            </div>
          </template>
        </course-statistics-progress>
      </div>
      <div class="mt-[50px] flex flex-col flex-nowrap items-center gap-[30px]">
        <div class="flex shrink-0 flex-col flex-nowrap items-center gap-[10px] self-stretch text-center md:gap-[5px]">
          <span class="font-['Onest'] text-mobile-headline-1 font-semibold text-[#fff] md:text-headline-2">
            Осталось
            <br class="md:hidden" />
            до старта курса
          </span>
          <span class="font-['Onest'] text-mobile-body-15 font-normal text-[#fff] md:text-body-20">
            Успейте записаться, количество мест ограничено
          </span>
        </div>
        <ui-button class="!bg-white !text-green-500"
          @click="openCourseOrderModal(course.id, course.specialist.id)">Записаться
          на курс</ui-button>
      </div>
      <div class="absolute left-0 top-0 z-[411] h-full w-full overflow-hidden">
        <div class="z-[416] mb-0 ml-[-13px] mr-0 mt-[28px] h-[36px] w-[180px] overflow-hidden opacity-30">
          <div class="z-[417] mb-0 ml-[12px] mr-0 mt-[7.323px] h-[21.314px] w-[832.623px] overflow-hidden">
            <div
              class="absolute left-[5.36%] top-[0.01%] z-[420] h-[100.01%] w-[1.64%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/qNw70U4FMk.png)] bg-[length:100%_100%] bg-no-repeat">
            </div>
            <div
              class="absolute left-[15.98%] top-[0.01%] z-[424] h-[100.01%] w-[1.64%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/6E7OWCp30E.png)] bg-[length:100%_100%] bg-no-repeat">
            </div>
            <div
              class="absolute left-[8.05%] top-[1.41%] z-[421] h-[97.17%] w-[1.52%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/xqA12XRFrH.png)] bg-[length:100%_100%] bg-no-repeat">
            </div>
            <div
              class="absolute left-[18.68%] top-[1.41%] z-[425] h-[97.17%] w-[1.52%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/Pyc230YLZW.png)] bg-[length:100%_100%] bg-no-repeat">
            </div>
            <div
              class="absolute left-[2.62%] top-[2.03%] z-[419] h-[95.94%] w-[1.68%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/CqEecRwwSE.png)] bg-[length:100%_100%] bg-no-repeat">
            </div>
            <div
              class="absolute left-[13.25%] top-[2.03%] z-[423] h-[95.94%] w-[1.68%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/mP8eDfp8aZ.png)] bg-[length:100%_100%] bg-no-repeat">
            </div>
            <div
              class="absolute left-0 top-[4.66%] z-[418] h-[90.67%] w-[1.57%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/CJY2jidV7v.png)] bg-[length:100%_100%] bg-no-repeat">
            </div>
            <div
              class="absolute left-[10.63%] top-[4.66%] z-[422] h-[90.67%] w-[1.57%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/OUD6gH65Mo.png)] bg-[length:100%_100%] bg-no-repeat">
            </div>
          </div>
        </div>
        <div
          class="z-[415] mb-0 ml-[1122px] mr-0 mt-[7px] h-[95.043px] w-[95.043px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/reH9DTSG6J.png)] bg-[length:100%_100%] bg-no-repeat">
        </div>
        <div
          class="z-[414] mb-0 ml-[175px] mr-0 mt-[28.958px] h-[68px] w-[68px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/XKSQrnz4C1.png)] bg-[length:100%_100%] bg-no-repeat">
        </div>
        <div class="z-[413] mb-0 ml-[243px] mr-0 mt-[168px] h-[193px] w-[1092.655px]">
          <div
            class="absolute left-[88.04%] top-0 z-[412] h-[44.17%] w-[11.96%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/ftt8TkJGwX.png)] bg-[length:100%_100%] bg-no-repeat">
          </div>
          <div
            class="absolute left-0 top-[28.5%] z-[413] h-[71.5%] w-[12.76%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/rR2FbRuMjD.png)] bg-[length:100%_100%] bg-no-repeat">
          </div>
        </div>
      </div>
    </div>
  </app-section>
</template>

<style scoped></style>
