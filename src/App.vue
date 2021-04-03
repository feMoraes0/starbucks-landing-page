<template>
  <div class="background" />
  <div class="foreground">
    <Header />
    <Content :selectedImage="getSelectedProductImage()" />
    <Footer @updateProductNumber="updateProductNumber" />
  </div>
</template>

<script>
import Content from "./components/Content.vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";


export default {
  name: 'App',
  components: {
    Content,
    Footer,
    Header,
  },
  data() {
    return {
      productNumber: 1,
    }
  },
  methods: {
    getSelectedProductImage() {
      const productNumber = (this.productNumber < 1 || this.productNumber > 3) ? 1 : this.productNumber;
      return `img${productNumber}.png`;
    },

    updateProductNumber(newProductNumber) {
      this.productNumber = (newProductNumber < 1 || newProductNumber > 3) ? 1 : newProductNumber;
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');

  * {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  #app {
    width: 100vw;
    height: 100vh;
  }

  .background {
    background-color: #266E3F;
    border-top-left-radius: 99%;
    bottom: 0;
    height: 75.8vh;
    position: absolute;
    right: 0;
    width: 38.66vw;
    z-index: -1;
  }

  .foreground {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    width: 100vw;
    z-index: 1;
  }
</style>
