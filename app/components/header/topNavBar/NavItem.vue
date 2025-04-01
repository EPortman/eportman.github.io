<template>
  <div class="relative group">
    <template v-if="item.type === 'link'">
      <a :href="item.href" target="_blank" rel="noopener" :class="topIconClasses" :aria-label="item.label">
        <Icon :icon="item.icon" class="icon" />
      </a>
      <span :class="tooltipClasses">{{ item.label }}</span>
    </template>
    <template v-else-if="item.type === 'button'">
      <button :class="topIconClasses" :aria-label="item.label" @click="item.onClick">
        <Icon :icon="item.icon" class="icon" />
      </button>
      <span :class="tooltipClasses">{{ item.label }}</span>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import { Icon } from '@iconify/vue'
import { useThemeStore } from '~/stores/theme'

interface NavItem {
  type: 'link' | 'button'
  label: string
  icon: string
  href?: string
  onClick?: () => void
}

defineProps<{ item: NavItem }>()
const themeStore = useThemeStore()
const isDark = computed(() => themeStore.theme === 'dark')

// Compute classes based on theme
const topIconClasses = computed(() => {
  return isDark.value ? 'top-icon-dark' : 'top-icon-light'
})

const tooltipClasses = computed(() => {
  return isDark.value ? 'tooltip-dark' : 'tooltip-light'
})
</script>

<style scoped>
.icon {
  @apply w-6 h-6;
}

/* Dark Mode Styles */
.top-icon-dark {
  @apply inline-flex items-center justify-center 
         w-12 h-12 rounded-full 
         bg-white/10 text-white/70 
         transition-transform 
         backdrop-blur-md 
         shadow-md cursor-pointer;
}
.top-icon-dark:hover {
  @apply scale-105 ring-2 ring-white/20;
  box-shadow: 0 0 10px 3px rgba(255, 255, 255, 0.4);
}
.tooltip-dark {
  @apply absolute top-full left-1/2 mt-3 
         bg-gray-800 text-white text-xs 
         rounded px-2 py-1 whitespace-nowrap 
         pointer-events-none opacity-0 
         transition-all duration-300 ease-out z-10;
  transform: translate(-60%, 10px);
}
.tooltip-dark::before {
  content: '';
  @apply absolute left-1/2 bottom-full -translate-x-1/2 
         border-[6px] border-transparent border-b-gray-800;
}
.group:hover .tooltip-dark {
  @apply opacity-100;
  transform: translate(-50%, 0);
}

/* Light Mode Styles */
.top-icon-light {
  @apply inline-flex items-center justify-center 
         w-12 h-12 rounded-full 
         bg-black/10 text-black/70 
         transition-transform 
         backdrop-blur-md 
         shadow-md cursor-pointer;
}
.top-icon-light:hover {
  @apply scale-105 ring-2 ring-black/20;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.4);
}
.tooltip-light {
  @apply absolute top-full left-1/2 mt-3 
         bg-gray-100 text-black text-xs 
         rounded px-2 py-1 whitespace-nowrap 
         pointer-events-none opacity-0 
         transition-all duration-300 ease-out z-10;
  transform: translate(-60%, 10px);
}
.tooltip-light::before {
  content: '';
  @apply absolute left-1/2 bottom-full -translate-x-1/2 
         border-[6px] border-transparent border-b-gray-100;
}
.group:hover .tooltip-light {
  @apply opacity-100;
  transform: translate(-50%, 0);
}
</style>
