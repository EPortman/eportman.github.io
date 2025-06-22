<template>
  <section class="py-10 px-4">
    <div class="max-w-5xl mx-auto flex flex-col items-center space-y-16 text-textPrimary">
      <h1 class="text-4xl font-bold text-center">About Me</h1>

      <div class="grid md:grid-cols-2 gap-8">
        <SectionAboutSummary />
        <SectionAboutEducation />
      </div>

      <SectionAboutTechStack />
    </div>
  </section>
</template>
