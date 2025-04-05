<template>
  <div class="grid gap-6 md:grid-cols-3 mx-auto">
    <div v-for="(role, index) in otherRoles" :key="index" :class="otherExperienceCardClasses">
      <h4 class="text-sm md:text-base font-semibold">
        {{ role.title }}
        <span v-if="role.company" class="font-normal text-gray-500 dark:text-gray-400 ml-1">
          at {{ role.company }}
        </span>
      </h4>

      <p class="mt-1 text-xs md:text-sm">
        {{ role.date }}
        <span v-if="role.location" class="mx-1 text-gray-400 dark:text-gray-500">|</span>
        {{ role.location }}
      </p>

      <p class="mt-2 text-sm leading-relaxed">
        {{ role.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useThemeStore } from '~/stores/theme'

const themeStore = useThemeStore()
const isDark = computed(() => themeStore.theme === 'dark')

const otherRoles = [
  {
    title: 'Tree Planter / Crew Boss',
    company: 'Artisan Reforestation',
    date: '2017 - 2024',
    location: 'BC Interior',
    description:
      'Planted over one million saplings across challenging terrains while leading a 6-person crew to drive efficient reforestation efforts.',
  },
  {
    title: 'Mountain Pine Beetle Control',
    company: 'Tom Scott Enterprises',
    date: '2019 - 2021',
    location: 'Remote AB',
    description:
      'Identified, felled, and safely burned infested pine trees in Alberta to mitigate the eastward spread of the mountain pine beetle.',
  },
  {
    title: 'Industrial Medic',
    company: 'Octane Safety Services',
    date: '2019 - 2021',
    location: 'Remote AB',
    description:
      'Provided prompt first aid and critical medical support to industrial crews, ensuring rigorous on-site safety compliance and rapid emergency response.',
  },
]

const otherExperienceCardClasses = computed(() => {
  return [
    'p-4 backdrop-blur-md rounded-md transform hover:-translate-y-1 hover:shadow-lg duration-300 ease-in-out',
    isDark.value ? 'bg-black/40 shadow-xl' : 'bg-white/90 shadow-2xl',
  ].join(' ')
})
</script>
