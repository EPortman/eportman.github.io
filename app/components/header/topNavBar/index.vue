<template>
  <header class="fixed top-0 left-0 w-full flex items-center justify-end px-8 py-4 z-20">
    <nav class="flex items-center space-x-4">
      <NavItem v-for="(item, index) in navItems" :key="index" :item="item" />
    </nav>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import NavItem from './NavItem.vue'
import { useThemeStore } from '~/stores/theme'

const themeStore = useThemeStore()

// Toggle action
const toggleTheme = () => {
  themeStore.toggleTheme()
}

interface NavItemType {
  type: 'link' | 'button'
  label: string
  icon: string
  href?: string
  onClick?: () => void
}

// Build nav items array as a computed value so it updates when the theme changes
const navItems = computed<NavItemType[]>(() => [
  {
    type: 'link',
    label: 'GitHub',
    icon: 'simple-icons:github',
    href: 'https://github.com/EPortman',
  },
  {
    type: 'link',
    label: 'LinkedIn',
    icon: 'simple-icons:linkedin',
    href: 'https://www.linkedin.com/in/ethan-portman-920ab62b0/',
  },
  {
    type: 'button',
    label: 'Toggle Theme',
    // Use a moon icon for dark mode and a sun icon for light mode
    icon: themeStore.theme === 'dark' ? 'mdi:moon-waning-crescent' : 'mdi:white-balance-sunny',
    onClick: toggleTheme,
  },
])
</script>
