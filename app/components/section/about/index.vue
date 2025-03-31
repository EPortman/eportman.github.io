<template>
  <section class="about-section py-20 px-4">
    <div class="container mx-auto flex flex-col items-center space-y-16">
      <!-- Section Title -->
      <h2 class="text-4xl font-bold text-white text-center animate-fade-in">About Me</h2>

      <!-- Summary & Education -->
      <div class="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
        <SectionAboutSummary />
        <SectionAboutEducation />
      </div>

      <!-- Tech Stack -->
      <SectionAboutTechStack />
    </div>
  </section>
</template>
