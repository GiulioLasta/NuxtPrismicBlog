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
  // generate: {
  //   async routes() {
  //     // const prismic = usePrismic();
  //     const client = prismic.createClient('https://giulio-lasta.prismic.io/api/v2', {
  //       accessToken: 'MC5adTdVQmhFQUFDd0FqOU9s.77-9Gu-_vSAU77-977-977-9Nu-_ve-_ve-_vTYPdhrvv73vv73vv70ddwIxFFzvv70_YWzvv71BZA',  // Optional, only needed for private repos
  //     });

  //     // Fetch all blog posts from Prismic
  //     const posts = await client.getAllByType('blogpost_01');

  //     // Return an array of routes to generate
  //     return posts.map(post => `/blogpost2/${post.uid}`);
  //   }
  // },

  // hooks: {
  //   async "prerender:routes"(ctx) {

  //     const client = prismic.createClient('https://giulio-lasta.prismic.io/api/v2', {
  //         accessToken: 'MC5adTdVQmhFQUFDd0FqOU9s.77-9Gu-_vSAU77-977-977-9Nu-_ve-_ve-_vTYPdhrvv73vv73vv70ddwIxFFzvv70_YWzvv71BZA',  // Optional, only needed for private repos
  //       });

        

  //       client.get({ 
  //         orderings: {
  //           field: 'document.first_publication_date',
  //           direction: 'desc',
  //         },
  //         pageSize: 100, // Fetch up to 100 posts
  //         filters: prismic.filter.at('document.type', 'blogpost_01'),
  //       }).then(result => {

  //         console.log('then');
  //         console.log(result.results);


  //         if(result.results) {
  //           for (const page of result.results) {
  //             ctx.routes.add(`/${page.uid}`);
  //           }
  //         }
           
  //       });

  //     // const { posts } = await client.getAllByType('blogpost_01');

  //     // console.log('after');
  //     // console.log(posts);

  //     // for (const page of posts) {
  //     //   ctx.routes.add(`/${page.name}`);
  //     // }
  //   },
  // },




  // nitro: {
  //   prerender: {
  //     autoSubfolderIndex: false,
  //     crawlLinks: true,
  //     routes: ["/"],
  //     ignore: ["/api", "/feedback"]
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
  


})
