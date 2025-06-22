<template>
  <section class="py-10 px-4">
    <div :class="experienceContainerClasses">
      <h1>Experience</h1>
      <SectionExperienceBCRegistries />
      <SectionExperienceOther />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'


const experienceContainerClasses = computed(() => {
  return [
    'max-w-5xl mx-auto flex flex-col items-center space-y-16',
  ].join(' ')
})
</script>
