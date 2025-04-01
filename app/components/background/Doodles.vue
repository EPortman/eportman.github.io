<template>
  <ClientOnly>
    <NuxtParticles id="tsparticles" :options="options" :init="particlesInit" />
  </ClientOnly>
</template>

<script setup lang="ts">
import { loadFull } from 'tsparticles'
import { loadImageShape } from '@tsparticles/shape-image'
import type { Engine } from '@tsparticles/engine'

/* eslint-disable @typescript-eslint/no-explicit-any */
const options = {
  fpsLimit: 60,
  background: {
    image: 'url(/OLD_PAPER_TEXTURE.jpg)',
    size: 'cover',
    position: 'center center',
    repeat: 'no-repeat',
  },
  particles: {
    number: {
      value: 40,
      density: { enable: false },
    },
    shape: {
      type: 'image',
      options: {
        image: [
          { src: '/bear_doodle.png', width: 80, height: 80, crossOrigin: 'anonymous' },
          { src: '/chicken_doodle.png', width: 80, height: 80, crossOrigin: 'anonymous' },
          { src: '/coffee_doodle.png', width: 80, height: 80, crossOrigin: 'anonymous' },
          { src: '/devil_doodle.png', width: 80, height: 80, crossOrigin: 'anonymous' },
          { src: '/lightbulb_doodle.png', width: 80, height: 80, crossOrigin: 'anonymous' },
          { src: '/llama_doodle.png', width: 80, height: 80, crossOrigin: 'anonymous' },
          { src: '/mustache_doodle.png', width: 80, height: 80, crossOrigin: 'anonymous' },
          { src: '/notebook_doodle.png', width: 80, height: 80, crossOrigin: 'anonymous' },
          { src: '/owl_doodle.png', width: 80, height: 80, crossOrigin: 'anonymous' },
          { src: '/pencil_doodle.png', width: 80, height: 80, crossOrigin: 'anonymous' },
        ],
      },
    },
    size: {
      // Slightly bigger: random size between 25px and 50px
      value: { min: 25, max: 50 },
    },
    opacity: {
      // More visible: random between 0.15 and 0.30
      value: { min: 0.15, max: 0.3 },
    },
    move: {
      enable: true,
      // Gentle drifting
      speed: 0.2,
      direction: 'none',
      random: true,
      straight: false,
      outModes: { default: 'out' },
    },
    rotate: {
      animation: {
        enable: true,
        // Slow rotation
        speed: 0.8,
        sync: false,
      },
    },
  },
  interactivity: {
    events: {
      resize: true,
    },
  },
  detectRetina: true,
} as any
// eslint-enable @typescript-eslint/no-explicit-any

async function particlesInit(engine: Engine) {
  await loadFull(engine)
  await loadImageShape(engine)
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
  /* Fallback background if the paper texture fails to load */
  background: #faf8f6;
}
</style>
