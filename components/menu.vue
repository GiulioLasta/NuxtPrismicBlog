<template>
  <header class="header">
    <nav>
      <ul v-if="menu && menu?.length">
        <li v-for="menu_item in menu">
          <NuxtLink :to="menu_item.uid === homeUidCategory  ? '/' : `/categories/${menu_item.uid}`">
            {{ menu_item.data.title }}
          </NuxtLink>

          <ul v-if="menu_item.data.subcategories.length > 0">
            <li v-for="subcategory in menu_item.data.subcategories" :key="subcategory.uid">
              {{ subcategory.data?.title }}
            </li>
          </ul>

        </li>
      </ul>
    </nav>
  </header>

</template>

<script setup lang="ts">
import { usePrismic } from '@prismicio/vue';
import { truncateText } from '~/utils/global';

const prismic = usePrismic();
const runtimeConfig = useRuntimeConfig();
const homeUidCategory = runtimeConfig.public.homePageUid;

const { data: menu } = await useAsyncData('category', () =>
  prismic.client.getAllByType('category')
);

</script>

<style scoped>
.header {
  background-color: #333;
  padding: 15px;
}

.header nav ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
}

.header nav ul li a {
  color: white;
  text-decoration: none;
}
</style>
