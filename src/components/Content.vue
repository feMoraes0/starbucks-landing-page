<template lang="html">
  <section class="content">
    <section class="text">
      <h2>
        It's not just Coffee
        <br/>
        It's <strong>Starbucks</strong>
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nunc vel lobortis ex.
        Integer quis tortor aliquam, convallis orci eget, ultrices massa.
        Maecenas vestibulum dui at nibh ornare, vel commodo ipsum vestibulum.
        Cras eget ipsum a ipsum suscipit porta ut id ligula.
      </p>
      <Button content="Learn More" />
    </section>
    <section class="product">
      <img src="../assets/products/img1.png" alt="Product">
    </section>
  </section>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "Content",
  components: {
    Button,
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
    font-size: 4.8rem;
    font-weight: 400;
    line-height: 5.5rem;
  }

  .text h2 strong {
    color: #266E3F;
    font-weight: 700;
  }

  .text p {
    color: #453D39;
    font-size: 1.25rem;
    margin-bottom: 20px;
    margin-top: 10px;
    width: 36.6vw;
  }

  .product img {
    align-self: flex-end;
    margin-right: 9vw;
    width: 26vw;
  }
</style>
