<template>
  <header class="fixed inset-x-0 top-0 z-50 bg-[#0d0d0d]/90 backdrop-blur-md ring-1 ring-white/5">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
      <!-- Branding -->
      <div class="flex items-baseline gap-x-3">
        <h1 class="text-2xl font-bold text-white">
          <span class="text-accent">Ethan</span> Portman
        </h1>
        <span class="text-sm text-gray-400 hidden sm:inline">Full Stack Developer</span>
      </div>

      <!-- Desktop Social Icons -->
      <div class="hidden sm:flex space-x-4">
        <HeaderTopNavBarSocialIcon href="https://github.com/EPortman" label="GitHub" icon="mdi:github" />
        <HeaderTopNavBarSocialIcon href="https://www.linkedin.com/in/ethan-portman-920ab62b0/" label="LinkedIn" icon="mdi:linkedin" />
      </div>

      <!-- Mobile Hamburger -->
      <button
        class="sm:hidden text-gray-400 hover:text-white transition"
        @click="toggleMobileMenu"
        aria-label="Toggle Menu"
      >
        <Icon :icon="mobileOpen ? 'mdi:close' : 'mdi:menu'" class="w-7 h-7" />
      </button>
    </nav>

    <!-- Mobile Dropdown -->
    <transition name="fade">
      <div v-if="mobileOpen" class="absolute right-4 top-[64px] z-40">
        <aside class="w-[280px] max-h-[90vh] bg-[#111111] rounded-xl shadow-2xl border border-[#1a1a1f] p-5">
          <h2 class="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Sections</h2>
          <div class="space-y-2">
            <HeaderTopNavBarMobileNavIcon icon="mdi:account" label="About Me" href="#about" @click="closeMobileMenu" />
            <HeaderTopNavBarMobileNavIcon icon="mdi:briefcase" label="Experience" href="#experience" @click="closeMobileMenu" />
            <HeaderTopNavBarMobileNavIcon icon="mdi:folder" label="Projects" href="#projects" @click="closeMobileMenu" />
            <HeaderTopNavBarMobileNavIcon icon="mdi:email" label="Contact" href="#contact" @click="closeMobileMenu" />
          </div>
          <div class="pt-6 border-t border-[#1a1a1f] mt-4">
            <h2 class="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Socials</h2>
            <div class="flex space-x-3">
              <HeaderTopNavBarSocialIcon href="https://github.com/EPortman" label="GitHub" icon="mdi:github" />
              <HeaderTopNavBarSocialIcon href="https://www.linkedin.com/in/ethan-portman-920ab62b0/" label="LinkedIn" icon="mdi:linkedin" />
            </div>
          </div>
        </aside>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const mobileOpen = ref(false)
const toggleMobileMenu = () => (mobileOpen.value = !mobileOpen.value)
const closeMobileMenu = () => (mobileOpen.value = false)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
