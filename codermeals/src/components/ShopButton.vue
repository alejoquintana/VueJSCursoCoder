<template>
	<div>
		<button v-if="count <= 0" class="btn w-100 btn-success" @click="addToCarrito(product)">
			COMPRAR <span class="fa-solid fa-cart-plus"></span>
		</button>
		<div v-else class="d-flex justify-content-between align-items-center">
			<button class="btn w-25 btn-success" @click="count--">
				<span class="fa-solid fa-minus"></span>
			</button>
			{{count}}
			<button class="btn w-25 btn-success" @click="count++">
				<span class="fa-solid fa-plus"></span>
			</button>
		</div>
	</div>
</template>

<script>
import mixin from "/src/mixin";
export default {
	mixins: [mixin],
	props: {product: Object},
	data(){return {
		count:0
	}},
	computed:{
		item(){
			return this.carrito.find(i => i.product.id == this.product.id)
		}
	},
	
}
</script>

<style scoped>
</style>
