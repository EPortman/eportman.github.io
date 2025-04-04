<template>
  <div :class="cardClasses">
    <h3 :class="cardTitleClasses">Education</h3>
    <div :class="contentClasses">
      <div>
        <p :class="institutionClasses">Camosun College</p>
        <p :class="italicClasses">Diploma in Info & Computer Systems — 2022-2025</p>
      </div>
      <div>
        <p :class="institutionClasses">University of British Columbia</p>
        <p :class="italicClasses">Bachelor of Kinesiology — 2014-2018</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useThemeStore } from '~/stores/theme'

const themeStore = useThemeStore()

// Base classes for the card container
const baseCard = 'backdrop-blur-md rounded-lg p-6 shadow-md space-y-4 transition-all'

// Dynamically apply container styling based on theme
const cardClasses = computed(() => {
  return themeStore.theme === 'dark'
    ? `${baseCard} bg-black/40`
    : `${baseCard} bg-white/95 shadow-2xl ring-1 ring-gray-200`
})

// Dynamic heading styling
const cardTitleClasses = computed(() => {
  return themeStore.theme === 'dark' ? 'text-xl font-semibold text-white' : 'text-xl font-semibold text-gray-900'
})

// Dynamic content styling (for the inner text container)
const contentClasses = computed(() => {
  return themeStore.theme === 'dark' ? 'text-gray-300 space-y-4 text-sm' : 'text-gray-700 space-y-4 text-sm'
})

// Dynamic styling for institution names
const institutionClasses = computed(() => {
  return themeStore.theme === 'dark' ? 'text-white font-medium' : 'text-gray-900 font-medium'
})

// Dynamic styling for italic details (education details)
const italicClasses = computed(() => {
  return themeStore.theme === 'dark' ? 'italic' : 'italic text-gray-700'
})
</script>

<style scoped>
/* No extra CSS is necessary if you're using Tailwind utilities.
   Feel free to add custom styles if needed. */
</style>
