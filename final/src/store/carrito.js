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
		updateCarrito(state,item) {
			const itemIndex = state.carrito.findIndex(i=>{
				return i.product.id == item.product.id
			})

			if (itemIndex == -1) {
				state.carrito.push({
					product: item.product,
					count: 1
				});
				return
			}

			state.carrito[itemIndex].count = item.count

			if (item.count <= 0) {
				state.carrito.splice(itemIndex, 1)
			}

		},
	},
	actions: {
		async updateCarrito({commit},item) {
			commit('updateCarrito',item)
		},
	},
}