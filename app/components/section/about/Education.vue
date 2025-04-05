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
const isDark = computed(() => themeStore.theme === 'dark')

const cardClasses = computed(() => {
  return [
    'backdrop-blur-md rounded-lg p-6 shadow-md space-y-4 transition-all',
    isDark.value ? 'bg-black/40' : 'bg-white/95 shadow-2xl ring-1 ring-gray-200',
  ].join(' ')
})

const cardTitleClasses = computed(() => {
  return isDark.value ? 'text-xl font-semibold text-white' : 'text-xl font-semibold text-gray-900'
})

const contentClasses = computed(() => {
  return isDark.value ? 'text-gray-300 space-y-4 text-sm' : 'text-gray-700 space-y-4 text-sm'
})

const institutionClasses = computed(() => {
  return isDark.value ? 'text-white font-medium font-bold' : 'text-gray-900 font-medium font-bold'
})

const italicClasses = computed(() => {
  return isDark.value ? 'italic' : 'italic text-gray-700'
})
</script>
