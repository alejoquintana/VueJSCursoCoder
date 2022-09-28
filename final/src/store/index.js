import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		products: [],
		carrito: [],
		url: 'https://632ba0ac5568d3cad872d716.mockapi.io/products',
	},
	getters: {
		getProducts(state) {
			return state.products
		},
		getCarrito(state) {
			return state.carrito
		}
	},
	mutations: {
		setProducts(state, payload) {
			state.products = payload
		},
		addItem(state,item) {
			let itemExists = false
			state.carrito.forEach((listItem) => {
				if (listItem.product.id == item.product.id) {
					listItem.count += item.sum;
					itemExists = true
				}
			});
			if (!itemExists) {
				state.carrito.push({
					product: item.product,
					count: 1
				});
			}
		},
	},
	actions: {
		async fetchProducts({state,commit}) {
			await axios.get(state.url)
				.then((response) => commit('setProducts', response.data))
				.catch((err) => {
					console.log('error', err)
				})
				//.finally(() => console.log('Peticion terminada'))
		},
		async addItem({commit},item) {
			commit('addItem',item)
		},
	},
	modules: {}
})