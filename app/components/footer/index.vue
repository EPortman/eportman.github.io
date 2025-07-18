<template>
  <footer class="w-full border-t border-gray-800 py-4 text-xs text-gray-500 text-center">
    <div class="flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-4">
      <p class="text-gray-400 font-medium">© {{ currentYear }} Ethan Portman</p>
      <div class="flex items-center gap-2 text-gray-400">
        <div class="flex items-center gap-1">
          <IconNuxt class="w-4 h-4 text-accent" />
          <span>Nuxt 3</span>
        </div>
        <span class="hidden sm:block w-px h-4 bg-gray-700"></span>
        <div class="flex items-center gap-1">
          <IconTailwind class="w-4 h-4 text-teal-400" />
          <span>Tailwind CSS</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import IconNuxt from '~icons/simple-icons/nuxtdotjs'
import IconTailwind from '~icons/simple-icons/tailwindcss'

const currentYear = new Date().getFullYear()
</script>
