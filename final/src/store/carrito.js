//const URL = 'https://632ba0ac5568d3cad872d716.mockapi.io/products';
//import axios from 'axios'

export default {
	namespaced: true,
	state: {
		carrito:[],
	},
	getters: {
		getCarrito(state) {
			return state.carrito
		},
	},
	mutations: {
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
		async addItem({commit},item) {
			commit('addItem',item)
		},
	},
}