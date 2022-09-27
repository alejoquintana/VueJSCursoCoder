<template>
  <div>
	<h3>Carrito:</h3>
		<div v-for="(item,i) in carrito" :key="i">
			{{item}}
		</div>
	<h3>Carrito Filtrado:</h3>
		<div v-for="(item,i) in carritoFiltrado" :key="'f'+i">
			{{item}}
		</div>
  </div>
</template>

<script>
export default {
	computed:{
		carrito(){
			return this.$store.state.carrito
		},
		carritoFiltrado(){
			return this.$store.getters.getCarrito
		}
	}
}
</script>

<style>

</style>