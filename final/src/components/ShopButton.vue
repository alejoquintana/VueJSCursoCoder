<template>
	<div>
		<button v-if="count <= 0" class="btn w-100 btn-success" @click="buy(1)">
			COMPRAR <span class="fa-solid fa-cart-plus"></span>
		</button>
		<div v-else class="d-flex justify-content-between align-items-center">
			<button class="btn w-25 btn-success" @click="buy(-1)">
				<span class="fa-solid fa-minus"></span>
			</button>
			{{count}}
			<button class="btn w-25 btn-success" @click="buy(1)">
				<span class="fa-solid fa-plus"></span>
			</button>
		</div>
	</div>
</template>

<script>
export default {
	props: {product: Object},
	data(){return {
		}},
	computed:{
		count(){
			let item = this.carrito.find(i => i.product.id == this.product.id)
			return item ? item.count : 0
		},
		carrito(){
			return this.$store.getters.getCarrito
		},
	},
	methods: {
		buy(count) {
			this.$store.dispatch('addItem',{product:this.product,sum:count})
		}
	},
}
</script>

<style scoped>
</style>
