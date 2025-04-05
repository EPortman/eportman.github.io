<template>
  <div :class="cardClasses">
    <h3 :class="cardTitleClasses">Tech Stack</h3>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 text-sm">
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
const isDark = computed(() => themeStore.theme === 'dark')

const techStack = [
  {
    icon: 'mdi:code-tags',
    title: 'Languages',
    content: 'Python, TypeScript, C++, C#',
  },
  {
    icon: 'mdi:cloud-outline',
    title: 'Cloud & Infrastructure',
    content: 'GCP, Openshift, AWS, Firebase, Kubernetes',
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
    title: 'DevOps & CI/CD',
    content: 'GitHub Actions, Docker',
  },
  {
    icon: 'mdi:account-group-outline',
    title: 'Agile & Collaboration',
    content: 'Agile Methodologies, Scrum/kanban',
  },
]

const cardClasses = computed(() => {
  return [
    'mx-auto p-6 rounded-lg backdrop-blur-md shadow space-y-4 transition-all',
    isDark.value ? 'bg-black/40 shadow-xl ring-1 ring-white/10' : 'bg-white/90 shadow-2xl ring-1 ring-black/10',
  ].join(' ')
})

const cardTitleClasses = computed(() => {
  return ['text-2xl font-semibold text-center', isDark.value ? 'text-white' : 'text-gray-900'].join(' ')
})

const stackGroupClasses = computed(() => {
  return [
    'flex items-start gap-3 p-2 rounded-md transition duration-200',
    isDark.value ? 'hover:bg-white/5' : 'hover:bg-black/5',
  ].join(' ')
})

const stackTitleClasses = computed(() => {
  return isDark.value ? 'text-white font-medium mb-0.5' : 'text-black font-medium mb-0.5'
})

const stackTextClasses = computed(() => {
  return isDark.value ? 'text-gray-300' : 'text-gray-700'
})

const iconClasses = computed(() => {
  return ['w-5 h-5 mt-0.5 transition-transform duration-200 ease-out', isDark.value ? 'text-white' : 'text-black']
})
</script>
