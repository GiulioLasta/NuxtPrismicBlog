<script setup lang="ts">
import BlogListing from '~/components/blogListing.vue';
// import { components } from "~/slices";

// const prismic = usePrismic();
//   console.log(prismic.client);

// const route = useRoute();

// const { data: page } = useAsyncData(`[blogpost2-uid]`, () =>
//   prismic.client.getAllByType("blogpost2")
// );
// console.log(page?.data);

</script>

<template>
  <div>
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->
    <NuxtPage />
    <BlogListing />


    <!-- <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
  /> -->

  </div>
</template>
