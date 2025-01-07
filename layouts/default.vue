<template>
  <div class="default-layout">
    <!-- SEO Meta Tags -->
    <Head>
      <title>{{ Title }}</title>
      <meta name="description" :content="Description" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" :content="Title" />
      <meta property="og:description" :content="Description" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://functionbasket.com" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <!-- Header -->
    <header>
      <slot name="header">Default Header</slot>
    </header>

    <!-- Main Content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer>
      <slot name="footer">Default Footer</slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
  props: {
    Title: {
      type: String,
      default: "Function Basket",
    },
    Description: {
      type: String,
      default: "Swadhin's hobby project showcase.",
    },
  },
};
</script>

<!-- Import your global CSS file -->
<style src="~/assets/css/global.css"></style>
