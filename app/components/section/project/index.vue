<template>
  <section class="py-10 px-4">
    <div :class="projectsContainerClasses">
      <h2>Projects</h2>

      <!-- Active Project Selector -->
      <div class="flex flex-wrap justify-center gap-4">
        <button
          v-for="(project, i) in projects"
          :key="i"
          :class="projectsButtonsClasses(i)"
          @click="selectedProjectIndex = i"
        >
          {{ project }}
        </button>
      </div>

      <!-- Active Project Component -->
      <div :class="projectsCardClasses">
        <SectionProjectFlappyTrainer v-if="selectedProjectIndex === 0" />
        <SectionProjectDonkeyKong v-if="selectedProjectIndex === 1" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'


const projects = ['Flappy Trainer', 'Donkey Kong']
const selectedProjectIndex = ref(0)

const projectsContainerClasses = computed(() => {
  return [
    'max-w-5xl mx-auto flex flex-col items-center space-y-8',
  ].join(' ')
})

const projectsCardClasses = computed(() => {
  return [
    'p-8 md:p-12 space-y-6 backdrop-blur-md rounded-xl transform hover:-translate-y-1 hover:shadow-lg duration-300 ease-in-out leading-relaxed',
  ].join(' ')
})

const projectsButtonsClasses = computed(
  () => (index: number) =>
    [
      'inline-flex items-center px-5 py-3 font-medium rounded-full transition-all shadow',
      'hover:shadow-lg transform hover:-translate-y-[1px]',
      'bg-gray-700 text-white border-2 border-indigo-500',
       'bg-gray-700 text-white hover:bg-gray-600'
    ].join(' ')
)
</script>
