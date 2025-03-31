<template>
  <NuxtLink
    :href="toolUrl"
    class="group rounded shadow inline-block h-full w-full p-4 hover:shadow-md transition-all duration-200"
  >
    <h2
      class="py-2.5 font-bold text-lg group-hover:underline text-gray-800 home-tools-card-title"
    >
      {{ title }}
    </h2>
    <p class="py-0.5 font-normal text-base group-hover:underline text-gray-700">
      {{ description }}
    </p>
  </NuxtLink>
</template>

<style scoped>
.home-tools-card-title {
  font-family: "Space Grotesk", sans-serif;
}
</style>

<script setup lang="ts">
const props = defineProps({
  title: String,
  description: String,
  toolUrl: String,
});
</script>
