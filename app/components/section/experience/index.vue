<template>
  <section :class="experienceSectionClasses">
    <div :class="containerClasses">
      <!-- Section Title -->
      <h2 :class="titleClasses">Experience</h2>

      <!-- Main Experience Card #1 -->
      <div :class="cardClasses">
        <h3 :class="cardTitleClasses">BC Registries and Online Services</h3>
        <p :class="dateClasses">Jan 2023 – Present | Victoria, BC</p>
        <p :class="descClasses">
          Contributed to the modernization of government registry services, focusing on secure, scalable microservices
          and cloud-based solutions.
        </p>
        <ul :class="listClasses">
          <li>
            <Icon :icon="bulletIcon" class="icon-bullet" />
            Led the integration of Keycloak for improved authentication and user management.
          </li>
          <li>
            <Icon :icon="bulletIcon" class="icon-bullet" />
            Implemented containerization and CI/CD pipelines using Docker and GitHub Actions.
          </li>
          <li>
            <Icon :icon="bulletIcon" class="icon-bullet" />
            Collaborated with cross-functional teams to deliver agile sprints on schedule.
          </li>
        </ul>
      </div>

      <div :class="otherExperienceGridClasses">
        <!-- 3 smaller cards in a row -->
        <div v-for="(role, index) in otherRoles" :key="index" :class="smallCardClasses">
          <h4 :class="smallCardTitleClasses">{{ role.title }}</h4>
          <p :class="smallCardDateClasses">{{ role.date }}</p>
          <p :class="smallCardDescClasses">{{ role.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import { useThemeStore } from '~/stores/theme'

// Access the global theme store
const themeStore = useThemeStore()

// Icon used for bullet points (adjust if you prefer a different icon)
const bulletIcon = 'mdi:chevron-right'

// Data for the three smaller roles
const otherRoles = [
  {
    title: 'Tree Planter',
    date: 'Summers 2019 – 2021 | BC Interior',
    description:
      'Planted over 100,000 saplings in challenging terrains, demonstrating resilience, teamwork, and environmental stewardship.',
  },
  {
    title: 'Mountain Pine Beetle Control',
    date: 'Summer 2018 | Remote BC',
    description:
      'Assisted in surveying and removing infested trees, coordinating with forestry professionals to mitigate beetle spread.',
  },
  {
    title: 'Industry Medic',
    date: '2017 – 2018 | Various Sites',
    description:
      'Provided first aid and medical support to industrial crews, ensuring on-site safety compliance and rapid response.',
  },
]

// Outer section classes (padding, etc.)
const experienceSectionClasses = computed(() => {
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

// Card container styling
const cardClasses = computed(() => {
  const base = 'w-full max-w-5xl mx-auto p-6 rounded-lg backdrop-blur-md shadow space-y-4 transition-all'
  return themeStore.theme === 'dark' ? `${base} bg-black/40` : `${base} bg-white/90 shadow-2xl ring-1 ring-gray-200`
})

// Card title styling
const cardTitleClasses = computed(() => {
  return themeStore.theme === 'dark'
    ? 'text-2xl font-semibold text-white text-center'
    : 'text-2xl font-semibold text-gray-900 text-center'
})

// Date styling
const dateClasses = computed(() => {
  return themeStore.theme === 'dark' ? 'text-gray-300 text-sm text-center' : 'text-gray-700 text-sm text-center'
})

// Description styling
const descClasses = computed(() => {
  return themeStore.theme === 'dark' ? 'text-gray-300 text-sm leading-relaxed' : 'text-gray-700 text-sm leading-relaxed'
})

// Bullet list styling
const listClasses = computed(() => {
  return themeStore.theme === 'dark' ? 'mt-4 text-gray-300 text-sm space-y-2' : 'mt-4 text-gray-700 text-sm space-y-2'
})

// "Other Experience" title styling
const otherExperienceTitleClasses = computed(() => {
  return themeStore.theme === 'dark'
    ? 'text-2xl font-semibold text-white text-center'
    : 'text-2xl font-semibold text-gray-900 text-center'
})

// Grid for the 3 smaller cards
const otherExperienceGridClasses = computed(() => {
  return 'grid gap-8 md:grid-cols-3 w-full max-w-5xl'
})

// Smaller card styling for other roles
const smallCardClasses = computed(() => {
  const base = 'p-4 rounded-lg backdrop-blur-md shadow space-y-2 transition-all'
  return themeStore.theme === 'dark' ? `${base} bg-black/30` : `${base} bg-white/80 shadow-xl ring-1 ring-gray-200`
})

// Title for the smaller cards
const smallCardTitleClasses = computed(() => {
  return themeStore.theme === 'dark' ? 'text-xl font-semibold text-white' : 'text-xl font-semibold text-gray-900'
})

// Date for smaller cards
const smallCardDateClasses = computed(() => {
  return themeStore.theme === 'dark' ? 'text-gray-300 text-sm' : 'text-gray-700 text-sm'
})

// Description for smaller cards
const smallCardDescClasses = computed(() => {
  return themeStore.theme === 'dark' ? 'text-gray-300 text-sm leading-relaxed' : 'text-gray-700 text-sm leading-relaxed'
})
</script>

<style scoped>
.icon-bullet {
  @apply w-4 h-4 mr-2 text-current inline-block align-middle;
}
</style>
