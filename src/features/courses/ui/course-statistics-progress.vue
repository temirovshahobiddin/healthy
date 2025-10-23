<script lang="ts" setup>
export interface IProps {
  size?: number
  stroke?: number
  offset?: number
  label?: string
  progress: string
}

const props = withDefaults(defineProps<IProps>(), { size: 56, stroke: 6, offset: 10 })

const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1024)

const responsiveSize = computed(() => {
  if (windowWidth.value < 768) {
    return Math.min(props.size, 40)
  }
  return props.size
})

const responsiveStroke = computed(() => {
  if (windowWidth.value < 768) {
    return Math.min(props.stroke, 4)
  }
  return props.stroke
})

const circumference = computed(() => responsiveSize.value * 2 * Math.PI)
const svgSize = computed(() => responsiveSize.value * 2 + props.offset)
const coordinate = computed(() => responsiveSize.value + props.offset / 2)
const circleRotate = computed(() => `rotate(-90, ${coordinate.value}, ${coordinate.value})`)
const dashoffset = computed(() => circumference.value - (+props.progress / 100) * circumference.value)

onMounted(() => {
  const handleResize = () => {
    windowWidth.value = window.innerWidth
  }
  window.addEventListener('resize', handleResize)
  onUnmounted(() => window.removeEventListener('resize', handleResize))
})
</script>

<template>
  <div class="relative grid select-none place-items-center overflow-hidden rounded-full bg-transparent">
    <svg :height="svgSize" :width="svgSize">
      <circle v-if="+progress" class="text-[#FFFFFF33] !text-opacity-30" fill="transparent" stroke="currentColor"
        :cx="coordinate" :cy="coordinate" :r="responsiveSize" :stroke-width="responsiveStroke - 2" />
      <circle v-if="+progress" class="circle text-white" fill="transparent" stroke="currentColor" stroke-linecap="round"
        :cx="coordinate" :cy="coordinate" :r="responsiveSize" :stroke-dasharray="circumference"
        :stroke-dashoffset="dashoffset" :stroke-width="responsiveStroke" :transform="circleRotate" />
    </svg>

    <div class="absolute grid place-items-center">
      <p v-if="$slots.label"
        class="text-blue-command whitespace-nowrap text-center text-xl font-bold leading-none md:text-3xl">
        <slot name="label">
          {{ label }}
        </slot>
      </p>

      <p v-else class="text-blue-command text-xl font-bold md:text-3xl">{{ progress }}%</p>
    </div>
  </div>
</template>

<style lang="css">
.circle {
  transition: stroke-dashoffset 1s ease-in-out;
}
</style>
