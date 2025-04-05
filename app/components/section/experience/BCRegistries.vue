<template>
  <div :class="bcRegCardClasses">
    <!-- Experience Title -->
    <div class="flex flex-col md:flex-row justify-between">
      <div>
        <h3 class="text-xl font-semibold">BC Registries and Online Services</h3>
        <p class="text-sm font-semibold text-gray-500 dark:text-gray-400">Application Developer</p>
      </div>
      <p class="text-sm text-gray-500 dark:text-gray-400">May 2024 - Present | Victoria, BC</p>
    </div>

    <!-- Experience Description -->
    <p class="mt-2">
      Maintained and enhanced government registry systems by managing Flask-based backend services, integrating them
      with Vue/Nuxt interfaces, and ensuring reliable deployments on Google Cloud Platform.
    </p>

    <!-- Experience Accomplishments -->
    <ul class="mt-1 space-y-1">
      <li v-for="(item, index) in bcRegBulletPoints" :key="index" class="flex items-start gap-2">
        <Icon icon="mdi:chevron-right" class="w-4 h-4 mt-1" />
        <span class="text-sm">{{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import { useThemeStore } from '~/stores/theme'

const themeStore = useThemeStore()
const isDark = computed(() => themeStore.theme === 'dark')

const bcRegBulletPoints = [
  'Spearheaded the migration of the Names backend from OpenShift to Google Cloud, adopting a serverless architecture on Cloud Run to reduce overhead and accelerate deployments.',
  'Developed Cypress smoke tests and integrated them with GitHub Actions, streamlining CI/CD pipelines and automating test runs on pull requests.',
  'Enhanced the Business Annual Report system, enabling clients to file multiple annual reports simultaneously through a Nuxt-based front end and Flask API.',
  'Diagnosed and resolved production data issues using Jupyter Notebooks, ensuring prompt bug fixes and consistent client satisfaction.',
  'Contributed to daily stand-ups and Agile ceremonies, fostering team collaboration and effective project tracking.',
]

const bcRegCardClasses = computed(() => {
  return [
    'p-8 backdrop-blur-md rounded-xl transform hover:-translate-y-1 hover:shadow-lg duration-300 ease-in-out leading-relaxed',
    isDark.value ? 'bg-black/40 shadow-xl ring-1 ring-white/10' : 'bg-white/90 shadow-2xl ring-1 ring-black/10',
  ].join(' ')
})
</script>
