/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
  // 开启深色模式
  darkMode: 'class'
}
