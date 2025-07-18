<template>
  <section id="contact" class="pt-20 pb-10 px-4 text-white">
    <div class="max-w-5xl mx-auto space-y-16">
      <!-- Header -->
      <div class="text-center space-y-4">
        <h2 class="text-4xl font-bold text-accent">Let’s Connect</h2>
        <p class="text-gray-400 max-w-2xl mx-auto">
          Have a question or just want to say hello? Feel free to reach out — I’d love to hear from you.
        </p>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <!-- Left Column -->
        <div class="space-y-10">
          <div class="space-y-4">
            <p class="text-lg text-gray-300 leading-relaxed">
              I'm always open to chatting about backend challenges, API design, or improving infrastructure and developer workflows.
            </p>

            <!-- Contact Info -->
            <div class="text-gray-400 text-sm space-y-1">
              <p>
                <Icon icon="mdi:map-marker" class="inline w-4 h-4 text-accent" /> Victoria, BC, Canada
              </p>
              <p>
                <Icon icon="mdi:email-outline" class="inline w-4 h-4 text-accent" /> ethan.portman@email.com
              </p>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-wrap gap-4">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-white bg-black/50 ring-1 ring-gray-600 hover:ring-green-500 hover:text-accent transition-all duration-200 shadow-md hover:shadow-[0_0_0.5rem_#22c55e77]">
              <Icon icon="mdi:file-document-outline" class="w-5 h-5" />
              View Resume
            </a>

            <a href="https://github.com/Eportman" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-white bg-black/50 ring-1 ring-gray-600 hover:ring-green-500 hover:text-accent transition-all duration-200 shadow-md hover:shadow-[0_0_0.5rem_#22c55e77]">
              <Icon icon="mdi:github" class="w-5 h-5" />
              View GitHub
            </a>

            <a href="https://www.linkedin.com/in/ethan-portman-920ab62b0/" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-white bg-black/50 ring-1 ring-gray-600 hover:ring-green-500 hover:text-accent transition-all duration-200 shadow-md hover:shadow-[0_0_0.5rem_#22c55e77]">
              <Icon icon="mdi:linkedin" class="w-5 h-5" />
              View LinkedIn
            </a>
          </div>

          <!-- Personal Motto -->
          <p class="italic text-accent mt-10 text-sm">“Build software you’re proud of.”</p>
        </div>

        <!-- Right Column: Form -->
        <div class="space-y-6 w-full">
          <form action="https://formspree.io/f/xgvypopz" method="POST" @submit="submitted.value = true" class="space-y-6">
            <input type="text" name="_gotcha" style="display: none" />

            <div>
              <label for="name" class="block text-sm font-medium text-gray-300">Name</label>
              <input id="name" name="name" type="text" required placeholder="Your Name"
                class="w-full px-4 py-2 mt-1 rounded-md bg-black border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-300">Email</label>
              <input id="email" name="_replyto" type="email" required placeholder="Your Email"
                class="w-full px-4 py-2 mt-1 rounded-md bg-black border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-300">Message</label>
              <textarea id="message" name="message" rows="5" required placeholder="Your Message..."
                class="w-full px-4 py-2 mt-1 rounded-md bg-black border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
            </div>

            <button type="submit"
              class="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-white bg-black/50 ring-1 ring-gray-600 hover:ring-green-500 hover:text-accent transition-all duration-200 shadow-md hover:shadow-[0_0_0.5rem_#22c55e77] w-full">
              Send Message
            </button>
          </form>

          <p v-if="submitted" class="text-accent text-sm mt-2">
            Thanks for reaching out! I’ll get back to you soon.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const submitted = ref(false)
</script>

<style scoped>
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus {
  box-shadow: 0 0 0px 1000px #0a0a0a inset !important;
  -webkit-text-fill-color: #fff !important;
  caret-color: white;
  transition: background-color 5000s ease-in-out 0s;
}
</style>