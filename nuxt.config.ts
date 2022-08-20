import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  css: [
    '@/assets/scss/global.scss'
  ],
  modules: [
    '@nuxtjs/tailwindcss'
  ]
})
