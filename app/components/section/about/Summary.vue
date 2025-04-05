<template>
  <div :class="cardClasses">
    <h3 class="text-xl font-semibold mb-1">Summary</h3>
    <p class="text-sm leading-relaxed">
      I'm a developer focused on building scalable APIs, backend services, and cloud-based systems. I enjoy turning
      complex challenges into simple, efficient solutions and thrive in environments where thoughtful collaboration and
      clean architecture matter.
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useThemeStore } from '~/stores/theme'

const themeStore = useThemeStore()
const isDark = computed(() => themeStore.theme === 'dark')

const cardClasses = computed(() => {
  return [
    'p-8 backdrop-blur-md rounded-xl transform hover:-translate-y-1 hover:shadow-lg duration-300 ease-in-out',
    isDark.value ? 'bg-black/40 shadow-xl ring-1 ring-white/10' : 'bg-white/90 shadow-2xl ring-1 ring-black/10',
  ].join(' ')
})
</script>
