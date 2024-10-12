import { apiEndpoint, repositoryName } from "./slicemachine.config.json";
import { usePrismic } from '@prismicio/vue';


// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxtjs/prismic",'@nuxt/ui'],
  vite: {
    css: {
        preprocessorOptions: {
          scss: {
                additionalData: '@import "@/assets/style/global.scss";',
            },
        },
    },
  },


  runtimeConfig: {
    public: {
      prismicRepositoryName: 'giulio-lasta',
      prismicBlogPostDefaultType: 'blogpost_01',
      prismicCategoryDefaultType: 'category',
      homePageUid: 'home'
    }
  },

  prismic: {
    endpoint: apiEndpoint || repositoryName
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap', // Replace with your font
        },
      ],
    },
  },
  target: 'server',
  ssr: true,
  // hooks: {
  //   async 'nitro:config'(nitroConfig) {
  //     const slugs = await getPostRoutes();
  //     nitroConfig.prerender.routes.push([]);
  //   },
  // },

  // generate: {
  //   fallback: true, // This enables a fallback for 404 pages when using static hosting (Netlify, Vercel, etc.)
  //   routes: async () => {
  //       const categories = await client().getAllByType('category');
        
  //       return categories.map(category => `/categories/${category.uid}`);
  //     // return [];

  //     // const prismic = usePrismic();

  //     // try {
  //     //   const categories = await prismic.client.getAllByType('category'); // Fetch categories

  //     //   // Generate routes for all categories
  //     //   return categories.map(category => `/categories/${category.uid}`);
  //     // } catch (error) {
  //     //   console.error('Error fetching categories:', error);
  //     //   return []; // Return an empty array in case of error
  //     // }
  //   }
  // }


})

// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap" rel="stylesheet">