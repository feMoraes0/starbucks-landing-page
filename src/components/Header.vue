<template lang="html">
  <header>
    <img src="../assets/logo.png" alt="Starbucks Logo">
    <ul>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Menu</a></li>
      <li>
        <a href="#">What's New</a>
      </li>
      <li>
        <a href="#">Contact Us</a>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="css" scoped>
  header {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 99px;
    padding-right: 84px;
    padding-top: 18px;
    width: 100%;
  }

  img {
    width: 82px;
    margin-bottom: 6px;
  }

  li a {
    color: #453D39;
  }

  li {
    display: inline;
    font-size: 1rem;
    font-weight: 400;
    margin-right: 41px;
  }

  li:last-child {
    margin-right: 0;
  }
</style>
