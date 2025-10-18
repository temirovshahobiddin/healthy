<script setup lang="ts">
interface IProps {
  services: any[]
  specialist_id: string | number
}

const props = defineProps < IProps > ()
const { openCourseOrderModal } = useModal()

function handleApply(serviceId: number | string) {
  openCourseOrderModal(serviceId, props.specialist_id)
}
</script>

<template>
  <ui-accordion v-for="service in services" :key="service.id"
    class="detail-accordion w-full !border-b border-none border-b-[#E8E8E8] !bg-white md:mb-[10px]">
    <template #header>
      <div class="flex flex-col gap-[5px]">
        <span class="text-mobile-subtitle-20 font-semibold text-[#323232] md:text-subtitle-24">
          {{ service.title }}
        </span>
        <span class="text-mobile-body-15 font-semibold text-[#63845c] md:text-body-18">
          {{ Number(service.price).toLocaleString('ru-RU') }} сум
        </span>
      </div>
    </template>
    <template #default>
      <div class="pb-[10px] md:pb-[15px] border-b border-solid border-[#E8E8E8]">
        <div class="mb-[15px] md:mb-[20px] p-[15px] bg-[#F9F9F9] rounded-[10px]">
          <div v-html="service.content"></div>
        </div>
        <ui-button class="w-full md:w-auto" @click="handleApply(service.id)">
          Записаться
        </ui-button>
      </div>
    </template>
  </ui-accordion>
</template>

<style scoped></style>