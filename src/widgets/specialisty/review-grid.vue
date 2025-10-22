<script setup lang="ts">
import ReviewCard from "~/features/review/ui/review-card.vue"
import AppSection from "~/widgets/layout/app-section.vue"
import { Carousel, type CarouselConfig, type CarouselMethods, Slide } from "vue3-carousel"

interface IProps {
  items: any[]
}

defineProps<IProps>()

defineEmits<{
  (e: "loadMore"): void
}>()

const { t } = useI18n({
  useScope: "local"
})

const modal = useModal()

const carouselRef = ref<CarouselMethods>()
const carouselConfig = computed<Partial<CarouselConfig>>(() => ({
  snapAlign: "start",
  wrapAround: false,
  mouseDrag: true,
  touchDrag: true,
  breakpoints: {
    768: {
      itemsToShow: 2,
      gap: 16
    },
    360: {
      itemsToShow: 1.15,
      gap: 16
    }
  }
}))

const showCreateReviewModal = () => {
  modal.show("review-create-modal")
}
</script>
<template>
  <app-section class="mb-[80px] mt-[90px] flex flex-col flex-nowrap items-start gap-[20px] md:mt-[124px] md:gap-[40px]">
    <div class="flex flex-nowrap items-center justify-between self-stretch">
      <span class="text-mobile-headline-1 font-semibold text-[#323232] md:text-headline-2">
        {{ t("title") }}
      </span>

      <ui-button class="!hidden px-[20px] py-[16px] md:!flex" @click="showCreateReviewModal">
        {{ t("add_review") }}
      </ui-button>
    </div>

    <!-- Desktop: Grid 4 columns, 2 rows max (8 items) -->
    <div v-if="items.length" class="hidden lg:grid lg:grid-cols-4 gap-[20px] self-stretch">
      <review-card v-for="item in items.slice(0, 8)" :key="item.id" :review="item" />
    </div>

    <!-- Mobile/Tablet: Carousel -->
    <div v-if="items.length" class="lg:hidden w-full select-none">
      <carousel v-bind="carouselConfig" ref="carouselRef">
        <slide v-for="item in items" :key="item.id">
          <review-card :review="item" />
        </slide>
      </carousel>
    </div>

    <div v-if="!items.length" class="w-full text-center text-[#999] py-[40px]">
      {{ t("messages.no_reviews") }}
    </div>

    <ui-button class="flex w-full px-[20px] py-[16px] md:!hidden" color="primary" @click="showCreateReviewModal">
      {{ t("add_review") }}
    </ui-button>
    <!-- <div v-if="items.length > 8" class="flex w-full items-center justify-center">
      <ui-button class="px-[20px] py-[16px] md:flex" variant="outline" @click="$emit('loadMore')">
        {{ t("load_more") }}
      </ui-button>
    </div> -->
  </app-section>
</template>

<i18n>
{
  "ru": {
    "title": "Отзывы",
    "add_review": "Оставить отзыв",
    "load_more": "Загрузить еще",
    "messages": {
      "no_reviews": "Пока нет отзывов"
    }
  },
  "uz": {
    "title": "Sharhlar",
    "add_review": "Sharh qoldirish",
    "load_more": "Ko'proq yuklash",
    "messages": {
      "no_reviews": "Hozircha sharhlar yo'q"
    }
  },
  "en": {
    "title": "Reviews",
    "add_review": "Add review",
    "load_more": "Load more",
    "messages": {
      "no_reviews": "No reviews yet"
    }
  }
}
</i18n>
