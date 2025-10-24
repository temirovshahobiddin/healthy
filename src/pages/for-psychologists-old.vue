<script setup lang="ts">
import { breakpointsMasterCss } from "@vueuse/core/index"
import ForPsychologistD from "~/pages/for-psychologist-d.vue"
import ForPsychologistM from "~/pages/for-psychologists.vue"

const breakpoints = useBreakpoints(breakpointsMasterCss)
const isMobile = breakpoints.smallerOrEqual("sm")
</script>

<template>
  <for-psychologist-m></for-psychologist-m>
</template>

<style scoped></style>
