<template>
  <section class="flex items-center justify-center min-h-screen px-4">
    <div :class="heroContainerClass">
      <div :class="heroCardClasses">
        <h1
          :class="[isDark ? 'text-white' : 'text-black', 'text-4xl md:text-6xl font-bold leading-tight transition-all']"
        >
          Hi, I'm Ethan!
        </h1>
        <p class="text-lg md:text-xl max-w-xl mx-auto">
          I build software from ideas and caffeine. Let's chat if something here sparks your interest.
        </p>

        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink :class="heroBtnClass" to="#about" title="About Me">
            <Icon icon="mdi:account" class="w-[1.2rem] h-[1.2rem] mr-2" />
            About Me
          </NuxtLink>

          <NuxtLink :class="heroBtnClass" to="#experience" title="Experience">
            <Icon icon="mdi:briefcase" class="w-[1.2rem] h-[1.2rem] mr-2" />
            Experience
          </NuxtLink>

          <NuxtLink :class="heroBtnClass" to="#project" title="Projects">
            <Icon icon="mdi:folder" class="w-[1.2rem] h-[1.2rem] mr-2" />
            Projects
          </NuxtLink>

          <NuxtLink :class="heroBtnClass" to="#contact" title="Contact">
            <Icon icon="mdi:email" class="w-[1.2rem] h-[1.2rem] mr-2" />
            Contact
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import { useThemeStore } from '~/stores/theme'

const themeStore = useThemeStore()
const isDark = computed(() => themeStore.theme === 'dark')

const heroContainerClass = computed(() => {
  return ['max-w-3xl w-full mx-auto text-center', isDark.value ? 'text-gray-300' : 'text-gray-700'].join(' ')
})

const heroCardClasses = computed(() => {
  return [
    'p-8 md:p-12 space-y-6 backdrop-blur-md rounded-xl transform hover:-translate-y-1 hover:shadow-lg duration-300 ease-in-out leading-relaxed',
    isDark.value ? 'bg-black/40 shadow-xl ring-1 ring-white/10' : 'bg-white/90 shadow-2xl ring-1 ring-black/10',
  ].join(' ')
})

const heroBtnClass = computed(() => {
  return [
    'inline-flex items-center px-5 py-3 font-medium rounded-full transition-all shadow-md',
    'hover:shadow-lg transform hover:-translate-y-[2px] bg-gradient-to-r',
    isDark.value
      ? 'text-white from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600'
      : 'text-black from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400',
  ].join(' ')
})
</script>
