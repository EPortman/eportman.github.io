<template>
  <aside class="fixed top-1/2 left-6 -translate-y-1/2 z-50 flex flex-col items-center space-y-4">
    <button
      v-for="section in sections"
      :key="section.id"
      @click="scrollTo(section.id)"
      class="group relative flex items-center justify-center focus:outline-none"
    >
      <div
        :class="[
          'w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-200 backdrop-blur-md ring-1 ring-border',
          currentSection === section.id
            ? 'bg-accent text-white shadow-md scale-105'
            : 'bg-surface/60 text-gray-400 hover:text-white hover:ring-accent hover:shadow-[0_0_0.5rem_#22c55e66]'
        ]"
      >
        <Icon :icon="section.icon" class="w-5 h-5 transition-transform duration-200" />
      </div>

      <span
        class="absolute left-14 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 scale-95 group-hover:scale-100 bg-white text-black text-xs font-semibold px-3 py-1.5 rounded-md shadow-lg whitespace-nowrap transition-all duration-200 pointer-events-none"
      >
        {{ section.label }}
      </span>
    </button>
  </aside>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Icon } from '@iconify/vue'

const currentSection = ref('hero')

const sections = [
  { id: 'hero', label: 'Home', icon: 'mdi:home' },
  { id: 'about', label: 'About', icon: 'mdi:account' },
  { id: 'experience', label: 'Experience', icon: 'mdi:briefcase' },
  { id: 'project', label: 'Projects', icon: 'mdi:folder' },
  { id: 'contact', label: 'Contact', icon: 'mdi:email' },
]

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

let observer: IntersectionObserver

onMounted(() => {
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
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>
