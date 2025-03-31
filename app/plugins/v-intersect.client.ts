// plugins/v-intersect.client.ts
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('intersect', {
    mounted(el: HTMLElement) {
      if (process.server) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          el.classList.toggle('in-view', entry.isIntersecting)
        },
        { threshold: 0.25 }
      )
      observer.observe(el)
    },
  })
})
