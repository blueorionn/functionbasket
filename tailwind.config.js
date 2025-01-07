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
      colors: {
        "background-dark": "var(--default-dark)",
        "foreground-dark": "var(--default-light)",
        background: "var(--default-light)",
        foreground: "var(--default-dark)",
      },
    },
  },
  plugins: [],
};
