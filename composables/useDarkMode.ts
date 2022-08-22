type ThemeDict = 'light' | 'dark'
const theme = ref<ThemeDict>('light')

if ((localStorage.getItem('theme') && localStorage.getItem('theme') === 'dark') || window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('dark')
  theme.value = 'dark'
} else {
  document.documentElement.classList.remove('dark')
}

export default function () {
  return {
    theme,
    toggle (type ?: ThemeDict) {
      if (!type && theme.value === 'light') {
        type = 'dark'
      } else if (!type && theme.value === 'dark') {
        type = 'light'
      }
      // localStorage.setItem('theme', type)
      type === 'dark' && document.documentElement.classList.add('dark')
      type === 'light' && document.documentElement.classList.remove('dark')
    }
  }
}