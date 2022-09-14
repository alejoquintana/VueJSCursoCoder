<template>
	<div class="border p-3">
		<p class="mb-0 bold">{{product.name}}</p>
		<div class="relative my-2">
			<img class="w-100" :src="url">
			<span class="sign px-2 py-1 bold">
				${{product.price}}
			</span>
		</div>
		<ShopButton :product="product" />
	</div>
</template>

<script>
import ShopButton from "./ShopButton";
export default {
	components: { ShopButton },
	props: {
		product: Object,
	},
	computed: {
		url() {
			// Convierte el nombre del producto en la url donde esta la imagen
			let slug = this.product.name
			slug = slug.toLowerCase()
			slug = slug.trim()
			slug = slug.replace(/[\s/]/g,'-')
			return `/${slug}.jpg`
		},
	},
};
</script>

<style scoped>
.border {
	border-radius: 12px;
}
.sign{
	position: absolute;
	bottom: 10px;
	right: 10px;
	background-color: #9fff31;
	border-radius: 12px;
}
</style>