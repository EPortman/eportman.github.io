<template>
  <a :href="href" class="flex items-center gap-3 text-white hover:text-accent transition">
    <Icon :icon="icon" class="w-5 h-5" />
    <span>{{ label }}</span>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  href: string
  label: string
  icon: string
}>()
import { Icon } from '@iconify/vue'
</script>
