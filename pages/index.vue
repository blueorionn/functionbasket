<template>
  <section class="mx-auto max-w-screen-xl px-4" aria-label="wrapper">
    <section class="py-12" id="about">
      <h1 class="cursor-default text-lg font-semibold text-gray-700 xl:text-xl">
        FunctionBasket
      </h1>
      <p class="my-4 text-base font-normal text-gray-800 xl:text-lg">
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
      <div class="my-4 flex w-max items-center justify-center gap-6">
        <NuxtLink
          href="/"
          class="group relative flex items-center justify-center gap-1.5 py-1 transition-all"
          rel="nofollow noreferrer noopener"
          target="_blank"
        >
          <Icon
            name="logos:github-icon"
            style="height: 1.25rem; width: 1.25rem; aspect-ratio: auto"
          />
          <span class="text-base text-gray-800">Github</span>
          <span
            class="absolute bottom-0 left-0 h-0.5 w-full bg-gray-200 transition-all group-hover:bg-gray-500"
          ></span>
        </NuxtLink>
        <NuxtLink
          href="/"
          class="group relative flex items-center justify-center gap-1.5 py-1 transition-all"
          rel="nofollow noreferrer noopener"
          target="_blank"
        >
          <Icon
            name="logos:x"
            style="height: 1.25rem; width: 1.25rem; aspect-ratio: auto"
          />
          <span class="text-base text-gray-800">Twitter (X)</span>
          <span
            class="absolute bottom-0 left-0 h-0.5 w-full bg-gray-200 transition-all group-hover:bg-gray-500"
          ></span>
        </NuxtLink>
        <NuxtLink
          href="/"
          class="group relative flex items-center justify-center gap-1.5 py-1 transition-all"
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
            class="absolute bottom-0 left-0 h-0.5 w-full bg-gray-200 transition-all group-hover:bg-gray-500"
          ></span>
        </NuxtLink>
      </div>
    </section>
    <section class="py-6" id="tools" aria-label="tools-section">
      <h1 class="cursor-default text-lg font-bold text-gray-800 xl:text-xl">
        TOOLS
      </h1>
      <section class="grid grid-flow-row py-4">
        <div
          v-for="collection in toolCollection"
          :key="collection.name"
          class="py-4"
        >
          <h2
            class="full border-b border-gray-200 py-2.5 font-semibold text-gray-800"
          >
            {{ collection.name }}
          </h2>
          <div
            class="grid grid-flow-row gap-6 py-4 md:grid-flow-col md:grid-cols-2 md:gap-8 lg:grid-cols-4"
          >
            <div
              v-for="tool in collection.tools"
              :key="tool.id"
              class="h-full w-full"
            >
              <HomeToolsCard
                :title="tool.title"
                :description="tool.description"
                :tool-url="tool.location"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  </section>
</template>

<script setup>
import toolCollection from "~/data/tools.json";
</script>
