<template>
  <section class="max-w-screen-xl mx-auto px-4" aria-label="wrapper">
    <section class="py-12" id="about">
      <h1 class="text-lg xl:text-xl font-semibold text-gray-700 cursor-default">
        FunctionBasket
      </h1>
      <p class="my-4 text-base xl:text-lg font-normal text-gray-800">
        This website is a personal toolkit designed to streamline various tasks
        for ethical hacking, networking, and general utility. It hosts a
        collection of tools I frequently use. Built for efficiency and
        accessibility, this platform consolidates these utilities into a single,
        easy-to-use interface. Whether I need quick data conversions, network
        analysis, or simple encoding/decoding operations, this site serves as my
        go-to resource. Designed with simplicity and efficiency in mind, this
        website ensures that all these tools are accessible in one place,
        allowing me to work faster without unnecessary distractions. Whether I
        need to analyze network configurations, perform quick conversions, or
        experiment with different encoding techniques, this toolkit makes the
        process seamless.
      </p>
      <div class="w-max my-4 flex justify-center items-center gap-6">
        <NuxtLink
          href="/"
          class="group relative py-1 flex justify-center items-center gap-1.5 transition-all"
          rel="nofollow noreferrer noopener"
          target="_blank"
        >
          <Icon
            name="logos:github-icon"
            style="height: 1.25rem; width: 1.25rem; aspect-ratio: auto"
          />
          <span class="text-base text-gray-800">Github</span>
          <span
            class="absolute h-0.5 w-full bottom-0 left-0 bg-gray-200 group-hover:bg-gray-500 transition-all"
          ></span>
        </NuxtLink>
        <NuxtLink
          href="/"
          class="group relative py-1 flex justify-center items-center gap-1.5 transition-all"
          rel="nofollow noreferrer noopener"
          target="_blank"
        >
          <Icon
            name="logos:x"
            style="height: 1.25rem; width: 1.25rem; aspect-ratio: auto"
          />
          <span class="text-base text-gray-800">Twitter (X)</span>
          <span
            class="absolute h-0.5 w-full bottom-0 left-0 bg-gray-200 group-hover:bg-gray-500 transition-all"
          ></span>
        </NuxtLink>
        <NuxtLink
          href="/"
          class="group relative py-1 flex justify-center items-center gap-1.5 transition-all"
          rel="nofollow noreferrer noopener"
          target="_blank"
        >
          <Icon
            name="ant-design:heart-outlined"
            style="
              height: 1.25rem;
              width: 1.25rem;
              aspect-ratio: auto;
              color: hotpink;
            "
          />
          <span class="text-base text-gray-800">Sponsor</span>
          <span
            class="absolute h-0.5 w-full bottom-0 left-0 bg-gray-200 group-hover:bg-gray-500 transition-all"
          ></span>
        </NuxtLink>
      </div>
    </section>
    <section class="py-6" id="tools" aria-label="tools-section">
      <h1 class="text-lg xl:text-xl font-semibold text-gray-700 cursor-default">
        TOOLS
      </h1>
      <section
        class="py-4 grid grid-flow-row md:grid-flow-col md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
      >
        <div v-for="tool in tools" :key="tool.id" class="h-full w-full">
          <HomeToolsCard
            :title="tool.title"
            :description="tool.description"
            :tool-url="tool.location"
          />
        </div>
      </section>
    </section>
  </section>
</template>

<script setup>
import tools from "~/data/tools.json";
</script>
