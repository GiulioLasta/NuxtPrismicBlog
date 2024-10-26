<template>
  
  <MenuResponsive />
  <Menu />

  <div class="layout">
    <main class="content-container">
      <!-- <MouseLight /> -->
      <NuxtPage /> 
    </main>
    <!-- <Footer />  Your custom footer component -->
  </div>
</template>

<script setup>
  // import Header from '~/components/header.vue'
  // import Footer from '~/components/footer.vue'
  // import MouseLight from '~/components/MouseLight.vue';
  import Menu from '~/components/menu.vue';
  import MenuResponsive from '~/components/menuResponsive.vue';
  // import BlogListing from '~/components/blogListing.vue';
</script>

<style lang="scss">

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
}

html {
  background-color: $dark-blue-bg;;
  font-family: Quicksand;
  color: white;
}

main {
  width: fill-available;
  z-index: 90;

  > div {
    margin-left: 0;
    margin-right: auto;
  }
}
img.fill-available {
  width: fill-available;
}
.es-fullpage-hero__image {
  width: fill-available;
}

.content-container {
  flex: 1; 
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: $dark-blue-bg;
}

@media (min-width: 1024px) {
  .content-container {
    max-width: 1400px;
    margin: 0 auto;
    background-color: $dark-blue-bg; 
  }
}

p {
  font-size: 19px;
}

h1 {
  font-size: 34px;
  font-weight: 700;
}

h2 {
  font-size: 30px;
  font-weight: 700;
}

h3 {
  font-size: 24px;
  font-weight: 700;
}

h4 {
  font-size: 22px;
  font-weight: 700;
}

h5 {
  font-size: 20px;
  font-weight: 700;
}

h6 {
  font-size: 18px;
  font-weight: 700;
}

</style>
