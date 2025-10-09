<script setup lang="ts">
import Location from "~/shared/assets/icons/contact-location.svg"
import ContactPhone from "~/shared/assets/icons/contact-phone.svg"
import ContactClock from "~/shared/assets/icons/contact-clock.svg"
import ContactMail from "~/shared/assets/icons/contact-mail.svg"
import ContactFb from "~/shared/assets/icons/contact-fb.svg"
import ContactTg from "~/shared/assets/icons/contact-tg.svg"
import ContactInsta from "~/shared/assets/icons/contact-insta.svg"
import ContactShare from "~/shared/assets/icons/contact-share.svg"
import { useModal } from "~/shared/composables/use-modal"

const modal = useModal()

const { orderModalOpen } = useModal()

const openModal = () => {
  modal.show("share-modal")
}
</script>

<template>
  <div
    class="mx-auto flex max-w-screen-2xl gap-[clamp(0.625rem,0.481rem+0.64vw,1.25rem)] px-4 pb-[clamp(5rem,4.423rem+2.56vw,7.5rem)] pt-[clamp(1.875rem,1.154rem+3.21vw,5rem)] max-[1301px]:flex-col-reverse"
  >
    <div class="flex-1">
      <ul class="grid grid-cols-2 border-y border-[#E0E5E3] max-[501px]:grid-cols-1 max-[501px]:border-y-0">
        <li
          class="flex flex-col gap-[clamp(1.25rem,1.106rem+0.64vw,1.875rem)] border-b border-r border-[#E0E5E3] py-[clamp(1.25rem,1.106rem+0.64vw,1.875rem)] max-[501px]:flex-row max-[501px]:border-r-0"
        >
          <div
            class="h-[clamp(1.875rem,1.659rem+0.96vw,2.813rem)] w-[clamp(1.875rem,1.659rem+0.96vw,2.813rem)] shrink-0"
          >
            <svg
              class="h-full w-full"
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.5 3.125C26.644 3.125 30.6186 4.77092 33.5488 7.70117C36.4791 10.6314 38.125 14.606 38.125 18.75C38.125 24.8983 33.5556 31.6528 23.832 39.1475L22.875 39.875C22.7668 39.9561 22.6352 40 22.5 40C22.3985 40 22.299 39.9754 22.21 39.9287L22.125 39.875C11.7439 32.0892 6.875 25.0966 6.875 18.75C6.875 14.606 8.52092 10.6314 11.4512 7.70117C14.3814 4.77092 18.356 3.125 22.5 3.125ZM22.5 11.875C20.6766 11.875 18.928 12.5994 17.6387 13.8887C16.3494 15.178 15.625 16.9266 15.625 18.75C15.625 20.5734 16.3494 22.322 17.6387 23.6113C18.928 24.9006 20.6766 25.625 22.5 25.625C24.3234 25.625 26.072 24.9006 27.3613 23.6113C28.6506 22.322 29.375 20.5734 29.375 18.75C29.375 16.9266 28.6506 15.178 27.3613 13.8887C26.072 12.5994 24.3234 11.875 22.5 11.875Z"
                stroke="#63845C"
                stroke-width="2.5"
              />
            </svg>
          </div>

          <div>
            <span
              class="mb-[clamp(0.313rem,0.269rem+0.19vw,0.5rem)] inline-block text-[clamp(0.875rem,0.832rem+0.19vw,1.063rem)] font-medium text-[#848484]"
            >
              Адрес офиса
            </span>

            <p class="text-[clamp(1rem,0.885rem+0.51vw,1.5rem)] font-semibold leading-[1.2] text-black/100">
              г. Ташкент, улица Навнихол,3-й проезд, д.7, оф.126
            </p>
          </div>
        </li>

        <li
          class="flex flex-col gap-[clamp(1.25rem,1.106rem+0.64vw,1.875rem)] border-b py-[clamp(1.25rem,1.106rem+0.64vw,1.875rem)] pl-[clamp(1.25rem,1.106rem+0.64vw,1.875rem)] max-[501px]:flex-row max-[501px]:pl-0"
        >
          <div
            class="h-[clamp(1.875rem,1.659rem+0.96vw,2.813rem)] w-[clamp(1.875rem,1.659rem+0.96vw,2.813rem)] shrink-0"
          >
            <svg
              class="h-full w-full"
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.668 29.0315L30.3374 26.361C30.6969 26.0058 31.1518 25.7626 31.6468 25.6611C32.1418 25.5595 32.6557 25.6038 33.126 25.7888L36.3793 27.0882C36.8545 27.2812 37.2621 27.6106 37.5505 28.035C37.8389 28.4593 37.9953 28.9595 38 29.4726V35.4335C37.9972 35.7825 37.9239 36.1274 37.7844 36.4473C37.6449 36.7673 37.4421 37.0557 37.1882 37.2951C36.9344 37.5346 36.6347 37.7202 36.3073 37.8408C35.9798 37.9614 35.6314 38.0144 35.2829 37.9967C12.4858 36.578 7.88581 17.2647 7.01587 9.8732C6.97549 9.51022 7.01238 9.14281 7.12413 8.79512C7.23588 8.44744 7.41995 8.12736 7.66423 7.85596C7.90851 7.58455 8.20747 7.36796 8.54143 7.22044C8.87539 7.07292 9.23679 6.99781 9.60185 7.00005H15.3578C15.8714 7.00157 16.3728 7.15678 16.7976 7.44572C17.2223 7.73466 17.5509 8.14411 17.7411 8.62141L19.0401 11.8761C19.2311 12.3447 19.2798 12.8592 19.1802 13.3553C19.0806 13.8515 18.837 14.3073 18.48 14.6658L15.8106 17.3362C15.8106 17.3362 17.3479 27.7439 27.668 29.0315Z"
                stroke="#63845C"
                stroke-width="2.5"
              />
            </svg>
          </div>

          <div>
            <span
              class="mb-[clamp(0.313rem,0.269rem+0.19vw,0.5rem)] inline-block text-[clamp(0.875rem,0.832rem+0.19vw,1.063rem)] font-medium text-[#848484]"
            >
              Телефон для записи
            </span>

            <p class="text-[clamp(1rem,0.885rem+0.51vw,1.5rem)] font-semibold leading-[1.2] text-black/100">
              +998 91 137 55 16
            </p>

            <span
              class="mt-0.5 inline-block text-[clamp(0.875rem,0.832rem+0.19vw,1.063rem)] font-medium text-[#848484]"
            >
              Прием звонков 9:00—18:00, пн-сб
            </span>
          </div>
        </li>

        <li
          class="flex flex-col gap-[clamp(1.25rem,1.106rem+0.64vw,1.875rem)] border-r py-[clamp(1.25rem,1.106rem+0.64vw,1.875rem)] max-[501px]:flex-row max-[501px]:border-b max-[501px]:border-r-0"
        >
          <div
            class="h-[clamp(1.875rem,1.659rem+0.96vw,2.813rem)] w-[clamp(1.875rem,1.659rem+0.96vw,2.813rem)] shrink-0"
          >
            <svg
              class="h-full w-full"
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.5 38.4375C31.302 38.4375 38.4375 31.302 38.4375 22.5C38.4375 13.698 31.302 6.5625 22.5 6.5625C13.698 6.5625 6.5625 13.698 6.5625 22.5C6.5625 31.302 13.698 38.4375 22.5 38.4375Z"
                stroke="#63845C"
                stroke-width="2.5"
              />
              <path
                d="M22.5 13.125V22.5L27.75 27.75"
                stroke="#63845C"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div>
            <span
              class="mb-[clamp(0.313rem,0.269rem+0.19vw,0.5rem)] inline-block text-[clamp(0.875rem,0.832rem+0.19vw,1.063rem)] font-medium text-[#848484]"
            >
              График работы
            </span>

            <p class="text-[clamp(1rem,0.885rem+0.51vw,1.5rem)] font-semibold leading-[1.2] text-black/100">
              пн-пт 9:00–18:00
            </p>
          </div>
        </li>

        <li
          class="flex flex-col gap-[clamp(1.25rem,1.106rem+0.64vw,1.875rem)] py-[clamp(1.25rem,1.106rem+0.64vw,1.875rem)] pl-[clamp(1.25rem,1.106rem+0.64vw,1.875rem)] max-[501px]:flex-row max-[501px]:pl-0"
        >
          <div
            class="h-[clamp(1.875rem,1.659rem+0.96vw,2.813rem)] w-[clamp(1.875rem,1.659rem+0.96vw,2.813rem)] shrink-0"
          >
            <svg
              class="h-full w-full"
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40.7812 12.6562V32.3438C40.7812 33.0897 40.4849 33.805 39.9575 34.3325C39.43 34.8599 38.7147 35.1562 37.9688 35.1562H7.03125C6.28533 35.1562 5.56996 34.8599 5.04251 34.3325C4.51507 33.805 4.21875 33.0897 4.21875 32.3438V12.6562M40.7812 12.6562C40.7812 11.9103 40.4849 11.195 39.9575 10.6675C39.43 10.1401 38.7147 9.84375 37.9688 9.84375H7.03125C6.28533 9.84375 5.56996 10.1401 5.04251 10.6675C4.51507 11.195 4.21875 11.9103 4.21875 12.6562M40.7812 12.6562L24.1003 24.2044C23.6301 24.5297 23.0718 24.7041 22.5 24.7041C21.9282 24.7041 21.3699 24.5297 20.8997 24.2044L4.21875 12.6562"
                stroke="#63845C"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div>
            <span
              class="mb-[clamp(0.313rem,0.269rem+0.19vw,0.5rem)] inline-block text-[clamp(0.875rem,0.832rem+0.19vw,1.063rem)] font-medium text-[#848484]"
            >
              Электронная почта
            </span>

            <p class="text-[clamp(1rem,0.885rem+0.51vw,1.5rem)] font-semibold leading-[1.2] text-black/100">
              name@domain.com
            </p>
          </div>
        </li>
      </ul>

      <div class="mb-10 border-b py-[clamp(1.25rem,1.106rem+0.64vw,1.875rem)]">
        <span
          class="mb-[clamp(0.625rem,0.481rem+0.64vw,1.25rem)] inline-block text-[clamp(0.875rem,0.832rem+0.19vw,1.063rem)] font-medium text-[#848484]"
        >
          Социальные сети
        </span>

        <ul class="flex gap-4">
          <li>
            <a href="$" target="_blank">
              <ContactTg />
            </a>
          </li>

          <li>
            <a href="$" target="_blank">
              <ContactFb />
            </a>
          </li>

          <li>
            <a href="$" target="_blank">
              <ContactInsta />
            </a>
          </li>
        </ul>
      </div>

      <div class="flex gap-[clamp(0.625rem,0.481rem+0.64vw,1.25rem)] max-[501px]:flex-col">
        <UiButton class="max-w-[223px] flex-1 max-[501px]:max-w-[unset]" @click="orderModalOpen = true">
          Записаться
        </UiButton>

        <UiButton
          class="max-w-[223px] flex-1 !bg-[#63845C33]/20 !text-green-500 max-[501px]:max-w-[unset]"
          @click="openModal"
        >
          Поделиться
        </UiButton>
      </div>
    </div>

    <div
      class="flex-1 rounded-[clamp(0.625rem,0.481rem+0.64vw,1.25rem)] bg-white p-[clamp(0.625rem,0.481rem+0.64vw,1.25rem)]"
    >
      <iframe
        class="h-full w-full max-[1301px]:h-[228px]"
        src="https://yandex.com/map-widget/v1/?um=constructor%3A01b0b64451d0a36e5eca78f52587287c4afa59b9034128b648d2288c367ecb6d&amp;source=constructor"
        width="670"
        height="614"
        frameborder="0"
      />
    </div>
  </div>

  <UiModal
    id="share-modal"
    label="Поделиться контактами"
    description="Выберите удобный способ: отправьте ссылку через соц.сети или скопируйте вручную"
  >
    <ul class="flex gap-4 px-[25px] pb-[25px] max-[640px]:gap-2.5 max-[640px]:px-4 max-[640px]:pb-4">
      <li>
        <a class="flex h-10 w-10 items-center justify-center rounded-full bg-[#63845C]" href="$" target="_blank">
          <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.7138 14.4999C4.7138 12.4337 6.39339 10.7541 8.45964 10.7541H13.293V8.45825H8.45964C6.85729 8.45825 5.32056 9.09478 4.18753 10.2278C3.0545 11.3608 2.41797 12.8976 2.41797 14.4999C2.41797 16.1023 3.0545 17.639 4.18753 18.772C5.32056 19.9051 6.85729 20.5416 8.45964 20.5416H13.293V18.2458H8.45964C6.39339 18.2458 4.7138 16.5662 4.7138 14.4999ZM9.66797 15.7083H19.3346V13.2916H9.66797V15.7083ZM20.543 8.45825H15.7096V10.7541H20.543C22.6092 10.7541 24.2888 12.4337 24.2888 14.4999C24.2888 16.5662 22.6092 18.2458 20.543 18.2458H15.7096V20.5416H20.543C22.1453 20.5416 23.682 19.9051 24.8151 18.772C25.9481 17.639 26.5846 16.1023 26.5846 14.4999C26.5846 12.8976 25.9481 11.3608 24.8151 10.2278C23.682 9.09478 22.1453 8.45825 20.543 8.45825Z"
              fill="white"
            />
          </svg>
        </a>
      </li>

      <li>
        <a href="$" target="_blank">
          <ContactTg />
        </a>
      </li>

      <li>
        <a href="$" target="_blank">
          <ContactFb />
        </a>
      </li>

      <li>
        <a href="$" target="_blank">
          <ContactInsta />
        </a>
      </li>
    </ul>
  </UiModal>
</template>

<style lang="css">
.ui-modal-backdrop {
  @apply place-items-center;
}

.ui-modal-sm {
  @apply !my-auto w-[calc(100%-32px)] !max-w-[416px] max-[640px]:rounded-[15px];
}

.ui-modal-header {
  @apply flex-nowrap p-[25px] max-[640px]:p-4;
}
</style>
