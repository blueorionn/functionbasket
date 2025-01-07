<template>
  <!-- Header -->
  <header>
    <slot name="header">Default Header</slot>
  </header>

  <!-- Main Content -->
  <main>
    <slot></slot>
  </main>

  <!-- Footer -->
  <footer>
    <slot name="footer">Default Footer</slot>
  </footer>
</template>

<!-- Import your global CSS file -->
<style src="~/assets/css/global.css"></style>
