<template>
  <article class="mx-auto max-w-3xl p-1 space-y-2">
    <!-- Top row: Title & GitHub Link -->
    <div class="flex items-center justify-between">
      <h1 class="text-2xl md:text-3xl font-bold">Flappy Trainer</h1>
      <a
        href="https://github.com/EPortman/flappy-trainer"
        target="_blank"
        rel="noopener noreferrer"
        class="text-indigo-600 hover:underline text-sm md:text-base"
      >
        View Source on GitHub
      </a>
    </div>

    <!-- Concise Description -->
    <p class="text-sm md:text-base leading-relaxed">
      A Python &amp; Pygame project that trains an AI agent to master a custom Flappy Bird clone
      using TensorFlow Q-learning. Features animated sprites and a curricula-based approach
      to incrementally increase difficulty, demonstrating advanced reinforcement learning
      techniques.
    </p>

    <!-- Tech Stack Section -->
    <div class="text-sm md:text-base space-y-1">
      <h2 class="font-semibold">Tech Stack</h2>
      <ul class="list-disc list-inside leading-relaxed">
        <li>Python &amp; Pygame</li>
        <li>TensorFlow (Q-learning)</li>
        <li>Curricula-based training &amp; animated sprites</li>
      </ul>
    </div>

    <!-- Demo Video with Caption -->
    <figure class="w-full max-w-lg mx-auto">
      <video class="w-full h-auto" controls>
        <source src="/videos/flappy_trainer.mp4" type="video/mp4" />
      </video>
      <figcaption class="text-center text-sm mt-2 text-gray-500 dark:text-gray-400">
        Demonstration of the AI model autonomously navigating Flappy Bird.
      </figcaption>
    </figure>
  </article>
</template>
