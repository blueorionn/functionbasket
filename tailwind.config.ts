/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // all directories and extensions will correspond to your Nuxt config
    "functionbasket/components/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "functionbasket/layouts/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "functionbasket/pages/**/*.{vue,js,jsx,mjs,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [],
};
