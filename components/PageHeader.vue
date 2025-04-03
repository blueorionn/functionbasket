<template>
  <header class="relative h-max w-full py-4 shadow">
    <div
      class="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-4"
    >
      <NuxtLink href="/" class="flex items-center justify-center gap-4">
        <NuxtImg
          src="/android-chrome-192x192.png"
          alt="Site Logo"
          width="192"
          height="192"
          class="aspect-auto h-8 w-8"
        />
        <h1 class="space-grotesk text-xl font-bold text-gray-800">
          FunctionBasket
        </h1>
      </NuxtLink>
      <div class="hidden items-center justify-center gap-4 lg:flex">
        <div class="flex translate-y-[15%] items-center justify-center gap-2.5">
          <NuxtLink
            href="https://github.com/blueorionn/functionbasket/"
            rel="nofollow noreferrer noopener"
            target="_blank"
          >
            <span class="sr-only">Github Icon</span>
            <Icon
              name="logos:github-icon"
              style="height: 1.2rem; width: 1.2rem; aspect-ratio: auto"
            />
          </NuxtLink>
          <NuxtLink
            href="https://x.com/SS_Swadhinn"
            rel="nofollow noreferrer noopener"
            target="_blank"
          >
            <span class="sr-only">Twitter Icon</span>
            <Icon
              name="logos:x"
              style="height: 1.15rem; width: 1.15rem; aspect-ratio: auto"
            />
          </NuxtLink>
          <button>
            <span class="sr-only">Twitter Icon</span>
            <Icon
              name="ant-design:moon-filled"
              style="height: 1.25rem; width: 1.25rem; aspect-ratio: auto"
            />
          </button>
        </div>
      </div>
      <button
        type="button"
        aria-label="menu-toogle-button"
        class="translate-y-[15%] lg:hidden"
      >
        <span class="sr-only">Toogle Menu</span>
        <Icon
          name="hugeicons:menu-11"
          style="height: 1.5rem; width: 1.5rem; aspect-ratio: auto"
        />
      </button>
    </div>
  </header>
</template>

<style scoped>
nav {
  font-family: Robot, sans-serif;
}
.space-grotesk {
  font-family: 'Space Grotesk', sans-serif;
}
</style>
