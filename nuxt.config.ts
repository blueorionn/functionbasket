// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxt/fonts",
    "@nuxt/image",
  ],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },
});
