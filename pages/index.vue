<script setup lang="ts">
  import BlogListing from '~/components/blogListing.vue';

  useHead({
    title: 'Giulio Lasta\'s Blog',
    titleTemplate: (titleChunk) => {
      return 'Giulio Lasta\'s Blog';
    },
    meta: [
      { name: 'description', content: 'I\'m Giulio, an adventurer at heart and a software developer by trade. I dive into projects not just for work but for fun and growth, exploring new ideas and tech just to see where they’ll take me. I love experimenting with tools like Express.js, Vue, and Nuxt, and I\'m constantly building side projects to keep learning and push my limits. Follow me in my dev adventures as I tackle new challenges and share what I discover along the way!.' }
    ],
  })
  useSeoMeta({
    title: 'Giulio Lasta\'s Blog',
    ogTitle: 'Giulio Lasta\'s Blog',
    description: 'I\'m Giulio, an adventurer at heart and a software developer by trade. I dive into projects not just for work but for fun and growth, exploring new ideas and tech just to see where they’ll take me. I love experimenting with tools like Express.js, Vue, and Nuxt, and I\'m constantly building side projects to keep learning and push my limits. Follow me in my dev adventures as I tackle new challenges and share what I discover along the way!.',
    ogDescription: 'I\'m Giulio, an adventurer at heart and a software developer by trade. I dive into projects not just for work but for fun and growth, exploring new ideas and tech just to see where they’ll take me. I love experimenting with tools like Express.js, Vue, and Nuxt, and I\'m constantly building side projects to keep learning and push my limits. Follow me in my dev adventures as I tackle new challenges and share what I discover along the way!.',
    ogImage: 'https://www.giulio-lasta.com/_nuxt/me-mountains.Cwh4uF36.jpg',
    // twitterCard: "summary_large_image',
  })

</script>

<template>
  <div class="fill-available-mobile">
    <BlogListing />
  </div>
</template>

<style scoped>
  .fill-available-mobile {
    width: -webkit-fill-available;
  }

</style>
