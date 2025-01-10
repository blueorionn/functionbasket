<template>
  <header class="w-full py-4 bg-black text-gray-400">
    <div class="max-w-screen-2xl mx-auto p-4 flex items-center justify-between">
      <NuxtLink to="/" class="h-max w-max">
        <span class="_header-font text-xl text-gray-200">fb</span>
      </NuxtLink>
      <nav class="flex justify-center items-center gap-2 md:gap-4">
        <NuxtLink to="/about" title="About">
          <span
            class="hidden lg:inline-block font-semibold transition-all hover:text-gray-200"
            >About</span
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            class="lg:hidden h-4 w-4 fill-gray-400 transition-all hover:fill-gray-500"
          >
            <path
              d="M480-400q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400ZM320-240h320v-23q0-24-13-44t-36-30q-26-11-53.5-17t-57.5-6q-30 0-57.5 6T369-337q-23 10-36 30t-13 44v23ZM720-80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80Zm0-80v-446L526-800H240v640h480Zm-480 0v-640 640Z"
            />
          </svg>
        </NuxtLink>
        <NuxtLink to="/blog" title="Blog">
          <span
            class="hidden lg:inline-block font-semibold transition-all hover:text-gray-200"
            >Blog</span
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            class="lg:hidden h-4 w-4 fill-gray-400 transition-all hover:fill-gray-500"
          >
            <path
              d="M280-280h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm-80 480q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"
            />
          </svg>
        </NuxtLink>
        <NuxtLink to="/projects" title="Projects">
          <span
            class="hidden lg:inline-block font-semibold transition-all hover:text-gray-200"
            >Projects</span
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            class="lg:hidden h-4 w-4 fill-gray-400 transition-all hover:fill-gray-500"
          >
            <path
              d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-200v-80h320v80H320Zm10-120q-69-41-109.5-110T180-580q0-125 87.5-212.5T480-880q125 0 212.5 87.5T780-580q0 81-40.5 150T630-320H330Zm24-80h252q45-32 69.5-79T700-580q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 54 24.5 101t69.5 79Zm126 0Z"
            />
          </svg>
        </NuxtLink>
        <div class="h-4 w-0.5 bg-gray-500">
          <span class="sr-only">Divider</span>
        </div>
        <NuxtLink
          to="https://github.com/blueorionn/functionbasket"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <span class="sr-only">Github Repo url</span>
          <svg
            class="fill-gray-500 dark:fill-gray-400 h-4 w-4 lg:h-5 lg:w-5 hover:fill-gray-800 dark:hover:fill-gray-200 transition-all"
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
        >
          <span class="sr-only">Twitter Profile</span>
          <svg
            class="fill-gray-500 dark:fill-gray-400 h-4 w-4 hover:fill-gray-800 dark:hover:fill-gray-200 transition-all"
            viewBox="0 0 1200 1227"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
            ></path>
          </svg>
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
nav {
  font-family: Roboto, sans-serif;
}
._header-font {
  font-family: "Playwrite IS", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>
