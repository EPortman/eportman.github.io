<template>
  <header class="fixed top-0 left-0 w-full flex items-center justify-end px-8 py-4 z-20">
    <nav class="flex items-center space-x-4">
      <div class="relative group">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener" class="top-icon" aria-label="GitHub">
          <Icon icon="simple-icons:github" class="icon" />
        </a>
        <span class="tooltip">GitHub</span>
      </div>

      <div class="relative group">
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener"
          class="top-icon"
          aria-label="LinkedIn"
        >
          <Icon icon="simple-icons:linkedin" class="icon" />
        </a>
        <span class="tooltip">LinkedIn</span>
      </div>

      <div class="relative group">
        <button class="top-icon" aria-label="Toggle Theme" @click="toggleTheme">
          <Icon icon="mdi:moon-waning-crescent" class="icon" />
        </button>
        <span class="tooltip">Toggle Theme</span>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const isDarkMode = ref(true)
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  document.body.classList.toggle('dark', isDarkMode.value)
}
</script>

<style scoped>
.top-icon {
  @apply inline-flex items-center justify-center 
         w-12 h-12 rounded-full 
         bg-white/10 hover:bg-white/20 
         text-white/70 
         transition-all 
         backdrop-blur-md 
         shadow-md;
}

.top-icon:hover {
  transform: translateY(-2px);
}

.icon {
  @apply w-6 h-6;
}

.tooltip {
  @apply absolute left-1/2 top-full mt-2 
         -translate-x-1/2 
         opacity-0 pointer-events-none 
         bg-gray-800 text-white text-xs 
         rounded px-2 py-1 
         whitespace-nowrap 
         transition-opacity;
  z-index: 10;
}

.group:hover .tooltip {
  @apply opacity-100;
}
</style>
