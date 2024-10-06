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
    <!-- Placeholder component for text_image_text (variation: {{ slice.variation }})
    Slices -->


    <div
      class="es-fullpage-hero__content"
      :class="
        slice.variation === 'default'
          ? 'es-fullpage-hero__image--right'
          : 'es-fullpage-hero__image--left'
      "
    >
    <div class="es-fullpage-hero__content-right">
      <div class="es-fullpage-hero__content__intro" >
        <PrismicRichText :field="slice.primary.firstrichtext" v-if="slice.primary.firstrichtext" />
      </div>
    </div>

      <div>
        <PrismicImage
          v-if="isFilled.image(slice.primary.image)"
          :field="slice.primary.image"
          class="es-fullpage-hero__image"
        />
      </div>
      
    </div>

    <div class="es-fullpage-hero__content-right">
      <div class="es-fullpage-hero__content__intro">
        <PrismicRichText :field="slice.primary.firstrichtext2" v-if="slice.primary.firstrichtext2" />
      </div>
    </div>

  </section>

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

