/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // all directories and extensions will correspond to your Nuxt config
    './components/**/*.{vue,js,jsx,mjs,ts,tsx}',
    './layouts/**/*.{vue,js,jsx,mjs,ts,tsx}',
    './pages/**/*.{vue,js,jsx,mjs,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [],
}
