<template>
  <section :class="projectsSectionClasses">
    <div :class="containerClasses">
      <!-- Section Title -->
      <h2 :class="titleClasses">Projects</h2>

      <!-- Projects Grid -->
      <div :class="projectsGridClasses">
        <div v-for="(project, index) in projects" :key="index" :class="projectCardClasses">
          <h3 :class="projectCardTitleClasses">{{ project.title }}</h3>
          <p :class="projectCardDateClasses">{{ project.date }}</p>
          <p :class="projectCardDescClasses">{{ project.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useThemeStore } from '~/stores/theme'

// Access the global theme store
const themeStore = useThemeStore()

// Example projects array with 4 items
const projects = [
  {
    title: 'Project A',
    date: '2022 – Present',
    description: 'A modern web application using Vue.js, TypeScript, and Tailwind CSS to streamline online services.',
  },
  {
    title: 'Project B',
    date: '2021 – 2022',
    description: 'Developed a Node.js microservice for data processing, integrating seamlessly with external APIs.',
  },
  {
    title: 'Project C',
    date: '2020 – 2021',
    description: 'Created a responsive SPA for a local business, focusing on performance, SEO, and user experience.',
  },
  {
    title: 'Project D',
    date: '2019 – 2020',
    description: 'Implemented a CI/CD pipeline with Docker and GitHub Actions to automate testing and deployments.',
  },
]

// Outer section classes
const projectsSectionClasses = computed(() => {
  return 'py-20 px-4'
})

// Container that centers content and controls max width
const containerClasses = computed(() => {
  // Increased max-w to 7xl so the grid is wider
  return 'container mx-auto flex flex-col items-center space-y-16 max-w-7xl'
})

// Section title styling
const titleClasses = computed(() => {
  return themeStore.theme === 'dark'
    ? 'text-4xl font-bold text-white text-center animate-fade-in'
    : 'text-4xl font-bold text-gray-900 text-center animate-fade-in'
})

// Grid container for the 4 project cards
const projectsGridClasses = computed(() => {
  // 2 columns from md (≥768px) upwards, 1 column on smaller screens
  return 'grid gap-8 w-full md:grid-cols-2'
})

// Individual project card styling
const projectCardClasses = computed(() => {
  const base = 'p-6 rounded-lg backdrop-blur-md shadow space-y-2 transition-all'
  return themeStore.theme === 'dark' ? `${base} bg-black/30` : `${base} bg-white/80 shadow-xl ring-1 ring-gray-200`
})

// Title for each project card
const projectCardTitleClasses = computed(() => {
  return themeStore.theme === 'dark' ? 'text-xl font-semibold text-white' : 'text-xl font-semibold text-gray-900'
})

// Date for each project card
const projectCardDateClasses = computed(() => {
  return themeStore.theme === 'dark' ? 'text-gray-300 text-sm' : 'text-gray-700 text-sm'
})

// Description for each project card
const projectCardDescClasses = computed(() => {
  return themeStore.theme === 'dark' ? 'text-gray-300 text-sm leading-relaxed' : 'text-gray-700 text-sm leading-relaxed'
})
</script>

<style scoped>
/* Optional: additional styling or utility classes can go here */
</style>
