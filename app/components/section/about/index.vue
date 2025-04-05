<template>
  <section class="py-10 px-4">
    <div :class="aboutContainerClasses">
      <h1 :class="[isDark ? 'text-white' : 'text-black', 'text-4xl font-bold text-center']">About Me</h1>

      <div class="grid md:grid-cols-2 gap-8">
        <SectionAboutSummary />
        <SectionAboutEducation />
      </div>

      <SectionAboutTechStack />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useThemeStore } from '~/stores/theme'

const themeStore = useThemeStore()
const isDark = computed(() => themeStore.theme === 'dark')

const aboutContainerClasses = computed(() => {
  return [
    'max-w-5xl mx-auto flex flex-col items-center space-y-16',
    isDark.value ? 'text-gray-300' : 'text-gray-700',
  ].join(' ')
})
</script>
