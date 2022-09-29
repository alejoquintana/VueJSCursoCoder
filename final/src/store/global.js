export default {
	namespaced:true,
	
		mutations: {
			cambiarEstado: (context, data) => {
				context.rootState[data.module] = data.value
				/* Object.entries(changed)
					.forEach(([name, value]) => {
					}) */
			}
		},
		state:{},
		actions:{},
		getters:{},
}
