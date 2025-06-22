<template>
  <div :class="cardClasses">
    <h3 class="text-xl font-semibold mb-1">Education</h3>
    <div class="leading-relaxed text-sm">
      <div v-for="(edu, index) in education" :key="index" class="mb-2 last:mb-0">
        <p class="font-semibold text-gray-500 dark:text-gray-400">{{ edu.institution }}</p>
        <p class="italic">{{ edu.degree }} — {{ edu.years }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const education = [
  {
    institution: 'Camosun College',
    degree: 'Diploma in Info & Computer Systems',
    years: '2022-2025',
  },
  {
    institution: 'University of British Columbia',
    degree: 'Bachelor of Kinesiology',
    years: '2014-2018',
  },
]

const cardClasses = computed(() => {
  return [
    'p-8 backdrop-blur-md rounded-xl transform hover:-translate-y-1 hover:shadow-lg duration-300 ease-in-out',
  ].join(' ')
})
</script>
