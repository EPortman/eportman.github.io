<template>
  <div class="fixed left-4 top-1/2 -translate-y-1/2 flex flex-col space-y-4 z-50">
    <button
      v-for="section in sections"
      :key="section.id"
      class="flex items-center space-x-2 group"
      @click="scrollTo(section.id)"
    >
      <div :class="bubbleClasses(section)">
        <Icon :icon="section.icon" class="icon" />
      </div>
      <span :class="labelClasses(section)">
        {{ section.label }}
      </span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { Icon } from '@iconify/vue'
import { useThemeStore } from '~/stores/theme'

// Access your Pinia store to check if theme is dark
const themeStore = useThemeStore()
const isDark = computed(() => themeStore.theme === 'dark')

// Intersection Observer logic
const currentSection = ref('hero')
const sections = [
  { id: 'hero', label: 'Home', icon: 'mdi:home' },
  { id: 'about', label: 'About', icon: 'mdi:account' },
  { id: 'experience', label: 'Experience', icon: 'mdi:briefcase' },
  { id: 'project', label: 'Project', icon: 'mdi:folder' },
  { id: 'contact', label: 'Contact', icon: 'mdi:email' },
]

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

let observer: IntersectionObserver

onMounted(() => {
  setTimeout(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentSection.value = entry.target.id
          }
        })
      },
      { threshold: 0.6 }
    )
    sections.forEach((section) => {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    })
  }, 0)
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})

// === DYNAMIC CLASS COMPUTATIONS ===

// This function returns the classes for the icon bubble
function bubbleClasses(section: { id: string }) {
  const isActive = currentSection.value === section.id

  // For dark mode vs. light mode
  if (isDark.value) {
    // Dark mode classes
    return [
      'icon-bubble', // base styles
      'transition-all', // transition
      isActive ? 'bg-white text-black scale-110 ring-2 ring-white' : 'bg-white/10 text-white/70 hover:bg-white/30',
    ]
  } else {
    // Light mode classes
    return [
      'icon-bubble',
      'transition-all',
      isActive ? 'bg-black text-white scale-110 ring-2 ring-black' : 'bg-black/10 text-black/70 hover:bg-black/30',
    ]
  }
}

// This function returns the classes for the label
function labelClasses(section: { id: string }) {
  const isActive = currentSection.value === section.id

  if (isDark.value) {
    // Dark mode label
    return [
      'text-sm',
      'text-white/70',
      'group-hover:text-white',
      'transition-all',
      'font-medium',
      isActive ? 'text-white font-semibold' : '',
    ]
  } else {
    // Light mode label
    return [
      'text-sm',
      'text-black/70',
      'group-hover:text-black',
      'transition-all',
      'font-medium',
      isActive ? 'text-black font-semibold' : '',
    ]
  }
}
</script>

<style scoped>
.icon-bubble {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition:
    transform 0.25s,
    box-shadow 0.25s,
    background-color 0.25s;
  cursor: pointer;
}
.icon-bubble:hover {
  transform: translateY(-2px);
}

.icon {
  width: 1.5rem;
  height: 1.5rem;
}
</style>
