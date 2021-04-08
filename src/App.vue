<template>
  <div class="background" />
  <div class="foreground">
    <Header />
    <Content :selectedImage="getSelectedProductImage()" :productColour="getCurrentProductColour()" />
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
      backgroundColour: [
        "#266E3F",
        "#EAB1BE",
        "#E54D87"
      ]
    }
  },
  watch: {
    productNumber() {
      const el = document.querySelector(".background");
      el.style.backgroundColor = this.getCurrentProductColour();
    }
  },
  methods: {
    getSelectedProductImage() {
      const productNumber = (this.productNumber < 1 || this.productNumber > this.backgroundColour.length) ? 1 : this.productNumber;
      return `img${productNumber}.png`;
    },

    updateProductNumber(newProductNumber) {
      this.productNumber = (newProductNumber < 1 || newProductNumber > this.backgroundColour.length) ? 1 : newProductNumber;
    },

    getCurrentProductColour() {
      let backgroundImageNumber = 0;
      if(this.productNumber > 0 && this.productNumber <= this.backgroundColour.length) {
        backgroundImageNumber = this.productNumber;
      }
      return this.backgroundColour[backgroundImageNumber];
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
    transition: background-color 1.5s ease;
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
