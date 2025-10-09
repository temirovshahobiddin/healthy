<template>
  <article class="flex flex-nowrap items-start gap-[20px] pb-[15px] pt-[15px] md:gap-[40px] md:px-[15px] md:py-[40px]">
    <div class="h-[35px] w-[35px] overflow-hidden md:h-[45px] md:w-[45px]">
      <icon class="h-full w-full text-green-500" :name="iconName"></icon>
    </div>
    <div class="flex shrink-0 grow basis-0 flex-col flex-nowrap items-start gap-[5px] md:gap-[12px]">
      <h3 class="text-left font-['Onest'] text-mobile-subtitle-18 font-semibold text-[#323232] md:text-subtitle-20">
        {{ title }}
      </h3>
      <p class="text-left font-['Onest'] text-mobile-body-14 font-normal text-[#585958] md:text-body-18">
        {{ description }}
      </p>
    </div>
  </article>
</template>

<script lang="ts" setup>
interface Props {
  iconName: string
  title: string
  description: string
  hasBorder?: boolean
  isCustomIcon?: boolean
}

withDefaults(defineProps<Props>(), {
  hasBorder: false,
  isCustomIcon: false
})
</script>
