import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		carrito: []
	},

	getters: {
		getCarrito(state){
			let filtrado = state.carrito.filter(item => {
				return item.length > 4
			})
			return filtrado
		}
	},

	mutations: {
		agregarItem(state, producto){
			state.carrito.push(producto)
		},
	},

	actions: {
		agregarItem({commit}, producto) {
			commit('agregarItem', producto)
		},
	},

	modules: {}
})