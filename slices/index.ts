// Code generated by Slice Machine. DO NOT EDIT.

import { defineAsyncComponent } from "vue";
import { defineSliceZoneComponents } from "@prismicio/vue";

export const components = defineSliceZoneComponents({
  blog_post_preview: defineAsyncComponent(
    () => import("./BlogPostPreview/index.vue"),
  ),
  hero: defineAsyncComponent(() => import("./Hero/index.vue")),
  image_text_h: defineAsyncComponent(() => import("./ImageTextH/index.vue")),
  text_and_image: defineAsyncComponent(
    () => import("./TextAndImage/index.vue"),
  ),
  text_image_text: defineAsyncComponent(
    () => import("./TextImageText/index.vue"),
  ),
});
