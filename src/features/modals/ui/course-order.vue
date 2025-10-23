<script lang="ts" setup>
const { $http } = useNuxtApp()
const { courseOrderModalOpen, courseOrderData } = useModal()
const { t } = useI18n()

const loading = ref<boolean>(false)
const formSended = ref<boolean>(false)
const formState = reactive({
  service_id: "",
  specialist_id: "",
  full_name: "",
  phone_number: "",
  meet_date: "",
  comment: "",
  agreed: false
})

watch(courseOrderModalOpen, (isOpen) => {
  if (isOpen) {
    formState.service_id = courseOrderData.value.serviceId?.toString() || ""
    formState.specialist_id = courseOrderData.value.specialistId?.toString() || ""
  }
})

const closeModal = () => {
  courseOrderModalOpen.value = false
}

const handleBackdropClick = (event: Event) => {
  if (event.target === event.currentTarget) {
    closeModal()
  }
}

const submitForm = async () => {
  loading.value = true
  try {
    let myobj = {
      name: formState.full_name,
      phone_number: formState.phone_number,
      date: formState.meet_date,
      comment: formState.comment,
      course_id: formState.service_id,
    }
    const res = await $http.$post("/join-course", myobj)
    if ((res as any).success) {
      formSended.value = true
      formState.full_name = ""
      formState.phone_number = ""
      formState.meet_date = ""
      formState.comment = ""
    }
  } catch (err) {
    console.error(err)
  } finally {
    formSended.value = true
    loading.value = false
  }
}
</script>

