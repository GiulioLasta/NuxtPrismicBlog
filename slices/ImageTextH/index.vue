<script setup lang="ts">
import { type Content, isFilled } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/vue";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ImageTextHSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    
    <div class="md:flex xs:block image-text-h-cnt">
      <PrismicImage
          v-if="isFilled.image(slice.primary.image)"
          :field="slice.primary.image"
          class="mr-3 max-w-5xl my-4"
      />

      <PrismicRichText :field="slice.primary.text" v-if="slice.primary.text" class="my-4"/>
    </div>
  </section>
</template>

<style scoped>
  img {
    width: -webkit-fill-available;
  }

</style>
