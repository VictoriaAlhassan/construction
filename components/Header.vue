<template>
  <header class="bg-transparent">
    <nav class="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
      <div
        class="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none"
      >
        <div class="color-white">
          <h1>SHA</h1>
          <h3>HOUSING & CONSTRUCTION</h3>
        </div>
        <div class="ml-10 space-x-4">
          <ul class="flex gap-4 color-white">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
            <li><NuxtLink to="/gallery">Gallery</NuxtLink></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
h1 {
  font-size: 30px;
  font-weight: bold;
  margin-left: 0;
}
h3 {
  margin-top: 0;
  margin-left: 0;
}
.router-link-exact-active {
  text-decoration: underline;
}

header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  /* padding: 20px; */
  color: white;
  text-shadow: 1px 1px 1px black;
  z-index: 9999;
}
</style>
