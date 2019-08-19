<template>
  <div class="pwnr">
    <img v-bind:src="picture" v-bind:alt="name">
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    filename: String,
    url: String
  },
  data() {
    return {
      verbose: this.name
    };
  },
}
</script>

<style lang="scss" scoped>
.pwnr {
  img {
    max-width: 50px;
    max-height: 50px;
  }
}
</style>