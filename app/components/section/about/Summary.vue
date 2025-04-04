<template>
  <div :class="cardClasses">
    <h3 :class="cardTitleClasses">Summary</h3>
    <p :class="cardTextClasses">
      I'm a developer focused on building scalable APIs, backend services, and cloud-based systems. I enjoy turning
      complex challenges into simple, efficient solutions—often in Python or TypeScript—and thrive in environments where
      thoughtful collaboration and clean architecture matter.
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useThemeStore } from '~/stores/theme'

const themeStore = useThemeStore()

// Base card styling common to both themes
const baseCard = 'backdrop-blur-md rounded-lg p-6 shadow-md space-y-4 transition-all'

// Dynamic card classes
const cardClasses = computed(() => {
  return themeStore.theme === 'dark'
    ? `bg-black/40 ${baseCard}`
    : `bg-white/95 ${baseCard} shadow-2xl ring-1 ring-gray-200`
})

// Heading styling: adjust text color based on theme
const cardTitleClasses = computed(() => {
  return themeStore.theme === 'dark' ? 'text-xl font-semibold text-white' : 'text-xl font-semibold text-gray-900'
})

// Body text styling: adjust text color based on theme
const cardTextClasses = computed(() => {
  return themeStore.theme === 'dark' ? 'text-gray-300 leading-relaxed text-sm' : 'text-gray-700 leading-relaxed text-sm'
})
</script>

<style scoped>
/* No extra styles needed if you're using Tailwind utilities,
   but you can add custom styles here if desired */
</style>
