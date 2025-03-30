<template>
  <NuxtParticles id="tsparticles" :options="options" @load="onLoad"></NuxtParticles>
</template>

<script setup lang="ts">
import type { Container } from '@tsparticles/engine'

/* eslint-disable @typescript-eslint/no-explicit-any */
const options = {
  fpsLimit: 60,
  particles: {
    number: { value: 100, density: { enable: true, area: 800 } },
    color: { value: '#ffffff' },
    shape: { type: 'circle' },
    opacity: {
      value: 0.8,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0.3 },
    },
    size: { value: { min: 1, max: 3 } },
    move: {
      enable: true,
      speed: 0.2,
      direction: 'none',
      random: true,
      straight: false,
      outModes: { default: 'out' },
    },
  },
  interactivity: { detectsOn: 'canvas', events: { resize: true } },
  detectRetina: true,
} as any
/* eslint-enable @typescript-eslint/no-explicit-any */

const onLoad = (container: Container) => {
  container.pause()
  setTimeout(() => container.play(), 2000)
}
</script>

<style scoped>
#tsparticles {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: #000;
}
</style>
