<template lang="html">
  <section>
      <transition
        name="fade"
        mode="out-in"
      >
        <img v-if="currentImage === 'img1.png'" :src="require('@/assets/products/img1.png')" alt="Product1" key="img1">
        <img v-else-if="currentImage === 'img2.png'" :src="require('@/assets/products/img2.png')" alt="Product2" key="img2">
        <img v-else-if="currentImage === 'img3.png'" :src="require('@/assets/products/img3.png')" alt="Product3" key="img3">
      </transition>
  </section>
</template>

<script>
  export default {
    name: "ProductBox",
    props: {
      currentImage: String
    }
  }
</script>

<style lang="css" scoped>
  .fade-enter-to, .fade-leave-from {
    transform: scale(1.0);
    opacity: 1;
    transition-property: transform, opacity;
    transition-duration: 0.5s;
    transition-timing-function: ease;
  }

  .fade-enter-from, .fade-leave-to {
    transform: scale(0.3);
    opacity: 0;
    transition-property: transform, opacity;
    transition-duration: 0.5s;
    transition-timing-function: ease;
  }

  img {
    align-self: flex-end;
    margin-right: 9vw;
    margin-top: 5vh;
    width: 26.4vw;
  }
</style>
