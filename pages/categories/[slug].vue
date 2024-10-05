<template>
  <div>
    <blogListing />
  </div>
</template>

<script setup>
  console.log("I'm a SLUG!");

  import blogListing from '~/components/blogListing.vue';
  import { usePrismic } from '@prismicio/vue';
  import * as prismicC from '@prismicio/client'
  const route = useRoute();

  const prismic = usePrismic();

  // const { data: category } = await useAsyncData('category', () =>
  //   prismic.client.getAllByType('category')
  // );
  const { data: posts } = await useAsyncData('blogPosts', () =>
    prismic.client.getAllByType('blogpost_01', {
      orderings: {
        field: 'document.first_publication_date',
        direction: 'desc',
      },
      pageSize: 100, // Fetch up to 100 posts
      filters: [
        prismicC.filter.at('document.tags', ['First category'])
      ]
    })
  );

  console.log(posts);
  console.log(route.params.slug);

  // return { category };
</script>

<style scoped>
/* Add any styling you need for the category page */
</style>
