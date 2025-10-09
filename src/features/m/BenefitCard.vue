<template>
  <article
    class="flex flex-col items-start gap-[60px] rounded-[15px] bg-[#fff] pb-[20px] pl-[15px] pr-[15px] pt-[20px] md:p-[20px]"
  >
    <div class="overflow-hidden">
      <icon class="h-[40px] w-[40px] text-green-500" :name="iconName"></icon>
    </div>
    <div class="flex flex-col flex-nowrap items-start gap-[5px] md:gap-2">
      <h3 class="font-['Onest'] text-mobile-subtitle-20 font-semibold text-[#323232] md:text-subtitle-24">
        {{ title }}
      </h3>
      <p class="text-left font-['Onest'] text-mobile-body-15 font-normal text-[#585958] md:text-body-17">
        {{ description }}
      </p>
    </div>
  </article>
</template>

<script lang="ts" setup>
import { computed } from "vue"

interface Props {
  iconName: string
  title: string
  description: string
}

const props = defineProps<Props>()
</script>
