<template lang="html">
  <footer>
    <img src="../assets/thumbs/thumb1.png" alt="">
    <img src="../assets/thumbs/thumb2.png" alt="">
    <img src="../assets/thumbs/thumb3.png" alt="">
  </footer>
</template>

<script>
export default {
  name: "Footer"
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
