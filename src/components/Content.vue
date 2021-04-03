<template lang="html">
  <section class="content">
    <section class="text">
      <h2>
        It's not just Coffee
        <br/>
        It's <strong id="brand-name">Starbucks</strong>
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nunc vel lobortis ex.
        Integer quis tortor aliquam, convallis orci eget, ultrices massa.
        Maecenas vestibulum dui at nibh ornare, vel commodo ipsum vestibulum.
      </p>
      <Button content="Learn More" :backgroundColour="productColour" />
    </section>
    <ProductBox :currentImage="selectedImage" />
  </section>
</template>

<script>
  import Button from "./Button.vue";
  import ProductBox from "./ProductBox.vue";

  export default {
    name: "Content",
    components: {
      Button,
      ProductBox,
    },
    props: {
      selectedImage: String,
      productColour: String
    },
    watch: {
      productColour() {
        const el = document.querySelector("#brand-name");
        el.style.color = this.productColour;
      }
    }
  }
</script>

<style lang="css" scoped>
  .content {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .content section {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 50%;
  }

  .text {
    padding-left: 99px;
  }

  .text h2 {
    color: #453D39;
    font-size: 4rem;
    font-weight: 400;
    letter-spacing: 0.4px;
    line-height: 5.4rem;
  }

  .text h2 strong {
    /* color: #266E3F; */
    font-size: 5rem;
    font-weight: 700;
    letter-spacing: -3.5px;
    transition: color 1.5s ease;
  }

  .text p {
    color: #453D39;
    font-size: 1rem;
    margin-bottom: 20px;
    margin-top: 3px;
    width: 36.6vw;
  }
</style>
