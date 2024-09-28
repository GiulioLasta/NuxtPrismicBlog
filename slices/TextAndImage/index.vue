<script setup lang="ts">
import { type Content, isFilled } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.TextAndImageSlice>([
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
    class="es-bounded es-fullpage-hero"
  >
    <div
      class="es-fullpage-hero__content"
      :class="
        slice.variation === 'default'
          ? 'es-fullpage-hero__image--right'
          : 'es-fullpage-hero__image--left'
      "
    >
      <div>
        <PrismicImage
          v-if="isFilled.image(slice.primary.image)"
          :field="slice.primary.image"
          class="es-fullpage-hero__image"
        />
      </div>
      <div class="es-fullpage-hero__content-right">
        <div class="es-fullpage-hero__content__intro">
          <p
            v-if="isFilled.keyText(slice.primary.text)"
            class="es-fullpage-hero__content__intro__eyebrow"
          >
            {{ slice.primary.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
