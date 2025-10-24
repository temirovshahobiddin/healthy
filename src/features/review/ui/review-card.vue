<script setup lang="ts">
interface IProps {
  review: any
}

const props = defineProps<IProps>()

const { t } = useI18n({
  useScope: "local"
})
const modal = useModal()

const showReviewModal = () => {
  modal.show("review-modal", props.review)
}
function formatFullName(fullName: string): string {
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 0) return '';
  let [lastName, firstName, middleName] = parts;
  firstName = firstName.charAt(0).toUpperCase();
  middleName = middleName.charAt(0).toUpperCase();
  return `${lastName} ${firstName}. ${middleName}.`
  // const initials =
  //   (firstName ? firstName[0].toUpperCase() + '.' : '') +
  //   (middleName ? ' ' + middleName[0].toUpperCase() + '.' : '');
  
  // return `${lastName} ${initials}`;
  // return fullName;
}
</script>

<template>
  <div
    class="flex w-full flex-col flex-nowrap items-start gap-[20px] rounded-[20px] bg-[#fff] px-[15px] py-[20px] md:p-[20px] select-none"
  >
    <div class="flex w-full flex-col items-start gap-[10px] md:gap-[15px]">
      <div class="flex flex-col flex-nowrap items-start gap-[2px] self-stretch">
        <span class="text-mobile-subtitle-18 font-semibold text-[#323232] md:text-subtitle-22">
          {{ review.reviewer_name }}
        </span>
        <span class="text-left font-['Onest'] text-mobile-body-15 font-normal text-[#848484] md:text-body-16">
          {{ review.reviewer_age }} {{ t("age") }}
        </span>
      </div>
      <div
        class="flex w-full flex-nowrap items-center justify-between border-t border-solid border-t-[#e7e7e7] pt-[10px] md:pt-[15px]"
      >
        <div class="flex w-[45px] flex-nowrap items-center gap-[5px]">
          <icon class="text-green-500" name="h-icon:star"></icon>
          <span class="font-['Manrope'] text-mobile-body-14 font-bold text-[#63845c] md:text-body-16">
            {{ review.rating }}
          </span>
        </div>
        <div class="flex w-full flex-nowrap items-center justify-end gap-[10px] text-mobile-body-14 md:text-body-16">
          <span class="font-normal text-[#848484]">{{ t("for") }}:</span>
          <div class="font-normal">
            <span class="font-normal text-[#848484] underline cursor-pointer">{{ formatFullName(review.specialist_name) }}</span>
          </div>
        </div>
      </div>
    </div>
    <p class="overflow-hidden break-words text-mobile-body-15 font-normal text-[#323232] md:text-body-17 line-clamp-6">
      {{ review.comment }}
    </p>
    <ui-button
      class="mt-auto"
      color="primary"
      variant="link"
      icon-name="h-icon:arrow"
      icon-class="text-green-500"
      @click="showReviewModal"
    >
      {{ t("read_more") }}
    </ui-button>
  </div>
</template>

<style scoped></style>
<i18n>
{
  "en": {
    "age": "years",
    "for": "To",
    "read_more": "Read more"
  },
  "ru": {
    "age": "лет",
    "for": "Кому",
    "read_more": "Читать полностью"
  },
  "uz": {
    "age": "yosh",
    "for": "Kimga",
    "read_more": "Batafsil o'qish"
  }
}
</i18n>
