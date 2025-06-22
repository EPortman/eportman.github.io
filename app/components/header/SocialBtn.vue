<template>
  <div class="relative group">
    <a :href="href" target="_blank" :aria-label="label" class="grid place-items-center w-9 h-9 rounded-xl text-gray-400 bg-surface/60 ring-1 ring-border backdrop-blur-md hover:text-white hover:ring-accent hover:shadow-[0_0_0.5rem_#22c55e66] transition-all">
      <Icon :icon="icon" class="w-5 h-5 z-10" />
    </a>
    <span class="absolute top-[2.75rem] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 scale-95 group-hover:scale-100 bg-white text-black text-xs font-medium px-3 py-1 rounded-md shadow-xl whitespace-nowrap transition-all duration-200 pointer-events-none">
      {{ label }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
defineProps<{
  href: string
  label: string
  icon: string
}>()
</script>
