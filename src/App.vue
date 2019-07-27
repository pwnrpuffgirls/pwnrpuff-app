<template>
  <v-app>
    <Menu/>

    <v-content>
      <Home/>
      <Home/>
      <Home/>
      <Home/>
      <Home/>
      <Home/>
      <Home/>
      <Home/>
      <Home/>
      <Home/>
      <Home/>
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
