<template>
  <div :class="bcRegCardClasses">
    <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
      <div>
        <h3 class="text-xl md:text-2xl font-semibold">BC Registries and Online Services</h3>
        <p class="text-sm md:text-base font-medium mt-1">Application Developer</p>
      </div>
      <p class="text-sm text-gray-500 dark:text-gray-400 md:ml-auto">May 2024 - Present | Victoria, BC</p>
    </div>

    <p class="mt-4 text-sm md:text-base leading-relaxed">
      I maintained and enhanced government registry systems by managing Flask-based backend services, integrating them
      with Vue/Nuxt interfaces, and ensuring reliable deployments on Google Cloud Platform.
    </p>

    <ul class="mt-4 space-y-2 text-sm md:text-base leading-normal">
      <li v-for="(item, index) in bcRegBulletPoints" :key="index" class="flex items-start gap-2">
        <Icon icon="mdi:chevron-right" class="w-4 h-4 text-current mt-1 shrink-0" />
        <span>{{ item }}</span>
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
    'p-8 backdrop-blur-md rounded-xl transform hover:-translate-y-1 hover:shadow-lg duration-300 ease-in-out',
    isDark.value ? 'bg-black/40 shadow-xl' : 'bg-white/90 shadow-2xl',
  ].join(' ')
})
</script>
