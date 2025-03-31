<template>
  <header class="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 z-10">
    <!-- Left side: Home icon bubble with tooltip "Home" -->
    <NuxtLink to="/" class="icon-bubble" data-tooltip="Home">
      <Icon icon="mdi:home" class="icon" />
    </NuxtLink>

    <!-- Right side: Other icons -->
    <nav class="flex items-center space-x-4">
      <!-- About / Work -->
      <NuxtLink to="/about" class="icon-bubble" data-tooltip="About">
        <Icon icon="mdi:briefcase" class="icon" />
      </NuxtLink>

      <!-- Projects -->
      <NuxtLink to="/projects" class="icon-bubble" data-tooltip="Projects">
        <Icon icon="mdi:folder" class="icon" />
      </NuxtLink>

      <!-- Contact / Mail -->
      <NuxtLink to="/contact" class="icon-bubble" data-tooltip="Contact">
        <Icon icon="mdi:email" class="icon" />
      </NuxtLink>

      <!-- GitHub -->
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener"
        class="icon-bubble"
        data-tooltip="GitHub"
      >
        <Icon icon="simple-icons:github" class="icon" />
      </a>

      <!-- LinkedIn -->
      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener"
        class="icon-bubble"
        data-tooltip="LinkedIn"
      >
        <Icon icon="simple-icons:linkedin" class="icon" />
      </a>

      <!-- Dark Mode Toggle -->
      <button class="icon-bubble focus:outline-none" data-tooltip="Toggle Theme" @click="toggleTheme">
        <Icon icon="mdi:moon-waning-crescent" class="icon" />
      </button>
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
/* Transparent header so the background shows */
header {
  background: transparent;
}

/* Icon bubble wrapper with glassmorphism */
.icon-bubble {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition:
    transform 0.25s,
    box-shadow 0.25s,
    background-color 0.25s;
  cursor: pointer;
}

/* Hover effect */
.icon-bubble:hover {
  transform: translateY(-3px);
  background: rgba(255, 255, 255, 0.2);
  box-shadow:
    0 6px 16px rgba(255, 255, 255, 0.15),
    0 6px 16px rgba(0, 0, 0, 0.4);
}

/* The icon styling */
.icon {
  width: 1.5rem;
  height: 1.5rem;
  color: #e0e0e0;
  text-shadow: 0 0 4px rgba(224, 224, 224, 0.4);
}

/* Tooltip styling - now positioned below the bubble */
.icon-bubble::before {
  content: attr(data-tooltip);
  position: absolute;
  top: calc(100% + 6px); /* Position below the bubble */
  left: 50%;
  transform: translateX(-50%) translateY(-5px); /* Start slightly lower, then animate upward on hover */
  opacity: 0;
  visibility: hidden;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 0.3rem 0.6rem;
  font-size: 0.75rem;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  transition:
    opacity 0.2s,
    transform 0.2s,
    visibility 0.2s;
  z-index: 20;
}

/* Tooltip arrow */
.icon-bubble::after {
  content: '';
  position: absolute;
  top: 100%; /* Arrow at the bottom of the bubble */
  left: 50%;
  transform: translateX(-50%);
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid rgba(0, 0, 0, 0.8);
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.2s,
    visibility 0.2s;
  z-index: 20;
}

/* Show tooltip on hover */
.icon-bubble:hover::before,
.icon-bubble:hover::after {
  opacity: 1;
  visibility: visible;
}

.icon-bubble:hover::before {
  transform: translateX(-50%) translateY(0);
}
</style>
