<template>
  <section class="about-page mx-auto max-w-screen-md py-8 px-4">
    <h1 class="text-4xl font-bold mb-4">About Me</h1>
    <p class="text-lg mb-4">Hey there! I'm Giulio, an adventurer at heart and a software developer by trade. 
      I dive into projects not just for work but for fun and growth, exploring new ideas and tech just to see where they’ll take me.</p>
    <p class="text-lg mb-4">I love experimenting with tools like Express.js, Vue, and Nuxt, and I'm constantly building side projects to keep learning and push my limits. 
      Follow me in my dev adventures as I tackle new challenges and share what I discover along the way!</p>

      <img :src="profileImage" alt="Profile picture" class="mb-4 w-32 h-32 rounded-full object-cover">
  </section>
</template>

<script setup lang="ts">
import profileImage from '@/assets/images/me-mountains.jpg';
</script>

<style scoped>
.about-page {
  
}
</style>
