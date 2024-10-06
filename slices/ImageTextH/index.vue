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
    
    <div class="image-text-h-cnt">
      <PrismicImage
          v-if="isFilled.image(slice.primary.image)"
          :field="slice.primary.image"
          class=""
      />

      <PrismicRichText :field="slice.primary.text" v-if="slice.primary.text" />
    </div>
  </section>
</template>

<style scoped>
.image-text-h-cnt {
  display: flex;

  > img {
    margin-right: 10px;
  }
}

</style>
