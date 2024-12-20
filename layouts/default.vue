<template>
  
  <MenuResponsive @updatelayout="handleUpdateFromChild"  />
  <Menu />

  <div class="overlay hidden" ref="overlay"></div>
  <div class="layout" ref="layout">
    <main class="content-container">
      <NuxtPage /> 
    </main>
    <!-- <Footer />  Your custom footer component -->
  </div>
</template>

<script setup>
  import Menu from '~/components/menu.vue';
  import MenuResponsive from '~/components/menuResponsive.vue';
  const overlay = ref(null);

  // Method to handle the event from the child
  const handleUpdateFromChild = (data) => {
    if(overlay.value) {
      if(data == 'remove') {
        overlay.value.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
        
      } else if(data == 'add') {
        overlay.value.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
      }
    }
  };
</script>

<style lang="scss">
.overlay {
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.7);
  z-index: 99;
  position: absolute;
}

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
}

html {
  background-color: $dark-blue-bg;;
  font-family: Quicksand;
  color: white;
}

main {
  width: fill-available;
  z-index: 90;

  > div {
    margin-left: 0;
    margin-right: auto;
  }
}
img.fill-available {
  width: fill-available;
}
.es-fullpage-hero__image {
  width: fill-available;
}

.content-container {
  flex: 1; 
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: $dark-blue-bg;
}

@media (min-width: 1024px) {
  .content-container {
    max-width: 1400px;
    margin: 0 auto;
    background-color: $dark-blue-bg; 
  }
}

p {
  font-size: 19px;
}

h1 {
  font-size: 34px;
  font-weight: 700;
}

h2 {
  font-size: 30px;
  font-weight: 700;
}

h3 {
  font-size: 24px;
  font-weight: 700;
}

h4 {
  font-size: 22px;
  font-weight: 700;
}

h5 {
  font-size: 20px;
  font-weight: 700;
}

h6 {
  font-size: 18px;
  font-weight: 700;
}

</style>
