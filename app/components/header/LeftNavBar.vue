<template>
  <div class="fixed left-4 top-1/2 -translate-y-1/2 flex flex-col space-y-4 z-50">
    <button
      v-for="section in sections"
      :key="section.id"
      class="flex items-center space-x-2 group"
      @click="scrollTo(section.id)"
    >
      <div
        :class="[
          'icon-bubble transition-all',
          currentSection === section.id
            ? 'bg-white text-black scale-110 ring-2 ring-white'
            : 'bg-white/10 text-white/70 hover:bg-white/30',
        ]"
      >
        <Icon :icon="section.icon" class="icon" />
      </div>
      <span
        class="text-sm text-white/70 group-hover:text-white transition-all font-medium"
        :class="{ 'text-white font-semibold': currentSection === section.id }"
      >
        {{ section.label }}
      </span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Icon } from '@iconify/vue'

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
  // Defer until next tick to ensure client-only DOM is present
  setTimeout(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentSection.value = entry.target.id
          }
        })
      },
      {
        threshold: 0.6, // Slightly more aggressive detection
      }
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
</script>

<style scoped>
header {
  background: transparent;
}

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
