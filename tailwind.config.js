/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // all directories and extensions will correspond to your Nuxt config
    "{srcDir}/components/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "{srcDir}/layouts/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "{srcDir}/pages/**/*.{vue,js,jsx,mjs,ts,tsx}",
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
