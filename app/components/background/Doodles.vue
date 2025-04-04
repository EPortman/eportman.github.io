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
    image: 'url(/textures/paper.jpg)',
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
          // TO_DO: Need 20 more doodles
          { src: '/doodles/arrow.png', width: 80, height: 80, crossOrigin: 'anonymous' },
          { src: '/doodles/bear.png', width: 80, height: 80, crossOrigin: 'anonymous' },
          { src: '/doodles/bread.png', width: 80, height: 80, crossOrigin: 'anonymous' },
          { src: '/doodles/candy.png', width: 80, height: 80, crossOrigin: 'anonymous' },
          { src: '/doodles/chicken.png', width: 80, height: 80, crossOrigin: 'anonymous' },
          { src: '/doodles/clock.png', width: 80, height: 80, crossOrigin: 'anonymous' },
          { src: '/doodles/coffee.png', width: 80, height: 80, crossOrigin: 'anonymous' },
          { src: '/doodles/devil.png', width: 80, height: 80, crossOrigin: 'anonymous' },
          { src: '/doodles/drumstick.png', width: 80, height: 80, crossOrigin: 'anonymous' },
          { src: '/doodles/fern.png', width: 80, height: 80, crossOrigin: 'anonymous' },
          { src: '/doodles/folder.png', width: 80, height: 80, crossOrigin: 'anonymous' },
          { src: '/doodles/lightbulb.png', width: 80, height: 80, crossOrigin: 'anonymous' },
          { src: '/doodles/llama.png', width: 80, height: 80, crossOrigin: 'anonymous' },
          { src: '/doodles/mustache.png', width: 80, height: 80, crossOrigin: 'anonymous' },
          { src: '/doodles/notebook.png', width: 80, height: 80, crossOrigin: 'anonymous' },
          { src: '/doodles/owl.png', width: 80, height: 80, crossOrigin: 'anonymous' },
          { src: '/doodles/pencil.png', width: 80, height: 80, crossOrigin: 'anonymous' },
          { src: '/doodles/star.png', width: 80, height: 80, crossOrigin: 'anonymous' },
          { src: '/doodles/tree.png', width: 80, height: 80, crossOrigin: 'anonymous' },
          { src: '/doodles/wizard_hat.png', width: 80, height: 80, crossOrigin: 'anonymous' },
        ],
      },
    },
    size: {
      value: { min: 25, max: 50 },
    },
    opacity: {
      value: { min: 0.15, max: 0.3 },
    },
    move: {
      enable: true,
      speed: 0.2,
      direction: 'none',
      random: true,
      straight: false,
      outModes: { default: 'out' },
    },
    rotate: {
      animation: {
        enable: true,
        speed: 0.8,
        sync: false,
      },
    },
    collisions: {
      enable: true,
      mode: 'bounce', // Optional: "bounce" or "absorb"
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
  background: #faf8f6;
}
</style>
