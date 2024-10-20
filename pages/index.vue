<script setup lang="ts">
  import BlogListing from '~/components/blogListing.vue';
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
