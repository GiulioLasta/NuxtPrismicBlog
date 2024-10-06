<template>
  <div>
    <h1>Blog Posts</h1>
    
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-if="posts && posts?.length">
        <div v-for="post in posts" :key="post?.id">
          <div v-for="slice in post.data.slices" :key="slice?.id">
            <div v-if="slice.slice_type == 'blog_post_preview'" class="post-preview">
              <nuxt-link :to="`/blog/${post?.uid}`">
                <img :src="slice?.primary?.blogpostimagepreview.url" alt="Thumbnail" v-if="slice?.primary?.blogpostimagepreview.url" width="200px" height="100px" />
              </nuxt-link>
              <div class="post-preview-description">
                <h2>
                  <nuxt-link :to="`/blog/${post?.uid}`">
                    {{ slice?.primary?.blogposttitlepreview }}
                  </nuxt-link>
                </h2>
                <PrismicRichText :field="truncateText(slice?.primary?.blogpostdescpreview)" v-if="slice?.primary?.blogpostdescpreview" />
                <div class="post-preview-tags" v-if="post && post?.tags">
                  <div v-for="tag in post.tags" :key="tag" class="post-preview-tag">
                    {{ tag }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div v-else>
      <p>No blog posts available</p>
    </div> -->
  </div>
</template>

<script lang="ts">

import { usePrismic } from '@prismicio/vue';
import * as prismicC from '@prismicio/client'
import { truncateText, getCategoryByName } from '~/utils/global';

export default {
  props: {
    tags: {
      type: Array,
      required: false,
      default: []
    },
    category: {
      type: String,
      required: false,
      default: []
    },
  },
  async setup(props) {
    const prismic = usePrismic();
    const runtimeConfig = useRuntimeConfig();
    const blogPostDefaultType = runtimeConfig.public.prismicBlogPostDefaultType;
    const client = prismicC.createClient(runtimeConfig.public.prismicRepositoryName);

    // Set up a loading state to ON
    const loading = ref(true);
    const posts = ref(null);

    const tags : string[] = props.tags;
    const haveWeTags = tags.length > 0;
    const categoryProp : string = props.category;
    const currentCategory = await getCategoryByName(categoryProp);

    const filters = [
      prismic.filter.at('document.type', blogPostDefaultType),
    ];

    // if(haveWeTags) {
    // }
    
    if(currentCategory) {
      console.log(currentCategory);
      filters.push(prismic.filter.at('my.blogpost_01.blogpostcategory', currentCategory.id));
    }

    // fetch documents of type [blogPostDefaultType] and with a tag F it is passed
    client.get({ 
      orderings: {
        field: 'document.first_publication_date',
        direction: 'desc',
      },
      pageSize: 100, // Fetch up to 100 posts
      filters: filters,
    }).then(result => {
      posts.value = result.results;
    });

    // setup loading indicator to OFF
    loading.value = false;

    return {
      posts,
      loading 
    };
  }
}
</script>

<style scoped>
.post-preview {
  display: flex;
  margin-bottom: 2rem;
  padding: 1rem;
  border-bottom: 1px solid #ddd;

  .post-preview-description {
    padding-left: 10px;
  }

  .post-preview-tags {
    display: flex;
    .post-preview-tag {
      border: white solid 1px;
      width: fit-content;
      padding: 0px 7px 3px 7px;
      border-radius: 12px;
      margin-right: 10px
    }
  }
}


.post-preview h2 {
  margin-top: 1rem;
}

.post-preview img {
  max-width: 100%;
  height: auto;
  display: block;
}

.post-preview p {
  margin-top: 0.5rem;
}
</style>
