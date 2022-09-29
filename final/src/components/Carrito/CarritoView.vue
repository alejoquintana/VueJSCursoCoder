<template>
	<div>
		<div v-for="item,i in carrito" :key="i">
			{{item}}
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			
		}
	},
	computed: {
		carrito(){
			return this.$store.getters['carrito/getCarrito']
		}
	},
	methods: {
		
	},
}
</script>

<style scoped>

</style>