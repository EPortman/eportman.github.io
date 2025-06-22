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


</script>
