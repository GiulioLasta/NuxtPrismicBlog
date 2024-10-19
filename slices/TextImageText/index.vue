<script setup lang="ts">
import { type Content, isFilled } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/vue";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.TextImageTextSlice>([
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
    <div>
      <div class="">
        <div class="" >
          <PrismicRichText :field="slice.primary.firstrichtext" v-if="slice.primary.firstrichtext" />
        </div>
      </div>

      <div>
        <PrismicImage
          v-if="isFilled.image(slice.primary.image)"
          :field="slice.primary.image"
          class="max-w-5xl w-full my-4"
        />
      </div>
      
    </div>

    <div class="my-4">
      <div class="">
        <PrismicRichText :field="slice.primary.firstrichtext2" v-if="slice.primary.firstrichtext2" />
      </div>
    </div>

  </section>

</template>

<style scoped>

</style>

