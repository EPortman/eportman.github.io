<template>
  <div class="card">
    <h3 class="card-title">Education</h3>
    <div class="text-gray-300 space-y-4 text-sm">
      <div>
        <p class="text-white font-medium">Camosun College</p>
        <p class="italic">Diploma in Info & Computer Systems — 2022-2025</p>
      </div>
      <div>
        <p class="text-white font-medium">University of British Columbia</p>
        <p class="italic">Bachelor of Kinesiology — 2014-2018</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  @apply bg-black/40 backdrop-blur-md rounded-lg p-6 shadow-md space-y-4;
}
.card-title {
  @apply text-xl font-semibold text-white;
}
.card-text {
  @apply text-gray-300 leading-relaxed text-sm;
}
</style>
