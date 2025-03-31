<template>
  <section class="hero relative flex items-center justify-center min-h-screen px-4 py-8 text-center">
    <!-- Glassy Container -->
    <div
      class="hero-content w-full max-w-2xl mx-auto bg-black/40 backdrop-blur-md rounded-xl shadow-xl p-8 flex flex-col items-center space-y-6"
    >
      <h1 class="text-4xl md:text-6xl font-bold text-white leading-tight">Hi, I'm Ethan!</h1>
      <p class="text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed">
        I build software from ideas and caffeine. Let's chat if something here sparks your interest.
      </p>

      <!-- Button Row -->
      <div class="flex flex-wrap justify-center gap-4 pt-2">
        <!-- About Me -->
        <NuxtLink class="hero-btn" title="About Me">
          <Icon icon="mdi:account" class="icon mr-2" />
          About Me
        </NuxtLink>

        <!-- Experience -->
        <NuxtLink class="hero-btn" title="Experience">
          <Icon icon="mdi:briefcase" class="icon mr-2" />
          Experience
        </NuxtLink>

        <!-- Projects -->
        <NuxtLink class="hero-btn" title="Projects">
          <Icon icon="mdi:folder" class="icon mr-2" />
          Projects
        </NuxtLink>

        <!-- Contact -->
        <NuxtLink class="hero-btn" title="Contact">
          <Icon icon="mdi:email" class="icon mr-2" />
          Contact
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<style scoped>
.hero {
  /* Keep background transparent to showcase the starry sky. */
}

/* Glassy container styling is mostly handled by Tailwind classes. */

/* Buttons: subtle gray gradient and a softer hover effect */
.hero-btn {
  @apply inline-flex items-center px-5 py-3
    font-medium text-white
    rounded-full transition-all
    bg-gradient-to-r from-gray-600 to-gray-700
    hover:from-gray-500 hover:to-gray-600
    shadow-md hover:shadow-lg;
}

.hero-btn:hover {
  transform: translateY(-2px);
}

/* Icon styling */
.icon {
  width: 1.2rem;
  height: 1.2rem;
}
</style>
