/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.tsx",
    "./src/data.ts"
  ],
  theme: {
    extend: {
      colors: {
        'background1': 'hsl(252, 100%, 67%)',
        'background2': 'hsl(241, 81%, 54%)',
        'circle1': 'hsla(256, 72%, 46%, 1)',
        'circle2': 'hsla(241, 72%, 46%, 0)',
        'reaction': 'hsl(0, 100%, 67%)',
        'memory': 'hsl(39, 100%, 56%)',
        'verbal': 'hsl(166, 100%, 37%)',
        'visual': 'hsl(234, 85%, 45%)'
      },
      screens: {
        'xs': '300px'
      }
    },
  },
  plugins: [],
}