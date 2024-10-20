<script setup lang="ts">
import { components } from "~/slices";
// import TextSelector from "~/components/TextSelector.vue";
import NewsLetter from '~/components/newsLetter.vue';


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

console.log("ID page blog");
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
  <div class="fill-available-mobile">
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
