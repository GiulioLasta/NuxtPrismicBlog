<template>
  <div class="layout">
    <!-- <Header />  Your custom header component -->
      <Header />
    
    <main class="content-container">
      <!-- <BlogListing /> -->
      <MouseLight />
      <NuxtPage  />  <!-- This is where page-specific content will go -->
    </main>
    <Footer />
    
    <!-- <Footer />  Your custom footer component -->
  </div>
</template>

<script setup>
// Import components like the header and footer
import Header from '~/components/header.vue'
import Footer from '~/components/footer.vue'
import MouseLight from '~/components/MouseLight.vue';
// import BlogListing from '~/components/blogListing.vue';
</script>

<style>
/* General layout styling GLOBAL */

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensures the layout takes full height of the screen */
}

.content-container {
  flex: 1; /* Allows the content to take the remaining available space */
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: #f9f9f9;
}

@media (min-width: 1024px) {
  .content-container {
    max-width: 1024px;
    margin: 0 auto;
    background-color: white;
  }
}

html {
  background-color: #2b2a2a;
  font-family: Quicksand;
  color: white;
}

main {
  width: fill-available;
  z-index: 90;
}
img.fill-available {
  width: fill-available;
}
.es-fullpage-hero__image {
  width: fill-available;
}

/*div {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}*/

.content-container {
  flex: 1; /* Makes sure the content area grows to fill available space */
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: #131c2f;
}

/* Adds spacing on the sides for large screens */
@media (min-width: 1024px) {
  .content-container {
    max-width: 1024px;
    margin: 0 auto;
    background-color: #131c2f; /* Center content background */
  }
}

</style>
