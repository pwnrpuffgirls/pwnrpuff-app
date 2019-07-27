<template>
    <v-app style="
  background: #fcd277;
  background: -webkit-linear-gradient(to right, #fcd277, #73b1f4, #b4e080, #fcd277);
  background: linear-gradient(to right, #fcd277 60%, #73b1f4 60%, #73b1f4 70%, #ec5564 70%, #ec5564 80%, #b4e080 80%, #b4e080 90%, #fcd277 90%);
    ">
    <Menu/>

    <v-content>
      <Home/>
    </v-content>
  </v-app>
</template>

<script>
import Menu from './components/Menu';
import Home from './views/Home';

export default {
  name: 'App',
  components: {
    Menu,
    Home
  },
  data: () => ({
    //
  }),
};
</script>
