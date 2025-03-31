<template>
  <!-- A full-screen hero, but transparent so the stars show through -->
  <section class="flex flex-col items-center justify-center min-h-screen text-center px-4">
    <h1 class="text-4xl md:text-6xl font-bold text-white mb-4">Hey there, I'm [Your Name]!</h1>
    <p class="text-lg md:text-xl text-gray-200 max-w-2xl mb-8">
      I'm a [Your Role or Specialty] with a passion for [Your Interests]. Welcome to my corner of the web—explore my
      projects, learn more about my journey, and feel free to get in touch if you'd like to collaborate!
    </p>
    <NuxtLink to="/projects" class="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-full transition-colors">
      View My Projects
    </NuxtLink>
  </section>
</template>

<script setup lang="ts">
// No additional logic needed unless you want props or interactivity
</script>

<style scoped>
/* Remove any background styles that might block the starry sky. */
</style>
