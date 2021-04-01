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
    margin-bottom: 26px;
    width: 100%;
  }

  img {
    cursor: pointer;
    margin-right: 33px;
  }

  img:last-child {
    margin-right: 0;
  }
</style>
