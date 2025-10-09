<template>
  <div class="main-container relative flex w-full grow flex-col bg-[#f0f4f1]">
    <hero-section />
    <benefits-section />
    <specialists-section />
    <requirements-section />
    <call-to-action-section />
    <join-team-modal />
  </div>
</template>

<script lang="ts" setup>
import HeroSection from "@/features/m/HeroSection.vue"
import BenefitsSection from "@/features/m/BenefitsSection.vue"
import SpecialistsSection from "@/features/m/SpecialistsSection.vue"
import RequirementsSection from "@/features/m/RequirementsSection.vue"
import CallToActionSection from "@/features/m/CallToActionSection.vue"
import { JoinTeamModal } from "~/features/modals"
</script>
