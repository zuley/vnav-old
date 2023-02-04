import { NuxtConfig } from '@nuxt/schema'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@/assets/scss/global.scss'
  ],
  modules: [
    '@nuxtjs/color-mode',
    'nuxt-directus',
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
  ],
  colorMode: {
    classSuffix: ''
  },
  directus: {
    url: 'http://101.33.224.203:8056'
  },
  runtimeConfig: {
    siteBase: ''
  }
})
