<template>
  <div class="main-container mx-auto w-full overflow-hidden bg-[#f0f4f1] py-[20px] md:py-[60px]">
    <app-section>
      <div>
        <div class="flex flex-col items-start gap-[15px] md:gap-[40px] md:flex-row">
          <div
            class="flex flex-col flex-nowrap items-start justify-center gap-[20px] rounded-[20px] bg-[#fff] px-[10px] py-[15px] md:w-[447px] md:p-[15px]">
            <div class="relative shrink-0 self-stretch rounded-[10px] h-[485px] overflow-hidden">
              <img class="h-full w-full object-cover" alt="" :src="specialist.photo" />
            </div>
            <div class="!hidden w-full gap-[10px] md:!flex">
              <ui-button class="w-full" @click="orderModalOpen = true">Записаться</ui-button>
              <ui-button variant="outline" class="px-[2px]" @click="modal.show('phone_modal')">
                <icon size="32" name="lets-icons:phone-fill" />
              </ui-button>
            </div>
          </div>
          <div class="md:w-[953px]">
            <div
              class="md:hidden flex flex-col flex-nowrap items-start justify-center gap-[20px] rounded-[20px] bg-[#fff] px-[10px] py-[15px]  mb-[15px]">
              <div class="grid gap-[25px] md:!hidden">
                <p class="text-mobile-headline-2 font-bold">{{ specialist.full_name }}</p>
                <div class="grid gap-[5px] mt-[4px]">
                  <div v-for="specialization in specialist.specializations"
                    class="w-fit rounded-[100px] border border-solid border-[#63845c] px-[8px] py-[4px]"
                    :key="specialization.id">
                    <span class="text-mobile-body-14 font-bold text-[#63845c]">
                      {{ specialization.name }}
                    </span>
                  </div>
                </div>
              </div>
              <div class="grid gap-[8px] md:!hidden">
                <div class="flex items-center gap-[8px]">
                  <icon class="text-[18px] text-green-500" name="h-icon:achieve"></icon>
                  <span class="text-mobile-body-15 font-medium text-[#323232] md:text-body-17">
                    Опыт: {{ specialist.experience }} лет
                  </span>
                </div>
                <div class="flex items-center gap-[8px]">
                  <icon class="text-[18px] text-green-500" name="h-icon:star"></icon>

                  <span class="text-mobile-body-15 font-medium text-[#323232] md:text-body-17">
                    Рейтинг: {{ specialist.rating || 0 }}
                  </span>
                </div>
                <div class="flex items-center gap-[8px]">
                  <icon class="text-[18px] text-green-500" name="h-icon:location"></icon>

                  <span class="text-mobile-body-15 font-medium text-[#323232] md:text-body-17">
                    {{ specialist.city }}
                  </span>
                </div>
                <div class="flex flex-nowrap items-center gap-[8px] self-stretch">
                  <icon class="text-[18px] text-green-500" name="h-icon:language"></icon>

                  <span class="text-left font-['Onest'] text-mobile-body-15 font-medium text-[#323232]">
                    {{specialist.lang?.map((item) => $t(`languages.${item}`)).join(", ")}}
                  </span>
                </div>
              </div>
              <div class="border-t border-solid border-t-[#E8E8E8] pt-[15px] md:!hidden">
                <span class="text-mobile-subtitle-22 font-semibold text-[#323232]">
                  от {{ Number(specialist.price).toLocaleString('ru-RU') }} сум</span>

              </div>
            </div>
            <div
              class="mb-[40px] hidden h-[402px] flex-col flex-nowrap items-start gap-[30px] rounded-[20px] bg-[#fff] md:flex md:p-[30px]">
              <div class="relative flex shrink-0 flex-col flex-nowrap items-start gap-[12px] self-stretch">
                <span
                  class="relative h-[48px] shrink-0 basis-auto self-stretch text-left font-['Onest'] text-[40px] font-semibold text-[#323232]">
                  {{ specialist.full_name }}
                </span>
                <div class="relative flex w-[574px] items-start gap-[5px]">
                  <div v-for="specialization in specialist.specializations"
                    class="relative flex w-[183px] items-center justify-center gap-[10px] rounded-[100px] border border-solid border-[#63845c] pb-[5px] pl-[10px] pr-[10px] pt-[5px]"
                    :key="specialization.id">
                    <span
                      class="relative h-[20px] shrink-0 basis-auto text-left font-['Onest'] text-[16px] font-bold text-[#63845c]">
                      {{ specialization.name }}
                    </span>
                  </div>
                </div>
              </div>
              <div class="relative flex h-[134px] w-[381px] shrink-0 flex-col flex-nowrap items-start gap-[10px]">
                <div class="relative flex w-[148px] items-center gap-[8px]">
                  <icon class="text-[18px] text-green-500" name="h-icon:achieve"></icon>

                  <span
                    class="relative h-[26px] shrink-0 basis-auto text-left font-['Onest'] text-[20px] font-medium text-[#323232]">
                    Опыт: {{ specialist.experience }} лет
                  </span>
                </div>
                <div class="relative flex w-[147px] items-center gap-[8px]">
                  <icon class="text-[18px] text-green-500" name="h-icon:star"></icon>

                  <span
                    class="relative h-[26px] shrink-0 basis-auto text-left font-['Onest'] text-[20px] font-medium text-[#323232]">
                    Рейтинг: {{ specialist.review_rating || 0 }}
                  </span>
                </div>
                <div class="relative flex  items-center gap-[8px]">
                  <icon class="text-[18px] text-green-500" name="weui:location-filled"></icon>

                  <span
                    class="relative h-[26px] shrink-0 basis-auto text-left font-['Onest'] text-[20px] font-medium text-[#323232]">
                    {{ specialist.city }}
                  </span>
                </div>
                <div class="relative flex items-center gap-[8px] self-stretch">
                  <icon class="text-[18px] text-green-500" name="h-icon:language"></icon>
                  <span
                    class="relative flex h-[26px] w-[345px] shrink-0 basis-auto items-start justify-start text-left font-['Onest'] text-[20px] font-medium text-[#323232]">
                    {{specialist.lang?.map((item) => $t(`languages.${item}`)).join(", ")}}
                  </span>
                </div>
              </div>
              <div
                class="relative flex shrink-0 flex-col flex-nowrap items-start gap-[15px] self-stretch border-t border-solid border-b-[#e7e7e7] pb-0 pt-[20px]">
                <span
                  class="relative h-[38px] shrink-0 basis-auto self-stretch text-left font-['Onest'] text-[30px] font-semibold leading-[38px] text-[#323232]">
                  от {{ Number(specialist.price).toLocaleString('ru-RU') }} сум
                </span>
              </div>
            </div>
            <div class="flex flex-col flex-nowrap items-start rounded-[20px] bg-[#fff] px-[15px] py-[20px] md:p-[30px]">
              <div class="relative flex items-center gap-[45px] self-stretch border-b border-solid border-b-[#e7e7e7]">
                <div class="relative flex items-center justify-center gap-[10px] border-b-2 border-solid pb-[10px] pt-0"
                  :class="{
                    'border-b-[#63845c] text-[#63845c]': activeTab === 'specialist',
                    'border-b-transparent text-[#323232]': activeTab !== 'specialist'
                  }" @click="changeTab('specialist')">
                  <span class="text-mobile-body-15 font-semibold md:text-body-18">Специалист</span>
                </div>
                <div class="relative flex w-[60px] items-center justify-center gap-[10px] pb-[10px] pt-0" :class="{
                  'border-b-[#63845c] text-[#63845c]': activeTab === 'services',
                  'border-b-transparent text-[#323232]': activeTab !== 'services'
                }" @click="changeTab('services')">
                  <span class="text-mobile-body-15 font-medium md:text-body-18">Услуги</span>
                </div>
                <div class="relative flex w-[41px] items-center justify-center gap-[10px] pb-[10px] pt-0" :class="{
                  'border-b-[#63845c] text-[#63845c]': activeTab === 'blog',
                  'border-b-transparent text-[#323232]': activeTab !== 'blog'
                }" @click="changeTab('blog')">
                  <span class="text-mobile-body-15 font-medium md:text-body-18">Блог</span>
                </div>
              </div>
              <template v-if="activeTab === 'specialist'">
                <specialist-detail-tab :specialist />
              </template>
              <template v-else-if="activeTab === 'services'">
                <specialist-services-tab :services :specialist_id="specialist.id"/>
              </template>
              <template v-else-if="activeTab === 'blog'">
                <div v-if="blogs.length > 0">
                  <div v-for="item in blogs" :key="item.id" @click="router.push(`/blog/${item.slug}`)"
                  class="flex w-full items-center justify-between border-b border-solid border-b-[#E8E8E8] py-[15px] md:py-[20px]">
                  <div class="flex flex-col gap-[5px]">
                    <span
                      class="font-['Onest'] text-mobile-subtitle-18 text-[#323232] md:text-subtitle-20 md:font-semibold">
                      {{ item.title }}
                    </span>
                    <span class="font-['Onest'] text-mobile-body-14 text-green-500 md:text-subtitle-16 md:font-bold">
                      {{ formatDate(item.created_at, 'DD.MM.YYYY') }}
                    </span>
                  </div>
                  <icon class="h-[26px] w-[26px]" name="h-icon:arrow"></icon>
                </div>
                <div class="mt-[30px] flex w-full justify-center md:mb-[10px]">
                  <ui-pagination v-model="blogParams.page" :total="blogsPagination.total"
                    @update:model-value="paginateBlogs" />
                </div>
              </div>
              <div v-else>
                <h1 class="text-[24px] font-bold text-[#323232] md:text-[32px] text-center">Нет записей</h1>
              </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </app-section>
    <review-grid :items="reviews" />
    <home-course-grid :items="courses" />
    <div class="fixed bottom-0 left-0 right-0 z-30 bg-white px-4 py-[20px] md:!hidden">
      <ui-button class="w-full" @click="orderModalOpen = true">Записаться</ui-button>
    </div>
    <review-create-modal :specialist="specialist" />
    <ui-modal id="phone_modal" class="phone_modal" label="Записаться">
      <div class="px-[15px] pb-[20px] md:px-[20px] flex flex-col items-start">
        <h1 class="text-[24px] font-bold text-[#323232] md:text-[32px]">
          {{ formatPhoneNumber(specialist.phone_number) }}
        </h1>
        <h3 class="text-[16px] text-gray-600 md:text-[18px]">
          Контактный номер специалиста
        </h3>
        <ui-button class="mt-[20px] w-full">Контактировать</ui-button>
      </div>
    </ui-modal>
  </div>
