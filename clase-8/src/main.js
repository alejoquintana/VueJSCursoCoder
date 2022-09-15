import Vue from 'vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import VueForm from 'vue-form'

Vue.config.productionTip = false
Vue.use(VueForm)

new Vue({
  render: h => h(App),
}).$mount('#app')
