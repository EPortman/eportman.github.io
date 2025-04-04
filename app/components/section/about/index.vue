<template>
  <section class="py-20 px-4">
    <div class="container mx-auto flex flex-col items-center space-y-16">
      <h2 :class="titleClasses">About Me</h2>

      <div class="grid md:grid-cols-2 gap-8 w-full max-w-6xl">
        <SectionAboutSummary />
        <SectionAboutEducation />
      </div>

      <div class="w-full max-w-6xl">
        <SectionAboutTechStack />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useThemeStore } from '~/stores/theme'

const themeStore = useThemeStore()
const isDark = computed(() => themeStore.theme === 'dark')

const titleClasses = computed(() => {
  return [
    'text-4xl font-bold text-center animate-fade-in',
    isDark.value ? 'text-white' : 'text-gray-900'
  ].join(' ')
})
</script>
