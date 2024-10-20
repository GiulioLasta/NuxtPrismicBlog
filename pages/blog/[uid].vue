<script setup lang="ts">
import { components } from "~/slices";
// import TextSelector from "~/components/TextSelector.vue";
import NewsLetter from '~/components/newsLetter.vue';

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
// page = await fetchPageByUID('blogpost2', route.params.uid) 
//      || await fetchPageByUID('blogposttest', route.params.uid)
//      || await fetchPageByUID('blogpost_01', route.params.uid);
page = await fetchPageByUID('blogpost_01', route.params.uid);

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
  <div>
    <NewsLetter></NewsLetter>
    <!-- <TextSelector></TextSelector> -->
    <SliceZone
      wrapper="main"
      :slices="page?.data.slices ?? []"
      :components="components"
    />
  </div>
</template>
<style scoped>
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
