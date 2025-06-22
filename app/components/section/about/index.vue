<template>
  <section class="px-4 py-10 text-textPrimary">
    <div class="max-w-7xl mx-auto px-4 lg:px-24 space-y-12">
      <!-- Header -->
      <h1 class="text-3xl font-bold text-center text-green-500">About Me</h1>

      <!-- Grid Layout -->
      <div class="grid lg:grid-cols-3 gap-10">
        <!-- Column 1: Tech Stack -->
        <div class="order-2 lg:order-1">
          <h2 class="text-xl font-semibold text-green-400 mb-4">Tech Stack</h2>
          <div class="grid sm:grid-cols-1 gap-4 text-sm text-gray-300">
            <div v-for="item in techStack" :key="item.title" class="flex gap-3 items-start">
              <Icon :icon="item.icon" class="text-lg mt-1 text-green-400" />
              <div>
                <p class="font-semibold text-gray-200">{{ item.title }}</p>
                <p>{{ item.content }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Column 2: Summary + Education -->
        <div class="order-1 lg:order-2 space-y-10">
          <div>
            <h2 class="text-xl font-semibold text-green-400 mb-2">Summary</h2>
            <p class="text-sm leading-relaxed text-gray-300">
              I’m a full-stack developer with a backend focus—specializing in scalable APIs, cloud infrastructure, and clean, maintainable architecture.
              I enjoy simplifying complex problems and thrive in collaborative teams that value clarity, pragmatism, and continuous improvement.
            </p>
          </div>

          <div class="order-3 lg:order-3">
            <h2 class="text-xl font-semibold text-green-400 mb-4">Education</h2>
            <div class="space-y-5 text-sm text-gray-300">
              <div>
                <p class="text-white font-medium text-base">Camosun College</p>
                <p class="italic">Computer Science</p>
                <p class="text-xs text-gray-400">2022 – 2025 • GPA: 8.6 / 9.0</p>
                <a href="#" class="text-xs text-green-400 hover:underline">Download Transcript</a>
              </div>
              <div>
                <p class="text-white font-medium text-base">University of British Columbia</p>
                <p class="italic">Bachelor of Kinesiology</p>
                <p class="text-xs text-gray-400">2014 – 2018 • GPA: 3.8 / 4.3</p>
                <a href="#" class="text-xs text-green-400 hover:underline">Download Transcript</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Column 3: Awards -->
        <div class="order-4 lg:order-4">
          <h2 class="text-xl font-semibold text-green-400 mb-4">Awards & Recognition</h2>
          <ul class="space-y-4 text-sm text-gray-300">
            <li>
              <p class="text-white font-medium">Victoria Innovation & Entrepreneurship Award (2025)</p>
              <p class="text-xs text-gray-400">Camosun award ($1,000) for emerging tech talent</p>
            </li>
            <li>
              <p class="text-white font-medium">Professional Development Award (2025)</p>
              <p class="text-xs text-gray-400">Granted during BC Gov internship for contributions</p>
            </li>
            <li>
              <p class="text-white font-medium">UBC Leadership Award (2018)</p>
              <p class="text-xs text-gray-400">Awarded for student leadership in varsity athletics</p>
            </li>
            <li>
              <p class="text-white font-medium">Dean’s Honour Roll — Camosun</p>
              <p class="text-xs text-gray-400">Recognized every semester from 2022–2025</p>
            </li>
            <li>
              <p class="text-white font-medium">1 Million Trees Award</p>
              <p class="text-xs text-gray-400">Recognized for planting over 1 million trees across BC and Alberta</p>
            </li>
          </ul>
        </div>
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
  { icon: 'mdi:database', title: 'Databases & Data', content: 'PostgreSQL, Oracle, MongoDB' },
  { icon: 'mdi:cog', title: 'DevOps & CI/CD', content: 'GitHub Actions, Docker' },
  { icon: 'mdi:palette', title: 'Frontend / UI', content: 'Vue 3, Nuxt, Tailwind, React' },
  { icon: 'mdi:robot', title: 'AI & ML', content: 'TensorFlow, Scikit-learn, OpenCV' },
  { icon: 'mdi:tools', title: 'Tooling & Productivity', content: 'VS Code, Postman, Version Control' },
  { icon: 'mdi:account-group-outline', title: 'Agile & Collaboration', content: 'Agile Methodologies, Scrum/Kanban' },
]
</script>
