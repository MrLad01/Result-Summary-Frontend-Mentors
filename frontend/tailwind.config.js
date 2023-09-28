/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.tsx",
  ],
  theme: {
    extend: {
      colors: {
        background1: "hsl(252, 100%, 67%)",
        background2: "hsl(241, 84%, 54%)",
        circle1: "hsla(256, 72%, 46%, 1)",
        circle2: "hsla(241, 72%, 46%, 0)"
      },
      screens: {
        'xs': '300px'
      }
    },
  },
  plugins: [],
}