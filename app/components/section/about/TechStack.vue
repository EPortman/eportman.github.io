<template>
  <div :class="cardClasses">
    <h3 :class="cardTitleClasses">Tech Stack</h3>
    <div :class="techGridClasses">
      <div v-for="item in techStack" :key="item.title" :class="stackGroupClasses">
        <Icon :icon="item.icon" :class="iconClasses" />
        <div>
          <p :class="stackTitleClasses">{{ item.title }}</p>
          <p :class="stackTextClasses">{{ item.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import { useThemeStore } from '~/stores/theme'

const themeStore = useThemeStore()

// Tech Stack data
const techStack = [
  {
    icon: 'mdi:code-tags',
    title: 'Languages',
    content: 'Python, TypeScript, C++, C#',
  },
  {
    icon: 'mdi:cloud-outline',
    title: 'Cloud & Infrastructure',
    content: 'GCP, OCP, AWS, Firebase, Kubernetes',
  },
  {
    icon: 'mdi:robot',
    title: 'AI & ML',
    content: 'TensorFlow, Scikit-learn, OpenCV',
  },
  {
    icon: 'mdi:api',
    title: 'Backend & APIs',
    content: 'Flask, Django, FastAPI, Keycloak',
  },
  {
    icon: 'mdi:database',
    title: 'Databases & Data',
    content: 'PostgreSQL, Oracle, MongoDB',
  },
  {
    icon: 'mdi:tools',
    title: 'Tooling & Productivity',
    content: 'VS Code, Postman, Version Control',
  },
  {
    icon: 'mdi:palette',
    title: 'Frontend / UI',
    content: 'Vue 3, Nuxt, Tailwind, React',
  },
  {
    icon: 'mdi:cog',
    title: 'DevOps / CI/CD',
    content: 'GitHub Actions, Docker, Cypress',
  },
  {
    icon: 'mdi:account-group-outline',
    title: 'Agile & Collaboration',
    content: 'Agile Methodologies, Scrum/kanban',
  },
]

// Computed classes for dark vs. light mode:

// Card container styling
const cardClasses = computed(() => {
  const base = 'w-full max-w-5xl mx-auto p-6 rounded-lg backdrop-blur-md shadow space-y-4 transition-all'
  return themeStore.theme === 'dark' ? `${base} bg-black/40` : `${base} bg-white/90 shadow-2xl ring-1 ring-gray-200`
})

// Heading styling
const cardTitleClasses = computed(() => {
  return themeStore.theme === 'dark'
    ? 'text-2xl font-semibold text-white text-center'
    : 'text-2xl font-semibold text-gray-900 text-center'
})

// Grid container
const techGridClasses = computed(() => {
  return 'grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 text-sm'
})

// Stack group styling
const stackGroupClasses = computed(() => {
  return themeStore.theme === 'dark'
    ? 'flex items-start gap-3 p-2 rounded-md transition duration-200 hover:bg-white/5'
    : 'flex items-start gap-3 p-2 rounded-md transition duration-200 hover:bg-black/5'
})

// Stack title styling
const stackTitleClasses = computed(() => {
  return themeStore.theme === 'dark' ? 'text-white font-medium mb-0.5' : 'text-black font-medium mb-0.5'
})

// Stack text styling
const stackTextClasses = computed(() => {
  return themeStore.theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
})

// Icon styling
const iconClasses = computed(() => {
  return themeStore.theme === 'dark'
    ? 'text-white w-5 h-5 mt-0.5 transition-transform duration-200 ease-out'
    : 'text-black w-5 h-5 mt-0.5 transition-transform duration-200 ease-out'
})
</script>

<style scoped>
/* Additional common styles can be added here if needed */
</style>
