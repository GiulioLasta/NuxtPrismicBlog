<script setup lang="ts">
import { components } from "~/slices";
// import TextSelector from "~/components/TextSelector.vue";
// import NewsLetter from '~/components/newsLetter.vue';

defineProps(['page']);

const prismic = usePrismic();
const route = useRoute();
let page = null;

// If you're checking for multiple types, you can chain them:
const fetchPageByUID = async (type, uid) => {
  try {
    return await prismic.client.getByUID(type, uid);
  } catch (error) {
    console.warn(`Failed to fetch ${type}:`, error);
    return null;
  }
};

page = await fetchPageByUID('blogpost_01', route.params.uid);

useHead({
  title: page?.data.meta_title,
  meta: [
    {
      name: "description",
      content: page?.data.meta_description,
    },
  ],
});

useSeoMeta({
  title: page?.data.meta_title,
  ogTitle: page?.data.meta_title,
  description: page?.data.meta_description,
  ogDescription: page?.data.meta_description,
  ogImage: page?.data.meta_image?.url,
  // twitterCard: "summary_large_image',
})


</script>

<template>

  <div class="fill-available-mobile max-w-screen-md mx-auto">
    <!-- <NewsLetter></NewsLetter> -->
    <!-- <TextSelector></TextSelector> -->
    <SliceZone
      wrapper="main"
      :slices="page?.data.slices ?? []"
      :components="components"
    />
  </div>
</template>
<style scoped>

.fill-available-mobile {
    width: -webkit-fill-available;
}

.header {
  background-color: #333;
  padding: 15px;
}

.header nav ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
}

.header nav ul li a {
  color: white;
  text-decoration: none;
}
</style>
