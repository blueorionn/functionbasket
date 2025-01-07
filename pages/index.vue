<template>
  <div class="w-full min-h-[100vh] py-8 lg:py-12 xl:py-24 bg-black">
    <section class="max-w-screen-md mx-auto">
      <h1 class="text-xl md:text-2xl lg:text-3xl font-bold text-gray-100">
        Function Basket
      </h1>
      <div class="py-4 md:py-6 lg:py-8">
        <h3 class="pb-1 md:pb-2 lg:pb-3 xl:pb-4 text-gray-300">
          Welcome everyone!
        </h3>
        <p class="lg:py-1 text-gray-400">
          I'm Swadhin an indie developer, progammer and technology enthusiast.
        </p>
        <p class="lg:py-1 text-gray-400">
          I love to learn new frameworks, languages and building websites.
        </p>
        <p class="lg:py-1 text-gray-400">
          When I'm not working on a client project, I'm working on my own
          projects. This website is a curated collection of my work and my hobby
          projects that are hosted on functionbasket domain.
        </p>
        <p class="lg:py-1 text-gray-400">
          Welcome to my project showcase! As an indie full-stack developer, I’ve
          poured creativity and passion into a diverse range of projects, from
          dynamic web apps to innovative tools. This website is a curated
          collection of my work, designed to share my journey, highlight my
          expertise, and inspire others. Explore and discover the stories behind
          each project!
        </p>
      </div>
      <div class="py-4 md:py-6 xl:py-8">
        <h2 class="text-gray-300">Pinned projects</h2>
        <div
          class="w-full my-4 md:my-6 lg:my-8 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-2 md:gap-4 lg:gap-6"
        >
          <NuxtLink
            href="https://crypticworld.functionbasket.com/"
            target="_blank"
            class="group flex justify-between items-center gap-2 md:gap-4"
          >
            <NuxtImg
              src="https://crypticworld.functionbasket.com/static/logos/crypticworld-logo.png"
              class="saturate-0 h-12 w-12 transition-all group-hover:saturate-50"
            />
            <div>
              <h3
                class="my-2 text-gray-400 text-nowrap whitespace-nowrap group-hover:text-gray-300 transition-all"
              >
                Cryptic World
              </h3>
              <p class="text-gray-500 group-hover:text-gray-400 transition-all">
                Crypticworld is a text hasher built using flask.
              </p>
            </div>
          </NuxtLink>
          <NuxtLink
            href="https://photogallery.functionbasket.com/"
            target="_blank"
            class="group flex justify-between items-center gap-2 md:gap-4"
          >
            <NuxtImg
              src="https://photogallery.functionbasket.com/icons/site-icon.png"
              class="saturate-0 h-12 w-12 transition-all group-hover:saturate-50"
            />
            <div>
              <h3
                class="my-2 text-gray-400 text-nowrap whitespace-nowrap group-hover:text-gray-300 transition-all"
              >
                Photogallery
              </h3>
              <p class="text-gray-500 group-hover:text-gray-400 transition-all">
                This website is a casual project created to explore the beauty
                of photography.
              </p>
            </div>
          </NuxtLink>
        </div>
      </div>
      <div class="py-4 md:py-6 xl:py-8">
        <h2 class="text-gray-300">Find me across web</h2>
        <div class="py-2 md:py-4 w-full flex gap-2 md:gap-4">
          <NuxtLink
            to="https://github.com/blueorionn/functionbasket"
            target="_blank"
            rel="noopener noreferrer nofollow"
            class="group relative flex flex-row-reverse justify-center items-center gap-1 md:gap-2"
          >
            <span
              class="inline-block absolute bottom-0 left-0 right-0 h-0.5 bg-black transition-all group-hover:bg-gray-800"
            ></span>
            <span class="text-gray-400 transition-all group-hover:text-gray-300"
              >Github</span
            >
            <svg
              class="fill-gray-500 dark:fill-gray-400 h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5 hover:fill-gray-800 dark:hover:fill-gray-200 transition-all"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
              ></path>
            </svg>
          </NuxtLink>
          <NuxtLink
            to="https://x.com/SS_Swadhinn"
            target="_blank"
            rel="noopener noreferrer nofollow"
            class="group relative flex flex-row-reverse justify-center items-center gap-1 md:gap-2"
          >
            <span
              class="inline-block absolute bottom-0 left-0 right-0 h-0.5 bg-black transition-all group-hover:bg-gray-800"
            ></span>
            <span class="text-gray-400 transition-all group-hover:text-gray-300"
              >Twitter/X</span
            >
            <svg
              class="fill-gray-500 dark:fill-gray-400 h-3 w-3 md:h-4 md:w-4 group-hover:fill-gray-200 transition-all"
              viewBox="0 0 1200 1227"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
              ></path>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Function Basket",
  meta: [
    { name: "description", content: "Swadhin's hobby projects collection." },
  ],
});
</script>
