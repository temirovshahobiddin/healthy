<script setup lang="ts">
import CertificateSlider from "~/features/specialisty/ui/certificate-slider.vue"

interface IProps {
  specialist: any
}

function getEmbedUrl(url?: string) {
  if (!url) return ""
  try {
    // если url без протокола — добавляем https://
    const normalizedUrl = url.startsWith("http") ? url : `https://${url}`
    const videoId = new URL(normalizedUrl).searchParams.get("v")
    return videoId ? `https://www.youtube.com/embed/${videoId}` : normalizedUrl
  } catch {
    return ""
  }
}


defineProps<IProps>()
</script>
 
<template>
  <ui-accordion class="detail-accordion w-full !border-b border-none border-b-[#E8E8E8] !bg-white md:mb-[10px]">
    <template #header>
      <span class="text-mobile-subtitle-20 font-semibold text-[#323232] md:text-subtitle-24">О специалисте</span>
    </template>
    <template #default>
      <div class="pb-[10px] md:pb-[15px]">
        <span class="text-mobile-body-15 font-normal text-[#585958] md:text-body-18">
          {{ specialist.description }}
        </span>
      </div>
    </template>
  </ui-accordion>
  <ui-accordion class="detail-accordion w-full !border-b border-none border-b-[#E8E8E8] !bg-white md:mb-[10px]">
    <template #header>
      <span class="text-mobile-subtitle-20 font-semibold text-[#323232] md:text-subtitle-24">Образование</span>
    </template>
    <template #default>
      <div class="pb-[10px] md:pb-[15px]">
        <div class="relative flex shrink-0 flex-col flex-nowrap items-start gap-[15px] self-stretch">
          <!-- <ul class="relative grid !list-disc gap-[10px] md:gap-[15px]">
            <li v-for="education in specialist.education" class="flex flex-col flex-nowrap items-start gap-[2px]"
              :key="education.year">
              <span class="text-mobile-body-15 font-bold text-[#323232] md:text-body-18">
                {{ education.year }}
              </span>
              <span class="text-mobile-body-15 font-normal text-[#323232] md:text-body-18">
                {{ getValue(education, "description", 'ru') }}
              </span>
            </li>

          </ul> -->
          <ul class="relative grid gap-[10px] md:gap-[15px]">
  <li
    v-for="education in specialist.education"
    :key="education.year"
    class="relative pl-[18px] flex flex-col flex-nowrap items-start gap-[2px]
           before:absolute before:left-0 before:top-[8px]
           before:h-[6px] before:w-[6px] before:rounded-full before:bg-[#323232]"
  >
    <span class="text-mobile-body-15 font-bold text-[#323232] md:text-body-18">
      {{ education.year }}
    </span>
    <span class="text-mobile-body-15 font-normal text-[#323232] md:text-body-18">
      {{ getValue(education, 'description', 'ru') }}
    </span>
  </li>
</ul>

        </div>
      </div>
    </template>
  </ui-accordion>
  <ui-accordion class="detail-accordion w-full !border-b border-none border-b-[#E8E8E8] !bg-white md:mb-[10px]">
    <template #header>
      <span class="text-mobile-subtitle-20 font-semibold text-[#323232] md:text-subtitle-24">Опыт работы</span>
    </template>
    <template #default>
      <div class="pb-[10px] md:pb-[15px]">
        <!-- <ul class="relative grid gap-[10px] md:gap-[15px]">
          <li v-for="experience in specialist.experience_list"
            class="flex  flex-col flex-nowrap items-start gap-[2px]" :key="experience.id">

            <span class="text-mobile-body-15 font-bold text-[#323232] md:text-body-18">
              {{ experience.start_year }} -
              {{ experience.end_year ? experience.end_year : t("current_exp_year") }}
            </span>
            <span class="text-mobile-body-15 font-normal text-[#323232] md:text-body-18">
              {{ getValue(experience, "description", 'ru') }}
            </span>
          </li>
        </ul> -->
        <ul class="relative grid gap-[10px] md:gap-[15px]">
  <li
    v-for="experience in specialist.experience_list"
    :key="experience.id"
    class="relative pl-[18px] flex flex-col flex-nowrap items-start gap-[2px]
           before:absolute before:left-0 before:top-[8px]
           before:h-[6px] before:w-[6px] before:rounded-full before:bg-[#323232]"
  >
    <span class="text-mobile-body-15 font-bold text-[#323232] md:text-body-18">
      {{ experience.start_year }} -
      {{ experience.end_year ? experience.end_year : t('current_exp_year') }}
    </span>
    <span class="text-mobile-body-15 font-normal text-[#323232] md:text-body-18">
      {{ getValue(experience, 'description', 'ru') }}
    </span>
  </li>
</ul>

      </div>
    </template>
  </ui-accordion>
  <ui-accordion class="detail-accordion w-full !border-b border-none border-b-[#E8E8E8] !bg-white md:mb-[10px]">
    <template #header>
      <span class="text-mobile-subtitle-20 font-semibold text-[#323232] md:text-subtitle-24">Достижения</span>
    </template>
    <template #default>
      <div class="pb-[10px] md:pb-[15px]">
        <ul class="relative grid gap-[10px] md:gap-[15px]">
          <li v-for="(achievement, index) in specialist.achievements"
            class="flex  flex-col flex-nowrap items-start gap-[2px]" :key="index">
            <span class="text-mobile-body-15 font-normal text-[#323232] md:text-body-18">
              {{ getValue(achievement, "description", 'ru') }}
            </span>
          </li>
        </ul>
      </div>
    </template>
  </ui-accordion>
  <ui-accordion class="detail-accordion w-full !border-b border-none border-b-[#E8E8E8] !bg-white md:mb-[10px]">
    <template #header>
      <span class="text-mobile-subtitle-20 font-semibold text-[#323232] md:text-subtitle-24">Сертификаты</span>
    </template>
    <template #default>
      <div class="pb-[10px] md:pb-[15px]">
        <certificate-slider :items="specialist.certificates" />
      </div>
    </template>
  </ui-accordion>
  <ui-accordion class="detail-accordion w-full !border-b border-none border-b-[#E8E8E8] !bg-white md:mb-[10px]">
    <template #header>
      <span class="text-mobile-subtitle-20 font-semibold text-[#323232] md:text-subtitle-24">Личное обращение</span>
    </template>
    <template #default>
      <div class="pb-[10px] md:pb-[15px]">
        <div class="relative overflow-hidden rounded-[10px] bg-[#f0f4f1] p-[15px] md:p-[20px]">
          <span class="text-mobile-subtitle-16 font-semibold text-[#63845c] md:text-subtitle-20">
            Каждый человек уникален, и я убежден, что даже в самой сложной ситуации можно найти выход. В своей работе я
            опираюсь на комплексный подход и верю в силы каждого пациента.
          </span>
        </div>
      </div>
    </template>
  </ui-accordion>
  <ui-accordion class="detail-accordion w-full !border-b border-none border-b-[#E8E8E8] !bg-white md:mb-[10px]">
    <template #header>
      <span class="text-mobile-subtitle-20 font-semibold text-[#323232] md:text-subtitle-24">Видео-презентация</span>
    </template>
    <template #default>
      <div class="pb-[10px] md:pb-[15px]">
        <iframe class="h-[170px] md:h-[400px]" width="100%" title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
          :src="getEmbedUrl(specialist.video)"></iframe>

      </div>
    </template>
  </ui-accordion>
</template>

<style scoped></style>
