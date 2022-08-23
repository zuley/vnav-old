import { useTheme } from "~~/composables/states"

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.hook('app:beforeMount', () => {
    const theme = useTheme()
    // 匹配当前系统设置的颜色主题
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      theme.value = 'dark'
    }
    // 匹配当前是否手动设置颜色主题
    if ((localStorage.getItem('theme') && localStorage.getItem('theme') === 'dark')) {
      document.documentElement.classList.add('dark')
      theme.value = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      theme.value = 'light'
    }
  })
})