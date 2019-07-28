<template>
    <v-app dark style="
        background: -webkit-linear-gradient(70deg, #fff810  30%, rgba(0,0,0,0) 30%), -webkit-linear-gradient(30deg, #63e89e 60%, #ff7ee3 60%);
    background: -o-linear-gradient(70deg, #fff810  30%, rgba(0,0,0,0) 30%), -o-linear-gradient(30deg, #63e89e 60%, #ff7ee3 60%);
    background: -moz-linear-gradient(70deg, #fff810  30%, rgba(0,0,0,0) 30%), -moz-linear-gradient(30deg, #63e89e 60%, #ff7ee3 60%);
    background: linear-gradient(70deg, #ec5564 30%, rgba(0,0,0,0) 30%), linear-gradient(30deg, #63e89e 60%, #73b1f4 60%);
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
//.bg-purple {
//color: #fff;
//background: -webkit-linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%), -webkit-radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%);
//background: -o-linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%), -o-radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%);
//background: -moz-linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%), -moz-radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%);
//background: linear-gradient(110deg, #fcd277 40%, rgba(0, 0, 0, 0) 30%), radial-gradient(farthest-corner at 0% 0%, #fecd57 70%, #f5ba45 70%);
//}
