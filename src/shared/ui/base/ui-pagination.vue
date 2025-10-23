<script setup lang="ts">
import { breakpointsMasterCss } from "@vueuse/core"

export interface IProps {
  total: number
  perPage?: number
  eachSide?: number
  firstPage?: number
}

const props = withDefaults(defineProps<IProps>(), {
  modelValue: 1,
  total: 0,
  perPage: 10,
  firstPage: 0
})


const model = defineModel<number>({ default: 1 })

const breakpoints = useBreakpoints(breakpointsMasterCss)
const isMobile = breakpoints.smallerOrEqual("2xs")

const defaultEachSide = computed(() => {
  if (props.eachSide) return props.eachSide
  else return isMobile.value ? 1 : 2
})

const pageCount = computed(() => Math.ceil(props.total / props.perPage))
const lastPage = computed(() => pageCount.value - 1)
const size = computed(() => props.total)
const notEnoughPages = computed(() => pageCount.value < size.value)

const start = computed(() => {
  return (model.value - 1) * props.perPage
})

const isCurrentPage = (page: number) => model.value === page

const loadPage = (page: number) => {
  if (page >= props.firstPage && page <= lastPage.value+1) model.value = page
}
</script>

<template>
  <div v-if="lastPage > firstPage" class="ui-pagination">
    <button
      class="ui-pagination-button ui-pagination-link !hidden"
      :disabled="model === firstPage+1"
      @click="loadPage(firstPage+1)"
    >
      <icon class="text-xl" name="lucide:chevrons-left" />
    </button>

    <button class="ui-pagination-button grid" :disabled="model === firstPage+1" @click="loadPage(firstPage+1)">
      <icon class="text-xl" name="lucide:chevron-left" />
    </button>

    <template v-if="notEnoughPages">
      <template v-for="(n, i) in pageCount" :key="n + i">
        <button
          class="ui-pagination-button ui-pagination-page"
          :class="{ active: isCurrentPage(n) }"
          @click="loadPage(i)"
        >
        {{ i + 1 }}
        </button>
      </template>
    </template>

    <template v-else>
      
      <template v-for="(n, i) in size" :key="n + i">
        <button class="ui-pagination-button" :class="{ active: isCurrentPage(i) }" @click="loadPage(start + i)">
          {{ start + i }}
        </button>
      </template>
    </template>

    <button class="ui-pagination-button grid" :disabled="model === lastPage+1" @click="loadPage(lastPage+1)">
      <icon class="text-xl" name="lucide:chevron-right" />
    </button>

    <button
      class="ui-pagination-button ui-pagination-link !hidden"
      :disabled="model === lastPage+1"
      @click="loadPage(lastPage+1)"
    >

      <icon class="text-xl" name="lucide:chevrons-right" />
    </button>
  </div>
</template>
