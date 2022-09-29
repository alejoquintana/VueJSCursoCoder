import Vue from 'vue'
import Vuex from 'vuex'
import { createStore } from 'vuex-extensions'

// MODULOS
import products from "./products";
import carrito from "./carrito";

Vue.use(Vuex)

export default createStore(Vuex.Store, {
	plugins: [],
	modules: {
		products,
		carrito
	},
	mixins: {
		mutations: {
			changeState: function (state, changed) {
				Object.entries(changed)
					.forEach(([name, value]) => {
						state[name] = value
					})
			}
		}
	}
})