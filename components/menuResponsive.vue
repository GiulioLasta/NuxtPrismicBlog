<template>
  <div>
    <button class="hamburge-menu lg:hidden float-right" @click="buttonClick">
      <nuxt-icon name="hamburgerButton" class="hamburgerButton" style="color: white" />
    </button>

    <Transition name="modal">
      <div v-if="showMobileMenu" class="bg-green-400 w-80 h-screen absolute top-0 right-0 z-50">
        
        <button class="hamburge-menu lg:hidden absolute right-5 top-5" @click="buttonClick">
          <nuxt-icon name="hamburgerButton" class="hamburgerButton" style="color: white" />
        </button>
        <nav class="w-full my-10">
          <ul class="flex flex-col text-center">
            <li>
              <a
                class="hover:bg-green-500 p-6 block"
              >
                Category 1
              </a>
            </li>
            <li>
              <a
                class="hover:bg-green-500 p-6 block"
              >
                Category 3
              </a>
            </li>
            <li>
              <a
                class="hover:bg-green-500 p-6 block"
              >
                Category 2
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts">

export default {
  props: {
   
  },
  data () {
    return {
      showMobileMenu: false
    }
  },
  async setup(props) {
    const mobileMenuIsOpen = false;
     
  },
  methods: {
    buttonClick() {
      //  = !mobileMenuIsOpen;
      console.log('buttonClick');

      this.showMobileMenu = !this.showMobileMenu;
    },
  }
}
</script>

<style scoped>

/* Entering animation */
.modal-enter-active {
  @apply duration-700;
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
  @apply duration-700;
  @apply transition-transform;
}
.modal-leave-from {
  @apply translate-x-0; /* Start on-screen */
}
.modal-leave-to {
  @apply translate-x-full; /* End off-screen */
}


</style>
