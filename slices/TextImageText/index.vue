<script setup lang="ts">
import { type Content, isFilled } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/vue";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(
  getSliceComponentProps<Content.TextImageTextSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);


// Computed class based on slice variation
const imageSizeClass = computed(() => {
  // Adjust class based on the slice variation
  
  switch(props.slice.variation) {
    case 'textImageTextSmallImageLeft': return 'max-w-xl'; break;
    case 'textImageTextVerySmallImage': return 'max-w-64	'; break;
    default: return 'max-w-5xl'; break;
  }
});

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
          :class="imageSizeClass"
          class="w-full my-4"
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
h1, h2, h3, h4, h5, h6 {
  margin-top: 35px;
}
</style>

