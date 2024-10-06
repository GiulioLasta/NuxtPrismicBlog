<template>
  <div>
    <blogListing :tags="[slugParam]" :category="slugParam" />
  </div>
</template>

<script setup>
  console.log("I'm a SLUG!");

  import blogListing from '~/components/blogListing.vue';
  // import { usePrismic } from '@prismicio/vue';
  // import * as prismicC from '@prismicio/client'
  const route = useRoute();
  // const prismic = usePrismic();
  // const runtimeConfig = useRuntimeConfig();
  // const blogPostDefaultType = runtimeConfig.public.prismicBlogPostDefaultType;
  const slugParam = route.params.slug;


  // const { data: posts } = await useAsyncData('blogPosts', () =>
  //   prismic.client.getAllByType(blogPostDefaultType, {
  //     orderings: {
  //       field: 'document.first_publication_date',
  //       direction: 'desc',
  //     },
  //     pageSize: 100, // Fetch up to 100 posts
  //     filters: [
  //       prismicC.filter.at('document.tags', ['First category1'])
  //     ]
  //   })
  // );

  // const client = prismicC.createClient(runtimeConfig.public.prismicRepositoryName);

  // const blogPostsWithTag = client.get({ 
  //   filters: [
  //     prismic.filter.at('document.type', blogPostDefaultType),
  //     prismic.filter.at('document.tags', ['sssss'])
  //   ]
  // }).then(result => {
  //   console.log("then");
  //   console.log(result);
  // });

</script>

<style scoped>
/* Add any styling you need for the category page */
</style>
