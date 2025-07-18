<template>
  <section id="about" class="max-w-7xl py-6 mx-auto px-4 md:px-24">
    <!-- Header -->
    <h1 class="text-3xl font-bold text-center text-accent mb-10">About Me</h1>

    <!-- Grid Layout -->
    <div class="grid gap-6 md:gap-8 lg:gap-10 md:grid-cols-2 lg:grid-cols-3 items-start">
      <!-- Column 1: Tech Stack -->
      <div class="order-2 lg:order-1 space-y-4">
        <h2 class="text-xl font-semibold text-accent mb-2 flex items-center gap-2">
          <Icon icon="mdi:stack-overflow" class="text-accent" />
          Tech Stack
        </h2>
        <div class="grid sm:grid-cols-1 gap-4 text-sm text-gray-300">
          <div v-for="item in techStack" :key="item.title" class="flex gap-3 items-start hover:scale-[1.015] transition-all duration-200 group">
            <Icon :icon="item.icon" class="text-lg mt-1 text-accent" />
            <div>
              <p class="font-semibold text-gray-200">{{ item.title }}</p>
              <p class="text-xs">{{ item.content }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Column 2: Summary + Education -->
      <div class="order-1 lg:order-2 space-y-10">
        <div class="group">
          <h2 class="text-xl font-semibold text-accent mb-2 flex items-center gap-2">
            <Icon icon="mdi:file-document-outline" class="text-accent" />
            Summary
          </h2>
          <p class="text-sm leading-relaxed text-gray-300">
            I'm a full-stack developer with a backend focus—specializing in scalable APIs, cloud infrastructure, and clean, maintainable architecture. I enjoy simplifying complex problems and thrive in collaborative teams that value clarity, pragmatism, and continuous improvement.
          </p>
        </div>

        <div class="group transition-all duration-300">
          <h2 class="text-xl font-semibold text-accent mb-2 flex items-center gap-2">
            <Icon icon="mdi:school-outline" class="text-accent" />
            Education
          </h2>
          <div class="space-y-5 text-sm md:text-base text-gray-300">
            <div v-for="(edu, i) in education" :key="i" class="flex gap-2 items-start hover:scale-[1.015] transition-all duration-200">
              <Icon icon="mdi:school" class="text-accent mt-1 transition-transform" />
              <div>
                <p class="text-white">{{ edu.institution }}</p>
                <p class="text-xs italic">{{ edu.program }}</p>
                <p class="text-xs text-gray-400">{{ edu.years }} • GPA: {{ edu.gpa }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Column 3: Awards -->
      <div class="order-4 lg:order-3 space-y-4">
        <h2 class="text-xl font-semibold text-accent mb-4 flex items-center gap-2">
          <Icon icon="mdi:trophy-outline" class="text-accent transition-transform group-hover:scale-105" />
          Awards & Recognition
        </h2>
        <ul class="space-y-5 text-sm md:text-base text-gray-300">
          <li v-for="(award, i) in awards" :key="i" class="flex gap-3 items-start hover:scale-[1.015] transition-all duration-200 group">
            <Icon icon="mdi:star" class="text-accent mt-1 group-hover:scale-110 transition-transform" />
            <div>
              <p class="text-white font-medium group-hover:text-white transition-colors">{{ award.title }}</p>
              <p class="text-xs text-gray-400">{{ award.description }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

const techStack = [
  { icon: 'mdi:code-tags', title: 'Languages', content: 'Python, TypeScript, C++, C#' },
  { icon: 'mdi:cloud-outline', title: 'Cloud & Infrastructure', content: 'GCP, Openshift, AWS, Kubernetes' },
  { icon: 'mdi:api', title: 'Backend & APIs', content: 'Flask, Django, FastAPI, Keycloak' },
  { icon: 'mdi:database-outline', title: 'Databases & Data', content: 'PostgreSQL, Oracle, MongoDB' },
  { icon: 'mdi:gear-outline', title: 'DevOps & CI/CD', content: 'GitHub Actions, Docker' },
  { icon: 'mdi:paint-outline', title: 'Frontend / UI', content: 'Vue 3, Nuxt, Tailwind, React' },
  { icon: 'mdi:robot-outline', title: 'AI & ML', content: 'TensorFlow, Scikit-learn, OpenCV' },
  { icon: 'mdi:tools', title: 'Tooling & Productivity', content: 'VS Code, Postman, Version Control' },
  { icon: 'mdi:account-group-outline', title: 'Agile & Collaboration', content: 'Agile Methodologies, Scrum/Kanban' },
]

const education = [
  {
    institution: 'Camosun College',
    program: 'Diploma in Computer Science',
    years: '2022 - 2025',
    gpa: '8.6 / 9.0',
  },
  {
    institution: 'University of British Columbia',
    program: 'Bachelor of Kinesiology',
    years: '2014 - 2018',
    gpa: '3.8 / 4.3',
  },
]

const awards = [
  {
    title: 'Victoria Innovation & Entrepreneurship Award',
    description: 'Camosun award for emerging tech talent - 2025',
  },
  {
    title: 'Professional Development Award',
    description: 'Granted during BC Gov internship for contributions - 2025',
  },
  {
    title: 'UBC Leadership Award',
    description: 'Awarded for student leadership in varsity athletics - 2018',
  },
  {
    title: "Dean's Honour Roll — Camosun",
    description: 'Recognized every semester from 2022-2025',
  },
  {
    title: '1 Million Trees Award',
    description: 'Recognized for planting over 1 million trees across BC and Alberta',
  },
]
</script>

<style scoped>
@keyframes custom-fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
