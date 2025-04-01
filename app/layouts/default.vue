<template>
  <div>
    <ClientOnly>
      <BackgroundStars v-if="themeStore.theme === 'dark'" />
      <BackgroundDoodles v-else />
    </ClientOnly>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '~/stores/theme'
const themeStore = useThemeStore()
</script>
