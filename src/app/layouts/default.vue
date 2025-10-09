<script lang="ts" setup>
import { AppHeader, AppContent } from "~/widgets/layout"
import { ProfileModal, ProfilePasswordModal } from "~/features/profile"
import AppFooter from "~/widgets/layout/app-footer.vue"
import ReviewModal from "~/features/review/ui/review-modal.vue"
import { SuccessModal, OrderModal } from "~/features/modals"
</script>

<template>
  <teleport to="body">
    <OrderModal />
  </teleport>

  <div>
    <app-content>
      <template #header>
        <app-header />
      </template>

      <slot />

      <template #footer>
        <app-footer />
      </template>
    </app-content>
    <review-modal />
    <success-modal />
  </div>
</template>
