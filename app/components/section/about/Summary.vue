<template>
  <div :class="cardClasses">
    <h3 :class="cardTitleClasses">Summary</h3>
    <p :class="cardTextClasses">
      I'm a developer focused on building scalable APIs, backend services, and cloud-based systems.
      I enjoy turning complex challenges into simple, efficient solutions and thrive in environments
      where thoughtful collaboration and clean architecture matter.
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useThemeStore } from '~/stores/theme'

const themeStore = useThemeStore()
const isDark = computed(() => themeStore.theme === 'dark')

const cardClasses = computed(() => {
  return [
    'backdrop-blur-md rounded-lg p-6 shadow-md space-y-4 transition-all',
    isDark.value ? 'bg-black/40' : 'bg-white/95 shadow-2xl ring-1 ring-gray-200'
  ].join(' ')
})

const cardTitleClasses = computed(() => {
  return [
    'text-xl font-semibold',
    isDark.value ? 'text-white' : 'text-gray-900'
  ].join(' ')
})

const cardTextClasses = computed(() => {
  return [
    'leading-relaxed text-sm',
    isDark.value ? 'text-gray-300' : 'text-gray-700'
  ].join(' ')
})
</script>
