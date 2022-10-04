import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueForm from 'vue-form';

//Vue.use(VueAxios, axios)
Vue.use(VueForm);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
