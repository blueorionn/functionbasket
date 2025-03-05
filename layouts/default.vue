<template>
  <!-- Header -->
  <PageHeader />

  <!-- Main Content -->
  <main>
    <slot></slot>
  </main>

  <!-- Footer -->
   <PageFooter />
</template>

<!-- Import your global CSS file -->
<style src="~/assets/css/global.css"></style>

<script setup lang="ts">
useSeoMeta({
  title: "Function Basket - Personal Toolkit Collection",
  description:
    "This website is a personal toolkit designed to streamline various tasks for ethical hacking, networking, and general utility. It hosts a collection of tools I frequently use.",
  ogTitle: "Function Basket - Personal Toolkit Collection",
  ogDescription:
    "This website is a personal toolkit designed to streamline various tasks for ethical hacking, networking, and general utility. It hosts a collection of tools I frequently use.",
  ogImage: "https://www.functionbasket.com/favicon.ico",
  twitterCard: "summary",
  twitterTitle: "Function Basket - Personal Toolkit Collection",
  twitterDescription:
    "This website is a personal toolkit designed to streamline various tasks for ethical hacking, networking, and general utility. It hosts a collection of tools I frequently use.",
  twitterImage: "https://www.functionbasket.com/favicon.ico",
});
</script>
