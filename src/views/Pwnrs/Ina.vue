<template>
  <div class="home">
    <h1>Ina</h1>
    <p class="under-construction">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    
  </div>
</template>

<script>
export default {
  name: "Ina",
  props: {
    msg: String
  }
};
</script>

<style scoped>
  .home {
    margin-right: auto;
    margin-left: auto;
    width: 50%;
  }

@media only screen and (max-width: 850px) {
  .home {
    width: 90%;
  }
}
h1 {
  max-width: 400px;
  margin: auto;
}
.under-construction {
  color: darkolivegreen;
}
p {
    max-width: 400px;
    margin: auto;
    margin-bottom: 25px;
}
a {
  color: #42b983;
}
</style>