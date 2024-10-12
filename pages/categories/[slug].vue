<template>
  <div>
    <BlogListing :tags="[slugParam]" :category="slugParam" />
  </div>
</template>

<script setup>
  console.log("I'm a SLUG!");
  import BlogListing from '~/components/blogListing.vue';
  const route = useRoute();
  const slugParam = route.params.slug;
</script>

<style scoped>
</style>
