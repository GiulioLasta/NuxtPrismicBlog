<template>
  <div>
    <h1>Blog Posts</h1>
    <div v-if="posts && posts?.length">
      <div v-for="post in posts" :key="post?.id" class="post-preview">
        <nuxt-link :to="`/blog/${post?.uid}`">
          <img :src="post.data.meta_image.url" alt="Thumbnail" v-if="post.data.meta_image.url" width="200px" height="100px" />
        </nuxt-link>
        <div class="post-preview-description">
          <h2>
            <nuxt-link :to="`/blog/${post?.uid}`">
              {{ post.data.meta_title }}
            </nuxt-link>
          </h2>
          <p>{{ truncateText(post.data.meta_description) }}</p>
          <div class="post-preview-tags" v-if="post && post?.tags">
            <div v-for="tag in post.tags" :key="tag" class="post-preview-tag">
              {{ tag }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>No blog posts available</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePrismic } from '@prismicio/vue';
import { truncateText } from '~/utils/global';

const prismic = usePrismic();

// Fetch all documents of type 'blogpost'
const { data: posts } = await useAsyncData('blogPosts', () =>
  prismic.client.getAllByType('blogpost_01', {
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
    pageSize: 100, // Fetch up to 100 posts
  })
);

console.log(posts);
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
      padding: 0px 7px 0px 7px;
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
