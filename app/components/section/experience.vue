<template>
  <section id="experience" class="max-w-7xl mx-auto px-4 lg:px-24 py-6">
    <!-- Header -->
    <h2 class="text-3xl font-bold text-center text-green-500 mb-10">Experience</h2>

    <!-- BC Registries -->
    <div class="mb-10">
      <h3 class="text-xl text-green-500 font-semibold flex items-center gap-2 mb-1">
        <Icon icon="mdi:domain" class="text-green-400" />
        BC Registries and Online Services
      </h3>
      <p class="text-sm font-medium text-gray-400">Application Developer</p>
      <p class="text-sm text-gray-400 mb-4">May 2024 - Present | Victoria, BC</p>
      <p class="text-gray-300 mb-4">Supporting critical registry systems by developing Flask APIs, integrating Nuxt frontends, and deploying infrastructure with Google Cloud. Focused on modernization, scalability, and test-driven development.</p>
      <ul class="space-y-2 text-gray-200">
        <li class="flex items-start gap-2">
          <Icon icon="mdi:cloud-sync-outline" class="text-green-400 pt-1" />
          <span>Modernized legacy deployments by migrating from OpenShift to Google Cloud Run, improving scalability and developer workflows.</span>
        </li>
        <li class="flex items-start gap-2">
          <Icon icon="mdi:bug-check-outline" class="text-green-400 pt-1" />
          <span>Implemented Cypress smoke tests and GitHub Actions pipelines to improve test coverage and automate quality assurance across pull requests.</span>
        </li>
        <li class="flex items-start gap-2">
          <Icon icon="mdi:file-document-multiple-outline" class="text-green-400 pt-1" />
          <span>Redesigned multi-report filing architecture across Nuxt frontend and Flask backend for improved user experience and maintainability.</span>
        </li>
        <li class="flex items-start gap-2">
          <Icon icon="mdi:bug-outline" class="text-green-400 pt-1" />
          <span>Diagnosed and resolved production bugs using Jupyter Notebooks, reducing client-side issue resolution time from hours to minutes.</span>
        </li>
        <li class="flex items-start gap-2">
          <Icon icon="mdi:account-group-outline" class="text-green-400 pt-1" />
          <span>Contributed to Agile ceremonies, sprint planning, and weekly demos to align team priorities and deliver value iteratively.</span>
        </li>
      </ul>
    </div>

    <!-- Other roles -->
    <div class="grid md:grid-cols-3 gap-10">
      <div>
        <h3 class="text-green-400 text-lg font-semibold flex items-center gap-2 mb-1">
          <Icon icon="mdi:pine-tree" class="text-green-300" />
          Artisan Reforestation
        </h3>
        <p class="text-sm text-gray-400">Tree Planter / Crew Boss</p>
        <p class="text-xs text-gray-400 mb-2">2017 - 2024 | BC Interior</p>
        <p class="text-gray-200 text-sm">Planted over one million trees in remote terrain while managing a 6-person crew. Consistently exceeded daily targets and adapted to harsh environmental conditions under high-pressure timelines.</p>
      </div>

      <div>
        <h3 class="text-green-400 text-lg font-semibold flex items-center gap-2 mb-1">
          <Icon icon="mdi:bug" class="text-green-300" />
          Tom Scott Enterprises
        </h3>
        <p class="text-sm text-gray-400">Mountain Pine Beetle Control</p>
        <p class="text-xs text-gray-400 mb-2">2019 - 2021 | Remote AB</p>
        <p class="text-gray-200 text-sm">Located, felled, and burned beetle-infested trees across Alberta to contain the pine beetle's spread. Worked independently in remote environments with strict safety protocols.</p>
      </div>

      <div>
        <h3 class="text-green-400 text-lg font-semibold flex items-center gap-2 mb-1">
          <Icon icon="mdi:first-aid-kit" class="text-green-300" />
          Octane Safety Services
        </h3>
        <p class="text-sm text-gray-400">Industrial Medic</p>
        <p class="text-xs text-gray-400 mb-2">2019 - 2021 | Remote AB</p>
        <p class="text-gray-200 text-sm">Delivered emergency medical care and first response in high-risk industrial sites. Ensured rapid incident response and adherence to site safety compliance protocols.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
