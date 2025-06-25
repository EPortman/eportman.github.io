export default defineNuxtConfig({
  srcDir: 'app/',
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    ['unplugin-icons/nuxt', {
      autoInstall: true,
    }]
  ],
  googleFonts: {
    families: { Ubuntu: true },
    display: 'swap',
  },
  css: ['@/assets/css/main.css'],
  compatibilityDate: '2025-03-30',

  nitro: {
    preset: 'static',
  },

  app: {
    baseURL: '/',
    head: {
      title: 'Ethan Portman - Developer Portfolio',
      meta: [{ name: 'description', content: 'Full Stack Developer specializing in backend, cloud, and AI.' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { charset: 'utf-8' }],
    },
  },
})
