<template>
  <section :class="sectionClasses">
    <div :class="containerClasses">
      <!-- Section Title -->
      <h2 :class="titleClasses">Contact</h2>
      <p :class="subtitleClasses">Placeholder for your contact details or contact form.</p>

      <!-- Contact Form Card -->
      <div :class="cardClasses">
        <form @submit.prevent="submitForm">
          <div class="space-y-4">
            <!-- Name Field -->
            <div>
              <label :class="labelClasses" for="name">Name</label>
              <input id="name" v-model="name" :class="inputClasses" type="text" placeholder="Your Name" required />
            </div>

            <!-- Email Field -->
            <div>
              <label :class="labelClasses" for="email">Email</label>
              <input id="email" v-model="email" :class="inputClasses" type="email" placeholder="Your Email" required />
            </div>

            <!-- Message Field -->
            <div>
              <label :class="labelClasses" for="message">Message</label>
              <textarea
                id="message"
                v-model="message"
                :class="inputClasses"
                placeholder="Your Message..."
                rows="5"
                required
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button :class="buttonClasses" type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'


/* ------------------
   State & Functions
--------------------- */


const name = ref('')
const email = ref('')
const message = ref('')

function submitForm() {
  // In a real-world app, you'd send these values to a server or an API
  console.log('Form submitted:', {
    name: name.value,
    email: email.value,
    message: message.value,
  })

  // Clear fields or show a success message
  name.value = ''
  email.value = ''
  message.value = ''
}

/* ------------------
   Computed Classes
--------------------- */
const sectionClasses = computed(() => {
  return 'py-20 px-4'
})

const containerClasses = computed(() => {
  // Slightly narrower max-w to keep form centered
  return 'container mx-auto flex flex-col items-center space-y-8 max-w-3xl'
})

const titleClasses = computed(() => {
  'text-4xl font-bold text-white text-center animate-fade-in'
})

const subtitleClasses = computed(() => {
  return 'text-gray-300 text-center text-sm'
})

const cardClasses = computed(() => {
  const base = 'p-6 rounded-lg backdrop-blur-md shadow space-y-4 transition-all'
  return `${base} bg-black/30`
})

const labelClasses = computed(() => {
  return 'block text-gray-300 text-sm font-medium mb-1'
})

const inputClasses = computed(() => {
  const base = 'px-3 py-2 rounded-md focus:outline-none focus:ring-2 transition-all'
  return `${base} bg-gray-800 text-white focus:ring-blue-500`
})

const buttonClasses = computed(() => {
  const base = 'px-4 py-2 rounded-md font-semibold transition-colors'
  return `${base} bg-blue-600 text-white hover:bg-blue-700`
})
</script>

<style scoped>
/* Add additional styling if needed */
</style>
