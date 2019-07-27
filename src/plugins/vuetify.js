import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import light from '../themes/light';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: { light },
  }
});
