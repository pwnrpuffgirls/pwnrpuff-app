import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import dark from '../themes/theme';

Vue.use(Vuetify);

/* This is following the "A-la-carte installation"
*  section from the following Vue documentation:
*  https://vuetifyjs.com/en/getting-started/quick-start*/
export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    dark: true,
    themes: { dark },
  }
});
