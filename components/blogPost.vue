<script setup lang="ts">
import { components } from "~/slices";

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

// Try to fetch the page from different document types in sequence
page = await fetchPageByUID('blogpost2', route.params.uid) 
     || await fetchPageByUID('blogposttest', route.params.uid)
     || await fetchPageByUID('blogpost_01', route.params.uid);
console.log(page);

useHead({
  title: page?.value?.data.meta_title,
  meta: [
    {
      name: "description",
      content: page?.value?.data.meta_description,
    },
  ],
});
</script>

<template>
  <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
  />
</template>

<style scoped>

</style>
