import { apiEndpoint, repositoryName } from "./slicemachine.config.json";
import { usePrismic } from '@prismicio/vue';
import * as prismic from '@prismicio/client';



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
  modules: ["@nuxtjs/prismic", '@nuxt/ui', 'nuxt-icons'],
  vite: {
    css: {
        preprocessorOptions: {
          scss: {
                additionalData: '@import "@/assets/style/global.scss";',
            },
        },
    },
  },

  render: {
    static: {
      setHeaders(res) {
        res.setHeader('Cache-Control', 'public, max-age=3600') // Cache for 1 hour
      }
    }
  },


  icon: {
    customCollections: [
      {
        prefix: 'my-icon',
        dir: './assets/icons'
      },
    ],
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
  target: 'static',
  ssr: false,
  // generate: {
  //   fallback: true,
  //   cache: {
  //     max: 1000,
  //     maxAge: 9000000 // 15 minutes
  //   }
  // }
})
