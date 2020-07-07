import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
theme: {
	themes: {
		light: {
			primary: '#fcd277',
			secondary: '#73b1f4',
			accent: '#ffd700',
			error: '#f03613',
			info: '#ec5564',
			success: '#b4e080',
			warning: '#f3872f',
		}
	}
}
});
