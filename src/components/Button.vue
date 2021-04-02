<template lang="html">
  <button type="button" name="button">
    {{content}}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    content: String
  }
}
</script>

<style lang="css" scoped>
  button {
    background-color: #266E3F;
    border: none;
    border-radius: 36px;
    color: #FFFFFF;
    font-size: 1.2rem;
    line-height: 1.2rem;
    padding: 12px 24px;
  }
</style>
