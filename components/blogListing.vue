<template>
  <div>
    <h1 v-if="currentCategory">{{ currentCategory.data.title }}</h1>
    
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-if="posts && posts?.length" class="w-fit mx-auto">
        <div v-for="post in posts" :key="post?.id" class="w-fit">
          <div v-for="slice in post.data.slices" :key="slice?.id" class="w-fit">
            <div v-if="slice.slice_type == 'blog_post_preview'" class="post-preview hover:translate-y-[-5px]">
              <nuxt-link :to="`/blog/${post?.uid}`">
                <img :src="slice?.primary?.blogpostimagepreview.url" class="tile-sp:hidden" alt="Thumbnail" v-if="slice?.primary?.blogpostimagepreview.url" width="200px" height="100px" />
              </nuxt-link>
              <div class="post-preview-description">
                <h4>
                  <nuxt-link :to="`/blog/${post?.uid}`">
                    {{ slice?.primary?.blogposttitlepreview }}
                  </nuxt-link>
                </h4>
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
    <Tile 
        :special="true"
        title="ReadLang" 
        description="ReadLang is a powerful web application that allows users to generate text in various languages using AI, translate it seamlessly, and receive in-depth grammatical insights. With ReadLang, you can create custom content in different languages, translate it to your desired language, and analyze the grammar for deeper understanding. This tool empowers writers, educators, and content creators by making multilingual content creation simple, efficient, and accurate. Whether you need a translation, a grammatical breakdown, or just some creative writing help, ReadLang is designed to streamline the process and enhance your productivity with AI-driven tools." 
        :languages="['VS Code', 'JSON', 'VUEjs', 'ExpressJS', 'MySQL', 'MongoDB']" 
        gitLink="www.google.com" 
        exLink="www.google.com" 
        imageURL="/images/backend.png"
    ></Tile>

    
    <!-- <Tile 
        :flip="true"
        :special="true"
        title="Top-Stories Newsletter" 
        description="A newsletter service that curates the top stories from Reddit and other popular forums, delivering them directly to your email. Stay informed with the latest trending discussions, news, and insights from across the web, all in one convenient digest. Perfect for staying up-to-date without the need to browse multiple platforms." 
        :languages="['VS Code', 'JSON', 'VUEjs', 'ExpressJS', 'MySQL']" 
        gitLink="" 
        exLink="" 
        imageURL="/images/frontend.png"
    ></Tile>

    <Tile 
        :special="true"
        title="IhateHotWeather.cold" 
        description="A meme website for cold weather lovers during summer months." 
        :languages="['JavaScript (ES6)', 'NodeJS', 'ExpressJS', 'MongoDB', 'Mongoose']" 
        gitLink="" 
        exLink="" 
        imageURL="/images/backend.png"
    ></Tile>

    <Tile
        :flip="true"
        title="Garmin integrations" 
        description="TODO " 
        :languages="['C', 'Terminal']" 
        gitLink="" 
        exLink="" 
        imageURL="/images/connectfour.png"
    ></Tile> -->

    <!-- <div v-else>
      <p>No blog posts available</p>
    </div> -->
  </div>
</template>

<script lang="ts">

import { usePrismic } from '@prismicio/vue';
import * as prismicC from '@prismicio/client'
import { truncateText, getCategoryByName } from '~/utils/global';
import Tile from '~/components/tile.vue';

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
    const categoryProp : string = props.category;
    
    const prismic = usePrismic();
    const runtimeConfig = useRuntimeConfig();
    const blogPostDefaultType = runtimeConfig.public.prismicBlogPostDefaultType;
    const client = prismicC.createClient(runtimeConfig.public.prismicRepositoryName);

    // Set up a loading state to ON
    const loading = ref(true);
    const posts = ref(null);
    const currentCategory = await getCategoryByName(categoryProp);

    const filters = [
      prismic.filter.at('document.type', blogPostDefaultType),
    ];

    if(currentCategory) {
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
      loading,
      currentCategory 
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
  max-width: 550px;

  .post-preview-description {
    padding-left: 10px;
  }

  .post-preview-tags {
    display: flex;
    margin-top: 10px;
    .post-preview-tag {
      border: white solid 1px;
      width: fit-content;
      padding: 0px 7px 3px 7px;
      border-radius: 12px;
      margin-right: 10px;
      height: fit-content;
    }
  }
}


.post-preview h4 {
  line-height: 22px;
}

.post-preview img {
  max-width: 100%;
  min-width: 200px;
  height: auto;
}

.post-preview p {
  margin-top: 0.5rem;
}
</style>
