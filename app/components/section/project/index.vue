<template>
  <section class="py-10 px-4">
    <div :class="projectsContainerClasses">
      <h2 :class="[isDark ? 'text-white' : 'text-black', 'text-4xl font-bold text-center']">Projects</h2>

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
        <SectionProjectPantryPall v-if="selectedProjectIndex === 1" />
        <SectionProjectDonkeyKong v-if="selectedProjectIndex === 2" />
        <SectionProjectSFTPGames v-if="selectedProjectIndex === 3" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useThemeStore } from '~/stores/theme'

const themeStore = useThemeStore()
const isDark = computed(() => themeStore.theme === 'dark')

const projects = ['Flappy Trainer', 'Pantry Pall', 'Donkey Kong', 'SFTP Games']
const selectedProjectIndex = ref(0)

const projectsContainerClasses = computed(() => {
  return [
    'max-w-5xl mx-auto flex flex-col items-center space-y-8',
    isDark.value ? 'text-gray-300' : 'text-gray-700',
  ].join(' ')
})

const projectsCardClasses = computed(() => {
  return [
    'p-8 md:p-12 space-y-6 backdrop-blur-md rounded-xl transform hover:-translate-y-1 hover:shadow-lg duration-300 ease-in-out leading-relaxed',
    isDark.value ? 'bg-black/40 shadow-xl ring-1 ring-white/10' : 'bg-white/90 shadow-2xl ring-1 ring-black/10',
  ].join(' ')
})

const projectsButtonsClasses = computed(
  () => (index: number) =>
    [
      'inline-flex items-center px-5 py-3 font-medium rounded-full transition-all shadow',
      'hover:shadow-lg transform hover:-translate-y-[1px]',
      isDark.value
        ? selectedProjectIndex.value === index
          ? 'bg-gray-700 text-white border-2 border-indigo-500'
          : 'bg-gray-700 text-white hover:bg-gray-600'
        : selectedProjectIndex.value === index
          ? 'bg-gray-200 text-black border-2 border-indigo-500'
          : 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    ].join(' ')
)
</script>
