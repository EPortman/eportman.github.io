<template>
  <section class="flex justify-center items-center min-h-screen  px-4">
    <div class="max-w-3xl w-full text-center">
      <h1 class="text-5xl md:text-6xl font-bold text-textPrimary mb-6 leading-tight">
        Hey, I’m <span class="text-accent">Ethan</span>
      </h1>

      <p class="text-lg md:text-xl text-textSecondary leading-relaxed max-w-2xl mx-auto mb-10">
        I'm a full-stack developer with a strong backend focus, specializing in scalable APIs, 
        cloud-native systems, and clean architecture. I value collaboration and simplicity, 
        and I build reliable software that performs and lasts.
      </p>

      <div class="flex flex-wrap justify-center gap-4 mb-10">
        <NuxtLink
          v-for="link in links"
          :key="link.label"
          :to="link.href"
          class="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-white bg-surface/60 backdrop-blur-md ring-1 ring-border hover:ring-accent hover:text-accent hover:scale-[1.025] active:scale-[0.98] transition-all duration-200 shadow-md hover:shadow-[0_0_0.5rem_#22c55e77]"
        >
          <Icon :icon="link.icon" class="w-5 h-5 transition-colors duration-200" />
          {{ link.label }}
        </NuxtLink>
      </div>

      <div class="flex justify-center gap-6 text-3xl text-textSecondary mb-8">
        <Icon
          v-for="tech in techIcons"
          :key="tech.label"
          :icon="tech.icon"
          :title="tech.label"
          class="transition-transform duration-200 hover:text-accent hover:scale-125 cursor-default"
        />
      </div>

      <p class="italic text-textMuted text-white text-sm md:text-base">
        “Let’s build something clear, reliable, and built to last.”
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

const links = [
  { label: 'About Me', href: '#about', icon: 'mdi:account' },
  { label: 'Experience', href: '#experience', icon: 'mdi:briefcase' },
  { label: 'Projects', href: '#project', icon: 'mdi:folder' },
  { label: 'Contact', href: '#contact', icon: 'mdi:email' },
]

const techIcons = [
  { label: 'Python', icon: 'mdi:language-python' },
  { label: 'Typescript', icon: 'mdi:language-typescript' },
  { label: 'API Design', icon: 'mdi:api' },
  { label: 'Databases', icon: 'mdi:database-outline' },
  { label: 'Google Cloud', icon: 'mdi:cloud-outline' },
  { label: 'Docker', icon: 'mdi:docker' },
]
</script>

<style scoped>
/* Optional: Tweak spacing and scaling for perfect centering */
</style>
