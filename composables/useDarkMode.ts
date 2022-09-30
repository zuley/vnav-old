import { useTheme, ThemeDict } from "./states"


export default function () {
  const theme = useTheme()
  return {
    toggle (type ?: ThemeDict) {
      console.log('///', type)
      if (type) {
        theme.value = type
      } else {
        theme.value = theme.value === 'dark' ? 'light' : 'dark'
      }
    
      theme.value === 'dark' && document.documentElement.classList.add('dark')
      theme.value === 'light' && document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', theme.value)
    }
  }
}