</template>

<script lang="ts" setup>
import AppSection from "~/widgets/layout/app-section.vue"
import { HomeCourseGrid } from "~/features/home/ui"
import CertificateSlider from "~/features/specialisty/ui/certificate-slider.vue"
import ReviewGrid from "~/widgets/specialisty/review-grid.vue"
import ReviewModal from "~/features/specialisty/ui/review-modal.vue"
import { useSpecialistApi } from "~/api/specialists/api"
import { useReviewApi } from "~/api/reviews/api"
import { useCoursesApi } from "~/api/courses/api"
import ReviewCreateModal from "~/features/review/ui/review-create-modal.vue"
import { usePostApi } from "~/api/posts/api"
import SpecialistDetailTab from "~/features/specialisty/ui/specialist-detail-tab.vue"
import SpecialistServicesTab from "~/features/specialisty/ui/specialist-services-tab.vue"
import { UiModal } from "#components"

const { orderModalOpen } = useModal()
const modal = useModal()

const formatPhoneNumber = (phone: string | undefined) => {
  if (!phone) return ''
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '')
  // Format: +998 (91) 137-55-16
  if (cleaned.length === 12 && cleaned.startsWith('998')) {
    return `+${cleaned.slice(0, 3)} (${cleaned.slice(3, 5)}) ${cleaned.slice(5, 8)}-${cleaned.slice(8, 10)}-${cleaned.slice(10, 12)}`
  }
  return phone
}

