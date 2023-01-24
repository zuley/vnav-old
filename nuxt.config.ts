import { NuxtConfig } from '@nuxt/schema'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@/assets/scss/global.scss'
  ],
  modules: [
    'nuxt-directus',
    '@nuxtjs/tailwindcss'
  ],
  directus: {
    url: 'http://101.33.224.203:8056'
  }
})
