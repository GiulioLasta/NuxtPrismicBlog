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

  nitro: {
    prerender: {
      autoSubfolderIndex: false
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
  target: 'server',
  ssr: true,
  


})
