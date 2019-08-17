<template>
  <div class="pwnr">
    <img v-bind:src="picture" v-bind:alt="name">
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    picture: String,
    url: String
  },
  data() {
    return {
      verbose: this.name
    };
  },
  methods: {
    sendData() {
      this.updateData(this.name, this.verbose);
    },
  }
}
</script>

<style lang="scss" scoped>
.pwnr {
  display: flex;
  align-items: center;
  img {
    height: 30px;
    align-self: flex-end;
  }
}
</style>