import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: [
    '@/assets/scss/global.scss'
  ],
  // 暂时解决问题，后续官方修复后移除
  components: {
    global: true,
    dirs: ['~/components']
  }
})
