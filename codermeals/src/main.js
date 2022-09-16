import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VueForm from 'vue-form'
import './styles.css'

Vue.config.productionTip = false
Vue.use(VueForm)

Vue.filter('url', function (value) {
	// Convierte el nombre del producto en la url donde esta la imagen
	value = value.toLowerCase()
	value = value.trim()
	value = value.replace(/[\s/]/g,'-')
	return `/${value}.jpg`
})

new Vue({
	render: h => h(App),
}).$mount('#app')
