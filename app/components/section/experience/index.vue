<template>
  <section class="py-20 px-4">
    <div :class="experienceContainerClasses">
      <h1 :class="[isDark ? 'text-white' : 'text-black', 'text-4xl font-bold text-center']">Experience</h1>
      <SectionExperienceBCRegistries />
      <SectionExperienceOther />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useThemeStore } from '~/stores/theme'

const themeStore = useThemeStore()
const isDark = computed(() => themeStore.theme === 'dark')

const experienceContainerClasses = computed(() => {
  return [
    'max-w-5xl mx-auto flex flex-col items-center space-y-16',
    isDark.value ? 'text-gray-300' : 'text-gray-700',
  ].join(' ')
})
</script>
