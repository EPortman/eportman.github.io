<template>
  <section class="hero relative flex items-center justify-center min-h-screen px-4 py-8 text-center">
    <!-- Glassy Container -->
    <div :class="heroContainerClass">
      <h1 :class="headingClass">Hi, I'm Ethan!</h1>
      <p :class="subTextClass">
        I build software from ideas and caffeine. Let's chat if something here sparks your interest.
      </p>

      <!-- Button Row -->
      <div class="flex flex-wrap justify-center gap-4 pt-2">
        <!-- About Me -->
        <NuxtLink :class="heroBtnClass" title="About Me">
          <Icon icon="mdi:account" class="icon mr-2" />
          About Me
        </NuxtLink>

        <!-- Experience -->
        <NuxtLink :class="heroBtnClass" title="Experience">
          <Icon icon="mdi:briefcase" class="icon mr-2" />
          Experience
        </NuxtLink>

        <!-- Projects -->
        <NuxtLink :class="heroBtnClass" title="Projects">
          <Icon icon="mdi:folder" class="icon mr-2" />
          Projects
        </NuxtLink>

        <!-- Contact -->
        <NuxtLink :class="heroBtnClass" title="Contact">
          <Icon icon="mdi:email" class="icon mr-2" />
          Contact
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import { useThemeStore } from '~/stores/theme'

// Access the Pinia store to see if we are in dark or light mode
const themeStore = useThemeStore()
const isDark = computed(() => themeStore.theme === 'dark')

// Container classes
const heroContainerClass = computed(() => {
  // Shared base classes for the container
  const base = [
    'w-full max-w-2xl mx-auto',
    'backdrop-blur-md rounded-xl',
    'p-8 flex flex-col items-center space-y-6',
    'transition-all',
  ]

  if (isDark.value) {
    // Dark Mode
    return [
      ...base,
      'bg-black/40', // semi-transparent black
      'text-white', // text color
      'shadow-xl', // decent shadow
      'ring-1 ring-white/10', // subtle ring for definition
    ]
  } else {
    // Light Mode
    return [
      ...base,
      'bg-white/90', // more opaque to pop out on light background
      'text-black',
      'shadow-2xl', // stronger shadow for contrast
      'ring-1 ring-black/10', // subtle ring for definition
    ]
  }
})

// Heading text
const headingClass = computed(() => {
  return ['text-4xl md:text-6xl font-bold leading-tight transition-all', isDark.value ? 'text-white' : 'text-black']
})

// Subtext
const subTextClass = computed(() => {
  return [
    'text-lg md:text-xl max-w-xl leading-relaxed transition-all',
    isDark.value ? 'text-gray-200' : 'text-gray-800',
  ]
})

// Button styling
const heroBtnClass = computed(() => {
  if (isDark.value) {
    // Dark mode buttons
    return ['hero-btn-dark']
  } else {
    // Light mode buttons
    return ['hero-btn-light']
  }
})
</script>

<style scoped>
.hero {
  /* Keep background transparent so the starry or paper background shows through. */
}

/* Icon styling */
.icon {
  width: 1.2rem;
  height: 1.2rem;
}

/* == Dark Mode Button == */
.hero-btn-dark {
  @apply inline-flex items-center px-5 py-3
    font-medium text-white
    rounded-full transition-all
    bg-gradient-to-r from-gray-600 to-gray-700
    hover:from-gray-500 hover:to-gray-600
    shadow-md hover:shadow-lg;
}
.hero-btn-dark:hover {
  transform: translateY(-2px);
}

/* == Light Mode Button == */
.hero-btn-light {
  @apply inline-flex items-center px-5 py-3
    font-medium text-black
    rounded-full transition-all
    bg-gradient-to-r from-gray-200 to-gray-300
    hover:from-gray-300 hover:to-gray-400
    shadow-md hover:shadow-lg;
}
.hero-btn-light:hover {
  transform: translateY(-2px);
}
</style>
