<template>
  <div :class="cardClasses">
    <h3 class="text-xl font-semibold text-center">Tech Stack</h3>
    <div class="text-sm grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
      <div v-for="item in techStack" :key="item.title" :class="stackGroupClasses">
        <Icon :icon="item.icon" :class="iconClasses" />
        <div>
          <p class="font-semibold text-gray-500 dark:text-gray-400">{{ item.title }}</p>
          <p>{{ item.content }}</p>
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
    content: 'GCP, Openshift, AWS, Kubernetes',
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
    'p-8 backdrop-blur-md rounded-xl transform hover:-translate-y-1 hover:shadow-lg duration-300 ease-in-out',
    isDark.value ? 'bg-black/40 shadow-xl ring-1 ring-white/10' : 'bg-white/90 shadow-2xl ring-1 ring-black/10',
  ].join(' ')
})

const stackGroupClasses = computed(() => {
  return [
    'flex items-start gap-3 p-2 rounded-md transition duration-200',
    isDark.value ? 'hover:bg-white/5' : 'hover:bg-black/5',
  ].join(' ')
})

const iconClasses = computed(() => {
  return [
    'w-5 h-5 mt-0.5 transition-transform duration-200 ease-out cursor-pointer hover:scale-110',
    isDark.value ? 'text-white' : 'text-black',
  ]
})
</script>
