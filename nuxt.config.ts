import { apiEndpoint, repositoryName } from "./slicemachine.config.json";
import { usePrismic } from '@prismicio/vue';
import * as prismic from '@prismicio/client';



// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  site: { 
    url: 'www.giulio-lasta.com',
    name: 'Giulio Lasta\'s Blog'  
  },
  css: ['~/assets/css/main.css', '~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  buildModules: ['@nuxtjs/tailwindcss'],
  modules: ["@nuxtjs/prismic", '@nuxt/ui', 'nuxt-icons', '@nuxtjs/tailwindcss', '@nuxtjs/seo', 'nuxt-og-image'],
  vite: {
    css: {
        preprocessorOptions: {
          scss: {
                additionalData: '@import "@/assets/style/global.scss";',
            },
        },
    },
  },
  // render: {
  //   static: {
  //     setHeaders(res) {
  //       res.setHeader('Cache-Control', 'public, max-age=3600') // Cache for 1 hour
  //     }
  //   }
  // },
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
  sitemap: {
    urls: async () => {
      return ['/blog/prismicblog', '/blog/self-hosting-web-app', '/blog/header-with-points'];
    }
  },
  generate: {
    fallback: true,
    cache: {
      max: 1000,
      maxAge: 9000000 // 15 minutes
    }
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/blog/prismicblog',
        '/blog/self-hosting-web-app',
        '/blog/header-with-points',
        // Add other static paths
      ]

    }
  }
})