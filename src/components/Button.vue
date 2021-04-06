<template>
  <button type="button" name="button">
    {{content}}
  </button>
</template>

<script>
  export default {
    name: "Button",
    props: {
      content: String,
      backgroundColour: String,
    },
    watch: {
      backgroundColour() {
        const el = document.querySelector("button");
        el.style.backgroundColor = this.backgroundColour;
      }
    }
  }
</script>

<style lang="css" scoped>
  button {
    background-color: #266E3F;
    border: none;
    border-radius: 36px;
    color: #FFFFFF;
    font-size: 1.1rem;
    line-height: 1.1rem;
    padding: 12px 21px;
    transition: background-color 1.5s ease;
  }
</style>
