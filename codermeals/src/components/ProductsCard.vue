<template>
	<div class="border p-3">
		<p>{{product.name}}</p>
		<img class="w-100" src="../assets/No-image-available.png">
		<div class="d-flex justify-content-between">
			<span>#{{product.id}}</span>
			<span>${{product.price}}</span>
		</div>
		<button class="btn btn-success" @click="buy()">COMPRAR</button>
	</div>
</template>

<script>
//import  from "/src/mixin";
export default {
	props: {
		product: Object,
	},
	methods: {
		buy() {
			this.$emit('addToCarrito', 'producto')
		},
	},
	//mixins:[mixin]
};
</script>

<style scoped>
.border {
	border-radius: 24px;
}
</style>