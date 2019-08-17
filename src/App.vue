<template>

  <v-app dark>
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
  }
</style>