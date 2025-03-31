<template>
  <div class="card w-full max-w-5xl">
    <h3 class="text-2xl font-semibold text-white text-center">Tech Stack</h3>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 text-gray-300 text-sm">
      <div v-for="item in techStack" :key="item.title" class="stack-group">
        <Icon :icon="item.icon" class="icon" />
        <div>
          <p class="stack-title">{{ item.title }}</p>
          <p>{{ item.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

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
</script>

<style scoped>
.card {
  @apply bg-black/40 backdrop-blur-md rounded-lg p-6 shadow-md space-y-4;
}

.stack-group {
  @apply flex items-start gap-3 p-2 rounded-md transition duration-200 hover:bg-white/5;
}

.stack-title {
  @apply text-white font-medium mb-0.5;
}

.icon {
  @apply text-white w-5 h-5 mt-0.5 transition-transform duration-200 ease-out;
}

.icon:hover {
  @apply scale-110;
}
</style>
