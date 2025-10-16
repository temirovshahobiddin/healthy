<script lang="ts" setup>
interface Option {
  id: number | string,
  name: string
}

interface Props {
  options: Option[]
  modelValue?: number | string
  placeholder?: string
  randomSuggestionsCount?: number
}

interface Emits {
  (e: "update:modelValue", value: number | string): void
}

const { t } = useI18n()

const props = withDefaults(defineProps<Props>(), {
  placeholder: "Выберите опцию...",
  randomSuggestionsCount: 4
})

const emit = defineEmits<Emits>()

const searchTerm = ref("")
const isDropdownOpen = ref(false)

// Watch for external model value changes
watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue) {
      const selectedOption = props.options.find((opt) => opt.id === newValue)
      if (selectedOption) {
        searchTerm.value = selectedOption.name
      }
    }
  },
  { immediate: true }
)

// Computed properties for filtering and random suggestions
const filteredOptions = computed(() => {
  if (!searchTerm.value) return props.options
  return props.options.filter((option) => option.name.toLowerCase().includes(searchTerm.value.toLowerCase()))
})

const randomSuggestions = computed(() => {
  const shuffled = [...props.options].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, props.randomSuggestionsCount)
})

// Methods for select functionality
const selectOption = (option: Option) => {
  searchTerm.value = option.name
  emit("update:modelValue", option.id)
  isDropdownOpen.value = false
}

const clearSelection = () => {
  searchTerm.value = ""
  emit("update:modelValue", "")
}

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const handleInputClick = () => {
  isDropdownOpen.value = true
}

const handleInputChange = () => {
  emit("update:modelValue", searchTerm.value)
}

// Close dropdown when clicking outside
onMounted(() => {
  const handleClickOutside = (e: Event) => {
    const target = e.target as Element
    if (!target.closest(".custom-select-component")) {
      isDropdownOpen.value = false
    }
  }

  document.addEventListener("click", handleClickOutside)

  onUnmounted(() => {
    document.removeEventListener("click", handleClickOutside)
  })
})
</script>

<template>
  <div class="custom-select-component relative w-full">
    <!-- Input Field -->
    <div class="relative">
      <input v-model="searchTerm"
        class="w-full border-b py-3 text-base transition-colors focus:border-green-500 focus:outline-none sm:text-lg"
        type="text" :placeholder="placeholder" @click="handleInputClick" @focus="isDropdownOpen = true"
        @input="handleInputChange" />

      <!-- Clear Icon -->
      <button v-if="searchTerm"
        class="absolute right-2 top-1/2 -translate-y-1/2 transform text-gray-400 transition-colors hover:text-gray-600"
        type="button" @click="clearSelection">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path
            d="M12.854 4.854a.5.5 0 0 0-.708-.708L8 8.293 3.854 4.146a.5.5 0 1 0-.708.708L7.293 9l-4.147 4.146a.5.5 0 0 0 .708.708L8 9.707l4.146 4.147a.5.5 0 0 0 .708-.708L8.707 9l4.147-4.146z" />
        </svg>
      </button>

      <!-- Dropdown Arrow -->
      <button v-else
        class="absolute right-2 top-1/2 -translate-y-1/2 transform text-gray-400 transition-transform duration-200"
        type="button" :class="{ 'rotate-180': isDropdownOpen }" @click="toggleDropdown">
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1.5L6 6.5L11 1.5" stroke="#323232" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </button>

      <!-- Dropdown -->
      <Transition name="dropdown">
        <div v-if="isDropdownOpen"
          class="absolute top-full z-50 mt-2 w-full overflow-hidden rounded-xl border border-gray-200 bg-white py-2 pl-2 shadow-md">
          <!-- Filtered Options -->
          <div class="max-h-40 overflow-y-auto pr-2">
            <div v-if="filteredOptions.length === 0" class="px-4 py-3 text-sm text-gray-500">{{
              t('order_modal.option_not_found') }}</div>
            <button v-for="option in filteredOptions"
              class="w-full rounded-lg px-2.5 py-2 text-left text-sm transition-colors hover:bg-green-500 hover:text-white sm:text-base"
              type="button" :key="option.id" :class="{ 'bg-green-500 text-white': modelValue === option.id }"
              @click="selectOption(option)">
              {{ option.name }}
            </button>
          </div>
        </div>
      </Transition>
    </div>

    <!-- Random Suggestions (below input) -->
    <div v-if="!searchTerm && randomSuggestions.length > 0" class="mt-5">
      <div class="flex flex-wrap gap-2">
        <button v-for="suggestion in randomSuggestions"
          class="rounded-full border px-3 py-2 text-sm transition-colors hover:bg-green-500 hover:text-white sm:text-base"
          type="button" :key="suggestion.id" @click="selectOption(suggestion)">
          {{ suggestion.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Focus styles */
.custom-select-component input:focus {
  border-color: #22c55e;
}

/* Dropdown transition */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.dropdown-enter-to,
.dropdown-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
