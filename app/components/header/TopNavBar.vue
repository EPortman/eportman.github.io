<template>
  <header class="fixed inset-x-0 top-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10 shadow-sm">
    <nav class="px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
      <!-- Branding on the left -->
      <div class="flex items-baseline gap-x-3">
        <h1 class="text-2xl font-bold text-white"><span class="text-accent">Ethan</span> Portman</h1>
        <span class="text-sm text-gray-400 hidden sm:inline">Full Stack Developer</span>
      </div>

      <!-- Social Icons on the right - desktop -->
      <div class="hidden lg:flex space-x-4">
        <HeaderSocialBtn v-for="link in socialLinks" :key="link.label" v-bind="link" />
      </div>

      <!-- Hamburger on the right - mobile -->
      <button class="lg:hidden text-gray-400 hover:text-white transition" @click="mobileOpen = !mobileOpen">
        <Icon :icon="mobileOpen ? 'mdi:close' : 'mdi:menu'" class="w-7 h-7" />
      </button>
    </nav>

    <!-- Dropdown menu on the right - mobile -->
    <transition name="fade-slide">
      <div v-if="mobileOpen" class="absolute right-4 top-16">
        <aside class="w-72 rounded-2xl p-5 bg-neutral-900 border border-neutral-800 shadow-2xl">
          <h2 class="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Sections</h2>
          <div class="space-y-2">
            <HeaderMobileIconTextLink v-for="link in navLinks" :key="link.label" v-bind="link" @click="closeMobileMenu" />
          </div>
          <div class="pt-4 mt-4 border-t border-neutral-800">
            <h2 class="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Socials</h2>
            <div class="flex space-x-3">
              <HeaderSocialBtn v-for="link in socialLinks" :key="link.label" v-bind="link" />
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
const closeMobileMenu = () => (mobileOpen.value = false)

const navLinks = [
  { href: '#about', label: 'About Me', icon: 'mdi:account' },
  { href: '#experience', label: 'Experience', icon: 'mdi:briefcase' },
  { href: '#project', label: 'Projects', icon: 'mdi:folder' },
  { href: '#contact', label: 'Contact', icon: 'mdi:email' },
]

const socialLinks = [
  { href: 'https://github.com/EPortman', label: 'GitHub', icon: 'mdi:github' },
  { href: 'https://www.linkedin.com/in/ethan-portman-920ab62b0/', label: 'LinkedIn', icon: 'mdi:linkedin' },
]
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.2s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-0.5rem);
}
</style>
