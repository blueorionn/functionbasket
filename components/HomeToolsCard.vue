<template>
  <NuxtLink
    :href="toolUrl"
    class="group inline-block h-full w-full rounded p-4 shadow transition-all duration-200 hover:shadow-md"
  >
    <h2
      class="home-tools-card-title py-2.5 text-lg font-bold text-gray-800 group-hover:underline"
    >
      {{ title }}
    </h2>
    <p class="py-0.5 text-base font-normal text-gray-700 group-hover:underline">
      {{ description }}
    </p>
  </NuxtLink>
</template>

<style scoped>
.home-tools-card-title {
  font-family: 'Space Grotesk', sans-serif;
}
</style>

<script setup lang="ts">
const props = defineProps({
  title: String,
  description: String,
  toolUrl: String,
})
</script>