const activeTab = ref("specialist")

const { t, locale } = useI18n({
  useScope: "local"
})

const blogsPagination = ref({
  total: 0,
  page: 1,
  limit: 10
})
const formatCurrency = (amount: number) => {
  if (typeof amount !== 'number' || isNaN(amount)) return '0 so\'m';
  return new Intl.NumberFormat('uz-UZ').format(amount) + ' so\'m';
};

const blogParams = ref({
  page: 1
})

const { $http } = useNuxtApp()
const specialistApi = useSpecialistApi()
const reviewApi = useReviewApi()
const courseApi = useCoursesApi()
const blogsApi = usePostApi()
const route = useRoute()
const specialist = ref({})
const reviews = ref([])
const courses = ref([])
const blogs = ref([])
const services = ref([])

const changeTab = async (tab: string) => {
  if(tab == 'services'){
    services.value = []
    const response = await $http.$get(`specialists/${specialist.value.slug}/services`)
    if (response?.data?.length > 0) {
      console.log('services',response.data)
      services.value = response.data
    }
  }
  else if(tab == 'blog'){
    const response = await $http.$get(`posts?specialist_id=${specialist.value.id}`)
    if (response?.data?.length > 0) {
      blogs.value = response.data
    }
  }
  activeTab.value = tab
}

const paginateBlogs = () => {
  blogsApi
    .getPostList({
      ...blogParams.value,
      specialist_id: route.params.id as string
    })
    .then((response) => {
      blogs.value = response.data
      // blogsPagination.value.total = response.meta.total
    })
}

const { data, error } = await useAsyncData("specialist", async () => {
  const requests = [
    specialistApi.getSpecialistById(route.params.id as string),
    reviewApi.getReviewList({ specialist_id: route.params.id as string }),
    courseApi.getCoursesList({ specialist_id: route.params.id as string })
  ]
  return await Promise.all(requests)
})
const [_specialist, _reviews, _courses] = data.value || []
specialist.value = _specialist?.data || {}
reviews.value = _specialist?.data.reviews || []
courses.value = _courses?.data || []


</script>

<style>
.detail-accordion {
  .ui-accordion-header {
    @apply border-0 px-0 py-[10px] md:px-0 md:py-[15px];
  }

  .ui-accordion-header__icon {
    @apply h-[17px] w-[17px];
  }
}
</style>

<i18n>
{
  "ru": {
    "title": "Отзывы"
  },
  "uz": {
    "title": "Sharhlar"
  },
  "en": {
    "title": "Reviews"
  }
}
</i18n>
