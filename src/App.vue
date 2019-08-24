<template>

  <v-app dark class="page">
    <SemiStickyHeader/>
    <v-content class="content">
      <router-view/>
    </v-content>
  </v-app>

</template>

<script>
  import SemiStickyHeader from './components/SemiStickyHeader'

  export default {
    name: 'App',
    components: {
      SemiStickyHeader,
    },
    data: () => ({
      //
    })
  }
</script>

<style>
  .content {
    margin-top: 120px;
    margin-right: auto;
    margin-left: auto;
    width: 50%;
  }

  @media only screen and (max-width: 800px) and (min-width: 600px){
    .content {
      width: 70%;
    }
  }

  @media only screen and (max-width: 600px) {
    .content {
      width: 90%;
    }
  }
</style>