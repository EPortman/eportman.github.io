<template>
  <div>
    <Header />
    <div class="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <client-only>
        <section id="hero" class="snap-center h-screen">
          <SectionHero />
        </section>
      </client-only>

      <client-only>
        <section id="about" class="snap-center min-h-screen">
          <SectionAbout />
        </section>
      </client-only>

      <client-only>
        <section id="experience" class="snap-center min-h-screen">
          <SectionExperience />
        </section>
      </client-only>

      <client-only>
        <section id="project" class="snap-center min-h-screen">
          <SectionProject />
        </section>
      </client-only>

      <client-only>
        <section id="contact" class="snap-center min-h-screen">
          <SectionContact />
        </section>
      </client-only>
    </div>
  </div>
</template>
