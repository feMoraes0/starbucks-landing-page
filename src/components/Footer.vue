<template>
  <footer>
    <img @click="updateProduct(1)" src="../assets/thumbs/thumb1.png" alt="">
    <img @click="updateProduct(2)" src="../assets/thumbs/thumb2.png" alt="">
    <img @click="updateProduct(3)" src="../assets/thumbs/thumb3.png" alt="">
  </footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    updateProduct(value) {
      this.$emit("updateProductNumber", value);
    }
  }
}
</script>

<style lang="css" scoped>
  footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 35px;
    width: 100%;
  }

  img {
    cursor: pointer;
    width: 57px;
    margin-top: -8px;
  }

  img:first-child {
    margin-right: 45px;
  }

  img:last-child {
    margin-left: 42px;
    margin-right: -15px;
  }
</style>
