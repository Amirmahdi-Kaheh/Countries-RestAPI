/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],

  theme: {
    container: {
      // you can configure the container to be centered
      center: true,
    },
    colors: {
      //  - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
      // - Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
      // - Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
      // - Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
      // - Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
      // - White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)
      transparent: "transparent",
      yellow: {
        DEFAULT: '#FFB636'
      },
      silver: {
        DEFAULT: '#EEEEEE',
        dark: '#23323f'
      },
      typography: {
        DEFAULT: '#111517FF',
        dark: '#FFFFFF'
      },
      white: {
        DEFAULT: '#FFFFFF',
        dark: '#202C37FF'
      },
      gray: {
        DEFAULT: '#858585FF',
        dark: '#e3e3e3'
      },
      background: {
        DEFAULT: '#F5F5F5',
        dark: '#2B3945FF'
      }
    },
  },
  plugins: [],
}

