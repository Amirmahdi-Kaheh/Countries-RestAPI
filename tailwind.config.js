/** @type {import('tailwindcss').Config} */
module.exports = {
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
      transparent: "transparent",
      blue: {
        dark: {
          DEFAULT: 'hsl(209, 23%, 22%)', // default stand for light mode
          night: '' // dark mode color
        },
        darken: {
          DEFAULT: '',
          night: 'hsl(207, 26%, 17%)'
        }
      },
      white: '#FFFFFF',
      gray: 'hsl(0, 0%, 52%)',
      background: {
        DEFAULT: '#FAFAFAFF',
        dark: '#202C37FF'
      },
      silver: '#eee'
    },
  },
  plugins: [],
}

