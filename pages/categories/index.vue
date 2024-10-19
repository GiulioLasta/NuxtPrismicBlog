<template>
  <header class="header">
    <nav>
      <ul v-if="menu && menu?.length">
        <li v-for="menu_item in menu">
          <!-- <a :href="menu_item.data.link" target="_blank" rel="noopener noreferrer">{{ menu_item.data.title }}</a> -->
          <NuxtLink :to="menu_item.uid === homeUidCategory ? `/` : `/categories/${menu_item.uid}`">
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
  <!-- <UDropdown v-model:open="open" :items="items" :popper="{ placement: 'bottom-start' }">
    <UButton color="white" label="Options" trailing-icon="i-heroicons-chevron-down-20-solid" />
  </UDropdown> -->

</template>

<script setup lang="ts">
  import { usePrismic } from '@prismicio/vue';

  const runtimeConfig = useRuntimeConfig();
  const homeUidCategory = runtimeConfig.public.homePageUid;

  const prismic = usePrismic();

  const { data: menu } = await useAsyncData('category', () =>
    prismic.client.getAllByType('category')
  );
</script>

<style scoped>

</style>
