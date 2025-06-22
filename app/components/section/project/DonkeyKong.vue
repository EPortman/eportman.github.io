<template>
  <article class="mx-auto max-w-3xl p-1 space-y-2">
    <!-- Top row: Title & GitHub Link -->
    <div class="flex items-center justify-between">
      <h1 class="text-2xl md:text-3xl font-bold">Donkey Kong</h1>
      <a
        href="https://github.com/EPortman/Final"
        target="_blank"
        rel="noopener noreferrer"
        class="text-indigo-600 hover:underline text-sm md:text-base"
      >
        View Source on GitHub
      </a>
    </div>

    <!-- Concise Description -->
    <p class="text-sm md:text-base leading-relaxed">
      A Unity-based recreation of the classic Donkey Kong arcade game. This project demonstrates a clean,
      event-driven architecture with a responsive game loop and polished gameplay. It includes animated sprites,
      dynamic sound effects, and custom game logic designed to closely mimic the original experience.
    </p>

    <!-- Tech Stack Section -->
    <div class="text-sm md:text-base space-y-1">
      <h2 class="font-semibold">Tech Stack</h2>
      <ul class="list-disc list-inside leading-relaxed">
        <li>C# &amp; Unity</li>
        <li>Event driven Architecture using custom event dispatchers</li>
      </ul>
    </div>

    <!-- Demo Video with Caption -->
    <figure class="w-full max-w-lg mx-auto">
      <video class="w-full h-auto" controls>
        <source src="/videos/dk_demo.mp4" type="video/mp4" />
      </video>
      <figcaption class="text-center text-sm mt-2 text-gray-500 dark:text-gray-400">
        Demonstration of Gameplay.
      </figcaption>
    </figure>
  </article>
</template>
