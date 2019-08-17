<template>

  <v-app dark
         style="
          background: -webkit-linear-gradient(70deg, #fff810  30%, rgba(0,0,0,0) 30%), -webkit-linear-gradient(30deg, #63e89e 60%, #ff7ee3 60%);
      background: -o-linear-gradient(70deg, #fff810  30%, rgba(0,0,0,0) 30%), -o-linear-gradient(30deg, #63e89e 60%, #ff7ee3 60%);
      background: -moz-linear-gradient(70deg, #fff810  30%, rgba(0,0,0,0) 30%), -moz-linear-gradient(30deg, #63e89e 60%, #ff7ee3 60%);
      background: linear-gradient(70deg, #ec5564 30%, rgba(0,0,0,0) 30%), linear-gradient(30deg, #63e89e 60%, #73b1f4 60%);
      ">
    <SemiStickyHeader/>

    <v-content>
      <Home/>
      <Pwnrs/>
    </v-content>
  </v-app>

</template>

<script>

  import SemiStickyHeader from './components/SemiStickyHeader'
  import Home from './views/Home'

  export default {
    name: 'App',
    components: {
      SemiStickyHeader,
      Home
    },
    data: () => ({
      //
    })
  }

</script>
