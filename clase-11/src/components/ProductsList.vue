<template>
	<div>
		<h3>Productos</h3>
		<div v-for="product in productos" :key="product">
			{{product}}
			<button @click="agregar(product)">
				sumar al carrito
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ProductsList',
	data() {
		return {
			productos:[
				'mate',
				'bombilla',
				'termo',
				'vaso',
				'plato',
			]
		}
	},
	methods: {
		agregar(product){
			this.$store.dispatch('agregarItem',product)
		},
	},
}
</script>

<style scoped>
</style>
