<script setup lang="ts">
import AppSectionFluid from "~/widgets/layout/app-section-fluid.vue"
import HTag from "~/features/base/h-tag.vue"
import AppSection from "~/widgets/layout/app-section.vue"

interface IProps {
  course: any
}

defineProps<IProps>()
</script>

<template>
  <app-section-fluid class="mt-[23px] bg-[#ffffff] py-[40px] md:py-[100px]">
    <app-section class="!p-0 md:px-4">
      <div class="mb-[20px] md:mb-[40px]">
        <span class="section-title font-['Onest'] font-semibold text-[#323232]">Ведущие курса</span>
      </div>
      <div class="z-[186] flex flex-col flex-nowrap items-start gap-[20px] md:flex-row md:gap-[60px]">
        <img class="h-[345px] w-full overflow-hidden rounded-[10px] object-cover md:h-[575px] md:w-[548px]"
          :src="course.specialist?.photo" alt="Course Author" />
        <div class="flex flex-col flex-nowrap items-start gap-[32px] md:w-[832px] md:gap-[129px]">
          <div class="flex flex-col flex-nowrap items-start gap-[20px] self-stretch md:gap-[30px]">
            <div
              class="flex flex-col items-start gap-[10px] self-stretch border-b border-solid border-b-[#e7e7e7] pb-[20px] md:gap-[20px] md:pb-[30px]">
              <h-tag>Ментор</h-tag>
              <div class="flex flex-col flex-nowrap items-start gap-[5px] self-stretch">
                <span class="font-['Onest'] text-mobile-subtitle-22 font-semibold text-[#323232] md:text-headline-3">
                  {{ course.specialist?.full_name }}
                </span>
                <span class="font-['Onest'] text-mobile-subtitle-16 font-semibold text-[#63845c] md:text-subtitle-20">
                  <!-- врач-психотерапевт, к.м.н., доцент с 37-летним стажем -->
                  {{ course.specialist?.short_description }}
                </span>
              </div>
            </div>
            <div class="flex flex-col flex-nowrap items-start gap-[15px] self-stretch">
              <span class="font-['Onest'] text-mobile-subtitle-22 font-semibold text-[#323232] md:text-headline-4">
                О менторе
              </span>
              <span class="font-['Onest'] text-[19px] font-normal text-[#585958]">{{
                course.specialist?.description }}</span>
            </div>
          </div>
        </div>
      </div>
    </app-section>
  </app-section-fluid>
</template>

<style scoped></style>
