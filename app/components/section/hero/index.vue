<template>
  <section class="hero relative flex items-center justify-center min-h-screen px-4 py-8 text-center">
    <div :class="heroContainerClass">
      <h1 :class="headingClass">Hi, I'm Ethan!</h1>
      <p :class="subTextClass">
        I build software from ideas and caffeine. Let's chat if something here sparks your interest.
      </p>

      <div class="flex flex-wrap justify-center gap-4 pt-2">
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
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import { useThemeStore } from '~/stores/theme'

const themeStore = useThemeStore()
const isDark = computed(() => themeStore.theme === 'dark')

const heroContainerClass = computed(() => {
  return [
    'w-full max-w-2xl mx-auto backdrop-blur-md rounded-xl p-8 flex flex-col items-center space-y-6 transition-all',
    isDark.value
      ? 'bg-black/40 text-white shadow-xl ring-1 ring-white/10'
      : 'bg-white/90 text-black shadow-2xl ring-1 ring-black/10',
  ].join(' ')
})

const headingClass = computed(() => {
  return [
    'text-4xl md:text-6xl font-bold leading-tight transition-all',
    isDark.value ? 'text-white' : 'text-black',
  ].join(' ')
})

const subTextClass = computed(() => {
  return [
    'text-lg md:text-xl max-w-xl leading-relaxed transition-all',
    isDark.value ? 'text-gray-200' : 'text-gray-800',
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
