<script setup lang="ts">
import AppSection from "~/widgets/layout/app-section.vue"
import HTag from "~/features/base/h-tag.vue"
interface IProps {
  course: any
}

const props = defineProps<IProps>()

const showAll = ref(false)
const displayedModules = computed(() => {
  return showAll.value ? props.course.modules : props.course.modules.slice(0, 2)
})
</script>

<template>
  <app-section class="py-[40px] md:py-[60px] space-y-[20px] md:space-y-[40px]" id="faq">
    <span class="section-title mb-[20px] block md:mb-[40px]">Программа курса</span>
    <ui-accordion v-for="(module, index) in displayedModules" :key="module.id">
      <template #header>
        <div>
          <div class="mb-2 flex items-center gap-2 md:mb-[10px]">
            <h-tag class="min-w-[30px] md:!px-[10px] md:!py-[5px] md:!text-subtitle-16">{{ module.title }}</h-tag>
            <h-tag class="min-w-[30px] md:!px-[10px] md:!py-[5px] md:!text-subtitle-16">Месяц {{ index + 1 }}</h-tag>
          </div>
          <h3
            class="font-['Onest'] text-mobile-subtitle-20 font-semibold text-[#323232] md:mt-[10px] md:text-headline-4">
          </h3>
        </div>
      </template>
      <template #default>
        <div class="course-module__item">
          <div v-for="session in module.sessions" :key="session.id"
            class="z-[150] flex flex-col flex-nowrap items-start gap-[8px] border-t border-solid border-t-[#e7e7e7] bg-[#fff] px-[15px] py-[12px] md:px-[30px] md:py-[15px]">
            <h6>{{ session.title }}</h6>
            <v-html v-html="session.content"></v-html>
          </div>
        </div>
      </template>
    </ui-accordion>
    <div v-if="course.modules.length > 2" class="mt-[15px] flex w-full items-center justify-center md:mt-[46px]">
      <ui-button class="!mx-auto min-w-[223px] !border-green-500 !text-green-500" variant="outline"
        @click="showAll = !showAll">
        {{ showAll ? 'Скрыть' : 'Все модули' }}
      </ui-button>
    </div>
  </app-section>
</template>

<style scoped>
.course-module__item {
  h6 {
    @apply font-['Onest'] text-mobile-subtitle-18 font-semibold text-green-500 md:text-subtitle-22;
  }

  ul {
    @apply list-disc pl-6;
  }

  ul li,
  p {
    @apply font-['Onest'] text-mobile-body-14 font-normal text-[#585958] md:text-body-18;
  }
}
</style>
