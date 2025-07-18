<template>
  <section id="project" class="pt-10 pb-8 px-6 max-w-6xl mx-auto space-y-8">
    <h2 class="text-4xl font-extrabold text-center text-accent">Projects</h2>

    <!-- Tab Buttons -->
    <div class="flex justify-center gap-2 mb-3">
      <button
        :class="[
          'group relative px-5 py-2 rounded-xl font-semibold transition-all duration-200 ring-1 ring-border backdrop-blur-md',
          selectedProject === 'flappy' ? 'bg-accent text-white shadow-md scale-105' : 'bg-surface/60 text-gray-400 hover:text-white hover:ring-accent hover:shadow-[0_0_0.5rem_#22c55e66]',
        ]"
        @click="selectedProject = 'flappy'"
      >
        Flappy Trainer
      </button>
      <button
        :class="[
          'group relative px-5 py-2 rounded-xl font-semibold transition-all duration-200 ring-1 ring-border backdrop-blur-md',
          selectedProject === 'dk' ? 'bg-accent text-white shadow-md scale-105' : 'bg-surface/60 text-gray-400 hover:text-white hover:ring-accent hover:shadow-[0_0_0.5rem_#22c55e66]',
        ]"
        @click="selectedProject = 'dk'"
      >
        Donkey Kong
      </button>
    </div>

    <!-- Project Display -->
    <div v-if="selectedProject === 'flappy'" class="flex flex-col md:flex-row items-start gap-10">
      <figure class="w-full md:w-1/2">
        <video class="rounded-lg w-full shadow-lg" controls>
          <source src="/videos/flappy_trainer.mp4" type="video/mp4" />
        </video>
        <figcaption class="text-center text-sm mt-2 text-gray-400">Demonstration of the AI model autonomously navigating Flappy Bird.</figcaption>
      </figure>
      <div class="w-full md:w-1/2 space-y-4">
        <div class="flex items-center justify-between">
          <h3 class="text-2xl font-bold text-accent">Flappy Trainer</h3>
          <a href="https://github.com/EPortman/flappy-trainer" target="_blank" rel="noopener noreferrer" class="text-indigo-400 text-sm hover:underline"> View Source on GitHub </a>
        </div>
        <p class="text-gray-300 leading-relaxed text-sm md:text-base">
          A Python & Pygame project that trains an AI agent to master a custom Flappy Bird clone using TensorFlow Q-learning. Features a curricula-based approach to incrementally increase difficulty, demonstrating advanced reinforcement learning techniques.
        </p>
        <div>
          <h4 class="font-semibold text-gray-300">Tech Stack</h4>
          <ul class="list-disc list-inside text-gray-200 text-sm md:text-base space-y-1">
            <li>Python & Pygame</li>
            <li>TensorFlow (Q-learning)</li>
          </ul>
        </div>
      </div>
    </div>

    <div v-else class="flex flex-col md:flex-row items-start gap-10">
      <figure class="w-full md:w-1/2">
        <video class="rounded-lg w-full shadow-lg" controls>
          <source src="/videos/dk_demo.mp4" type="video/mp4" />
        </video>
        <figcaption class="text-center text-sm mt-2 text-gray-400">Demonstration of gameplay.</figcaption>
      </figure>
      <div class="w-full md:w-1/2 space-y-4">
        <div class="flex items-center justify-between">
          <h3 class="text-2xl font-bold text-accent">Donkey Kong</h3>
          <a href="https://github.com/EPortman/Final" target="_blank" rel="noopener noreferrer" class="text-indigo-400 text-sm hover:underline"> View Source on GitHub </a>
        </div>
        <p class="text-gray-300 leading-relaxed text-sm md:text-base">
          A Unity-based recreation of the classic Donkey Kong arcade game. This project demonstrates a clean, event-driven architecture with a responsive game loop and polished gameplay. It includes rigid-body physics, models, animations, dynamic sound effects, and custom game logic designed to
          closely mimic the original experience.
        </p>
        <div>
          <h4 class="font-semibold text-gray-300">Tech Stack</h4>
          <ul class="list-disc list-inside text-gray-200 text-sm md:text-base space-y-1">
            <li>Unity Game Engine</li>
            <li>C#</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const selectedProject = ref('flappy')
</script>
