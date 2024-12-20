<template>
  <div>
    <button class="hamburge-menu lg:hidden float-right my-4 mr-4 relative z-[110]" @click="toggleMenu">
      <nuxt-icon name="hamburgerButton" class="hamburgerButton" style="color: white" />
    </button>

    <Transition name="modal">
      <div v-if="showMobileMenu" class="bg-mobile w-11/12 h-screen absolute top-0 right-0 z-[110]">
        <button class="hamburge-menu lg:hidden absolute right-5 top-5" @click="toggleMenu">
          <nuxt-icon name="hamburgerButton" class="hamburgerButton" style="color: white" />
        </button>
        <nav class="w-full my-10">
          <ul v-if="menu && menu.length" class="flex flex-col text-center">
            <li v-for="(item, index) in menu" :key="index">
              <NuxtLink :to="item.uid === homeUidCategory  ? '/' : `/categories/${item.uid}`">
                {{ item.data?.title }} <!-- Assuming each item has a name -->
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineEmits } from 'vue';
import { usePrismic } from '@prismicio/vue';
// import { useAsyncData, useRuntimeConfig } from '@nuxtjs/composition-api';

// Reactive states
const showMobileMenu = ref(false);
const menu = ref([]);
const emit = defineEmits();

// Prismic client and runtime config
const prismic = usePrismic();
const runtimeConfig = useRuntimeConfig();
const homeUidCategory = runtimeConfig.public.homePageUid;
const route = useRoute();  // Get the current route

// Asynchronous data fetching inside setup
const { data } = await useAsyncData('category', () => prismic.client.getAllByType('category'));

// Check if the data was fetched and update menu
if (data.value) {
  menu.value = data.value;
}

// on route change, close the offcanvas
watch(route, (newRoute, oldRoute) => {
  if(showMobileMenu.value)
    toggleMenu();
});


// Method to toggle the mobile menu
const toggleMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
    if (showMobileMenu.value) {
    emit('updatelayout', 'add');
  } else {
    emit('updatelayout', 'remove');
  }
};
</script>

<style lang="scss" scoped>

.bg-mobile {
  background-color: $dark-blue-bg-mobile;
}

/* Entering animation */
.modal-enter-active {
  @apply duration-2000;
  @apply transition-transform;
}
.modal-enter-from {
  @apply translate-x-full; /* Start off-screen */
}
.modal-enter-to {
  @apply translate-x-0; /* End on-screen */
}

/* Leaving animation */
.modal-leave-active {
  @apply duration-3000;
  @apply transition-transform;
}
.modal-leave-from {
  @apply translate-x-0; /* Start on-screen */
}
.modal-leave-to {
  @apply translate-x-full; /* End off-screen */
}

</style>

<style>


/* Graying overlay effect */
.layout.gray-overlay {
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
  transition: background-color 0.3s ease-in-out; /* Smooth transition */
}
</style>
