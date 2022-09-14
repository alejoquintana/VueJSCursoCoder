import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import './styles.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

/* Vue.mixin({
	data() {
		return {
			counter: 1,
		}
	},
	mounted() {
			this.counter *= 2
	}
}); */