<template>
  <Transition name="modal">
    <div
      v-if="courseOrderModalOpen"
      class="fixed left-0 top-0 z-[1002] flex h-screen w-full items-end justify-center bg-black/20 sm:items-center"
      @click="handleBackdropClick"
    >
      <div class="modal-content relative w-full rounded-t-[20px] bg-white px-4 pt-8 sm:w-fit sm:rounded-[20px] sm:p-6">
        <div class="absolute left-0 top-0 flex h-6 w-full items-center justify-center sm:hidden">
          <div class="h-[3px] w-[60px] rounded-full bg-[#E3E3E3]" @click="closeModal"></div>
        </div>
        <form
          v-if="!formSended"
          class="flex w-full max-w-[calc(100vw-32px)] flex-col gap-5 md:w-[710px]"
          @submit.prevent="submitForm"
        >
          <div class="text-2xl font-semibold sm:text-[30px]">{{ t("order_modal.personal_data") }}</div>
          <div class="grid w-full gap-5">
            <input
              v-model="formState.full_name"
              class="w-full border-b border-gray-300 bg-white py-3 text-base placeholder-gray-400 focus:border-green-500 focus:outline-none"
              type="text"
              required
              :placeholder="t('order_modal.full_name')"
            />

            <div class="grid w-full gap-5 sm:grid-cols-2">
              <ui-mask-input
                v-model="formState.phone_number"
                class="w-full border-b border-gray-300 bg-white py-3 text-base placeholder-gray-400 focus:border-green-500 focus:outline-none"
                mask="+998 (##) ###-##-##"
                type="text"
                required
                :placeholder="t('order_modal.phone_number')"
                :default-input="true"
              />

              <div class="relative w-full">
                <input
                  v-model="formState.meet_date"
                  class="w-full border-b border-gray-300 bg-white py-3 pr-10 text-base placeholder-gray-400 focus:border-green-500 focus:outline-none"
                  type="date"
                  required
                  :placeholder="t('order_modal.visit_date')"
                />
                <div class="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 transform">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2 12C2 8.229 2 6.343 3.172 5.172C4.344 4.001 6.229 4 10 4H14C17.771 4 19.657 4 20.828 5.172C21.999 6.344 22 8.229 22 12V14C22 17.771 22 19.657 20.828 20.828C19.656 21.999 17.771 22 14 22H10C6.229 22 4.343 22 3.172 20.828C2.001 19.656 2 17.771 2 14V12Z"
                      stroke="#63845C"
                      stroke-width="1.5"
                    />
                    <path d="M7 4V2.5M17 4V2.5M2.5 9H21.5" stroke="#63845C" stroke-width="1.5" stroke-linecap="round" />
                    <path
                      d="M18 17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18C16.7348 18 16.4804 17.8946 16.2929 17.7071C16.1054 17.5196 16 17.2652 16 17C16 16.7348 16.1054 16.4804 16.2929 16.2929C16.4804 16.1054 16.7348 16 17 16C17.2652 16 17.5196 16.1054 17.7071 16.2929C17.8946 16.4804 18 16.7348 18 17ZM18 13C18 13.2652 17.8946 13.5196 17.7071 13.7071C17.5196 13.8946 17.2652 14 17 14C16.7348 14 16.4804 13.8946 16.2929 13.7071C16.1054 13.5196 16 13.2652 16 13C16 12.7348 16.1054 12.4804 16.2929 12.2929C16.4804 12.1054 16.7348 12 17 12C17.2652 12 17.5196 12.1054 17.7071 12.2929C17.8946 12.4804 18 12.7348 18 13ZM13 17C13 17.2652 12.8946 17.5196 12.7071 17.7071C12.5196 17.8946 12.2652 18 12 18C11.7348 18 11.4804 17.8946 11.2929 17.7071C11.1054 17.5196 11 17.2652 11 17C11 16.7348 11.1054 16.4804 11.2929 16.2929C11.4804 16.1054 11.7348 16 12 16C12.2652 16 12.5196 16.1054 12.7071 16.2929C12.8946 16.4804 13 16.7348 13 17ZM13 13C13 13.2652 12.8946 13.5196 12.7071 13.7071C12.5196 13.8946 12.2652 14 12 14C11.7348 14 11.4804 13.8946 11.2929 13.7071C11.1054 13.5196 11 13.2652 11 13C11 12.7348 11.1054 12.4804 11.2929 12.2929C11.4804 12.1054 11.7348 12 12 12C12.2652 12 12.5196 12.1054 12.7071 12.2929C12.8946 12.4804 13 12.7348 13 13ZM8 17C8 17.2652 7.89464 17.5196 7.70711 17.7071C7.51957 17.8946 7.26522 18 7 18C6.73478 18 6.48043 17.8946 6.29289 17.7071C6.10536 17.5196 6 17.2652 6 17C6 16.7348 6.10536 16.4804 6.29289 16.2929C6.48043 16.1054 6.73478 16 7 16C7.26522 16 7.51957 16.1054 7.70711 16.2929C7.89464 16.4804 8 16.7348 8 17ZM8 13C8 13.2652 7.89464 13.5196 7.70711 13.7071C7.51957 13.8946 7.26522 14 7 14C6.73478 14 6.48043 13.8946 6.29289 13.7071C6.10536 13.5196 6 13.2652 6 13C6 12.7348 6.10536 12.4804 6.29289 12.2929C6.48043 12.1054 6.73478 12 7 12C7.26522 12 7.51957 12.1054 7.70711 12.2929C7.89464 12.4804 8 12.7348 8 13Z"
                      fill="#63845C"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <textarea
              v-model="formState.comment"
              class="w-full border-b border-gray-300 bg-white py-3 text-base placeholder-gray-400 focus:border-green-500 focus:outline-none"
              rows="1"
              :placeholder="t('order_modal.comment')"
            />
          </div>

          <div
            class="-ml-4 mt-10 flex w-[calc(100%+32px)] flex-col items-start justify-start gap-5 bg-[#F8F8F8] p-4 sm:ml-0 sm:mt-5 sm:w-full sm:bg-transparent sm:p-0"
          >
            <div class="flex items-start gap-3">
              <ui-checkbox v-model="formState.agreed" class="!items-start" :input-props="{ required: true }">
                <template #label>
                  <p class="-mt-1">
                    {{ t("order_modal.privacy_policy_agreement") }}
                    <a class="text-green-500 underline" href="#">{{ t("order_modal.privacy_policy") }}</a>
                  </p>
                </template>
              </ui-checkbox>
            </div>

            <div class="flex w-full flex-col gap-3 sm:flex-row sm:gap-4">
              <ui-button class="w-full sm:w-[210px]" type="submit" :loading>
                {{ t("order_modal.submit_request") }}
              </ui-button>
            </div>
          </div>
        </form>

        <div v-else class="flex w-full flex-col items-center gap-2.5 text-center sm:max-w-[465px]">
          <i class="size-[70px] sm:size-[84px]">
            <svg class="h-full w-full" width="85" height="84" viewBox="0 0 85 84" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_120_12496)">
                <path
                  d="M42.5 0C65.6966 0 84.5 18.8034 84.5 42C84.5 65.1966 65.6966 84 42.5 84C19.3034 84 0.5 65.1966 0.5 42C0.5 18.8034 19.3034 0 42.5 0ZM60.6314 28.5936C60.1741 28.1365 59.5643 27.8642 58.9186 27.8289C58.273 27.7936 57.6371 27.9979 57.1328 28.4025L56.9186 28.5936L35.675 49.8372L28.0814 42.2436C27.6067 41.7687 26.9681 41.4938 26.2969 41.4754C25.6258 41.457 24.973 41.6965 24.473 42.1446C23.973 42.5927 23.6637 43.2154 23.6087 43.8845C23.5538 44.5537 23.7573 45.2185 24.1775 45.7422L24.3686 45.9564L33.8186 55.4064C34.2759 55.8635 34.8857 56.1358 35.5313 56.1711C36.177 56.2064 36.8129 56.0021 37.3172 55.5975L37.5314 55.4064L60.6314 32.3064C60.8752 32.0626 61.0686 31.7732 61.2006 31.4547C61.3326 31.1362 61.4005 30.7948 61.4005 30.45C61.4005 30.1052 61.3326 29.7638 61.2006 29.4453C61.0686 29.1268 60.8752 28.8374 60.6314 28.5936Z"
                  fill="#63845C"
                />
              </g>
              <defs>
                <clipPath id="clip0_120_12496">
                  <rect width="84" height="84" fill="white" transform="translate(0.5)" />
                </clipPath>
              </defs>
            </svg>
          </i>

          <div class="text-2xl font-semibold text-green-500 sm:text-[30px]">{{ t("order_modal.request_sent") }}</div>
          <p class="text-sm text-black/80 sm:text-base lg:text-lg">
            {{ t("order_modal.request_success_message") }}
          </p>

          <div class="mt-5 flex w-[calc(100%+32px)] justify-center bg-[#F8F8F8] p-4 sm:w-full sm:flex-row sm:bg-transparent sm:p-0">
            <ui-button
              class="w-full sm:w-[230px]"
              type="submit"
              @click="
                () => {
                  formSended = false
                  courseOrderModalOpen = false
                }
              "
            >
              {{ t("order_modal.ok") }}
            </ui-button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-to,
.modal-leave-from {
  opacity: 1;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: transform 0.3s ease;
}

.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
  transform: scale(0.7);
}

@media screen and (max-width: 640px) {
  .modal-enter-from .modal-content,
  .modal-leave-to .modal-content {
    transform: translateY(100%) scale(1);
  }
}

.modal-enter-to .modal-content,
.modal-leave-from .modal-content {
  transform: scale(1) translateY(0);
}

input[type="date"] {
  position: relative;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  opacity: 0;
  position: absolute;
  right: 0;
  width: 20px;
  height: 20px;
  cursor: pointer;
}

input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-clear-button {
  display: none;
}

input[type="date"] {
  appearance: textfield;
  -moz-appearance: textfield;
}
</style>