<template>
  <article
    class="flex shrink-0 flex-nowrap items-center gap-[10px] self-stretch rounded-[10px] bg-[#fff] pb-[15px] pl-[15px] pr-[15px] pt-[15px] md:gap-[20px] md:p-[20px]"
  >
    <div
      class="flex h-[25px] w-[25px] shrink-0 flex-nowrap items-center justify-center gap-[10px] rounded-[20px] bg-[#6f8f6e] md:h-[35px] md:w-[35px]"
    >
      <icon class="h-[12.14px] w-[12.14px] text-white md:h-[17px] md:w-[17px]" name="h-icon:checkmark" />
    </div>
    <h3 class="h-[20px] text-left font-['Onest'] text-[16px] font-normal leading-[20px] text-[#323232] md:text-[22px]">
      {{ title }}
    </h3>
  </article>
</template>

<script lang="ts" setup>
interface Props {
  title: string
}

defineProps<Props>()
</script>
