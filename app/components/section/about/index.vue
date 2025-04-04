<template>
  <section :class="aboutSectionClasses">
    <div :class="containerClasses">
      <!-- Section Title -->
      <h2 :class="titleClasses">About Me</h2>

      <!-- Summary & Education -->
      <div :class="gridClasses">
        <SectionAboutSummary />
        <SectionAboutEducation />
      </div>

      <!-- Tech Stack -->
      <SectionAboutTechStack />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useThemeStore } from '~/stores/theme'

// Access the global theme store
const themeStore = useThemeStore()

// Outer section classes (padding, etc.)
const aboutSectionClasses = computed(() => {
  // You might also add a background or gradient here if needed.
  return 'py-20 px-4'
})

// Container that centers content
const containerClasses = computed(() => {
  return 'container mx-auto flex flex-col items-center space-y-16'
})

// Dynamic title styling based on theme
const titleClasses = computed(() => {
  return themeStore.theme === 'dark'
    ? 'text-4xl font-bold text-white text-center animate-fade-in'
    : 'text-4xl font-bold text-gray-900 text-center animate-fade-in'
})

// Grid layout for summary and education remains constant, but you could tweak spacing if needed
const gridClasses = computed(() => {
  return 'grid md:grid-cols-2 gap-8 w-full max-w-5xl'
})
</script>

<style scoped>
/* You can add additional styles here if needed. 
   The dynamic styling is mostly handled by Tailwind classes via computed properties.
*/
</style>
