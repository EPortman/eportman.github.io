<template>
  <NuxtParticles id="tsparticles" :options="options" @load="onLoad" />
</template>

<script setup lang="ts">
import type { Container } from '@tsparticles/engine'

/* eslint-disable @typescript-eslint/no-explicit-any */
const options = {
  fpsLimit: 60,
  particles: {
    shape: {
      type: ['circle', 'star'],
      options: {
        star: {
          sides: 5,
        },
      },
    },
    number: { value: 180, density: { enable: true, area: 800 } },
    color: { value: '#ffffff' },
    opacity: {
      value: 0.8,
      random: true,
      anim: {
        enable: true,
        speed: 0.5,
        opacity_min: 0.3,
      },
    },
    size: {
      value: { min: 0.3, max: 1.5 },
      anim: {
        enable: true,
        speed: 1,
        minimumValue: 0.3,
        sync: false,
      },
    },
    move: {
      enable: true,
      speed: 0.3,
      direction: 'none',
      random: true,
      straight: false,
      outModes: { default: 'out' },
    },
    twinkle: {
      particles: {
        enable: true,
        frequency: 0.03,
        opacity: 1,
      },
    },
  },
  interactivity: {
    detectsOn: 'canvas',
    events: { resize: true },
  },
  detectRetina: true,
} as any
// eslint-enable @typescript-eslint/no-explicit-any

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
  background: linear-gradient(180deg, #05080f 0%, #0f1a28 50%, #192337 100%);
}
</style>
