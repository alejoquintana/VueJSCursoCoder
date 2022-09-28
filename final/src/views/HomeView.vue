<template>
	<div class="row">
		<div class="col-3" v-for="product in products" :key="product.id" >
			<ProductsCard :product="product" />
		</div>
	</div>
</template>

<script>
import ProductsCard from '@/components/ProductsCard.vue'
export default {
	name: 'HomeView',
	components: {
		ProductsCard
	},
	computed:{
		products(){
			return this.$store.getters.getProducts
		}
	},
	mounted(){
		this.$store.dispatch('fetchProducts')
	}
}
</script>
