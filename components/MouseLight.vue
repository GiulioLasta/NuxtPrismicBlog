<template>
  <div class="mouse-light tile-sp:hidden" ref="light"></div>
</template>

<script>
export default {
  mounted() {
    const mouseLight = this.$refs.light;
    const myDiv = document.getElementsByClassName('content-container')[0];

    myDiv.addEventListener('mouseenter', () => {
      mouseLight.style.opacity = '0';
      // mouseLight.style.display = 'none';
    });
    myDiv.addEventListener('mouseleave', () => {
      mouseLight.style.opacity = '1';
      // mouseLight.style.display = 'none';
    });


    document.addEventListener('mousemove', (e) => {
      mouseLight.style.top = `${e.pageY}px`;
      mouseLight.style.left = `${e.pageX}px`;
    });
  },
};
</script>

<style scoped>
.mouse-light {
  position: absolute;
  width: 280px;
  height: 280px;
  background: radial-gradient(circle, #1de0b1 , transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  mix-blend-mode: soft-light;
  transition: transform 0.1s ease;
  transition: opacity 1s, height 1s; /* Apply transition for opacity and height */
  transform: translate(-50%, -50%);
  overflow: hidden;
  z-index: 89;
}
</style>
