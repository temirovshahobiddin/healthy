<template>
  <transition name="slide-right">
    <div v-if="isMenuOpen" class="mobile-menu">
      <ul class="mobile-menu__content">
        <nuxt-link
          v-for="(item, i) in menuItems"
          :key="i"
          class="mobile-menu__item"
          :to="item.to"
          @click.native="closeMenu"
        >
          {{ item.label }}i
        </nuxt-link>
      </ul>

      <div class="flex w-full flex-col gap-[10px]">
        <ui-button @click="orderModalOpen = true">Записаться</ui-button>
        <ui-button class="!bg-[#63845C33] !text-green-500" @click="goToPsychologists">
          Специалистам
        </ui-button>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"
import { ref } from "vue"

const router = useRouter()
const { orderModalOpen } = useModal()

const props = defineProps<{
  isMenuOpen: boolean
}>()

const emit = defineEmits(["update:isMenuOpen"])

const menuItems = [
  { label: "Специалисты", to: "/specialisty" },
  { label: "Курсы", to: "/courses" },
  { label: "О проекте", to: "/about" },
  { label: "Контакты", to: "/contacts" },
  { label: "Блог", to: "/blog" },
]

function closeMenu() {
  emit("update:isMenuOpen", false)
}

function goToPsychologists() {
  closeMenu()
  router.push("/for-psychologists")
}
</script>

<style scoped>
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s ease;
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
}

.slide-right-enter-to,
.slide-right-leave-from {
  transform: translateX(0);
}

.mobile-menu {
  position: absolute;
  top: 100%;
  right: 0;
  width: 100vw;
  height: calc(100vh - 60px);
  background: white;
  z-index: 1000;
  padding: 30px 16px;
  overflow-y: auto;
  @apply flex flex-col items-start justify-between;
}

.mobile-menu__content {
  display: grid;
  width: 100%;
  gap: 20px;
}

.mobile-menu__item {
  @apply pb-4 text-mobile-body-17 font-normal text-[#323232] border-b border-solid border-b-[#e0e5e3];
}
</style>
