<template>
  <div class="w-full min-h-[100vh] py-8 lg:py-12 xl:py-24 bg-black">
    <section class="max-w-screen-lg mx-auto px-4">
      <div class="w-full">
        <h1 class="text-xl md:text-2xl lg:text-3xl font-bold text-gray-100">
          Projects
        </h1>
        <p class="py-2 md:py-4 lg:py-6 text-base lg:text-lg text-gray-300">
          Collection of my work and my hobby projects that are hosted on
          functionbasket domain.
        </p>
      </div>
      <div
        class="mt-4 md:mt-8 lg:mt-12 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4"
      >
        <div class="rounded-lg">
          <div class="rounded-lg relative my-2 md:my-4 p-4 lg:p-6 bg-gray-800">
            <NuxtImg
              src="https://photogallery.functionbasket.com/img/photogallery-site-image.png"
              alt="Photogallery Home page Image."
              class="rounded-lg h-full w-full aspect-auto object-cover"
            />
          </div>
          <h2 class="py-0.5 md:py-1 text-lg text-gray-300">Photogallery</h2>
          <p class="py-0.5 md:py-1 text-base text-gray-400">
            A casual portfolio project created to explore and display the beauty
            of photography.
          </p>
          <div class="py-0.5 md:py-1 flex gap-2 lg:gap-4">
            <NuxtLink
              to="https://photogallery.functionbasket.com"
              target="_blank"
              class="text-gray-400"
            >
              <span
                class="text-xs md:text-sm hover:border-b border-gray-700 transition-all"
                >Website</span
              >
            </NuxtLink>
            <NuxtLink
              to="https://github.com/blueorionn/photogallery"
              target="_blank"
              class="text-gray-400"
            >
              <span
                class="text-xs md:text-sm hover:border-b border-gray-700 transition-al"
                >Github</span
              >
            </NuxtLink>
          </div>
        </div>
        <div class="rounded-lg">
          <div
            class="rounded-lg relative my-2 md:my-4 p-4 lg:p-6 bg-emerald-300"
          >
            <NuxtImg
              src="https://crypticworld.functionbasket.com/static/img/crypticworld-site-img.png"
              alt="Crypticworld Home page Image."
              class="rounded-lg h-full w-full aspect-auto object-cover"
            />
          </div>
          <h2 class="py-0.5 md:py-1 text-lg text-gray-300">Crypticworld</h2>
          <p class="py-0.5 md:py-1 text-base text-gray-400">
            Hash any given text using a wide variety of hashing algorithms.
          </p>
          <div class="py-0.5 md:py-1 flex gap-2 lg:gap-4">
            <NuxtLink
              to="https://crypticworld.functionbasket.com/"
              target="_blank"
              class="text-gray-400"
            >
              <span
                class="text-xs md:text-sm hover:border-b border-gray-700 transition-all"
                >Website</span
              >
            </NuxtLink>
            <NuxtLink
              to="https://github.com/blueorionn/crypticworld"
              target="_blank"
              class="text-gray-400"
            >
              <span
                class="text-xs md:text-sm hover:border-b border-gray-700 transition-al"
                >Github</span
              >
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Projects | Function Basket",
  meta: [
    {
      name: "description",
      content: "Swadhin's hobby projects collections. Collection page.",
    },
  ],
});
</script>
