<template>
	<div class="total-bouncer">
		{{carro}}
	</div>
</template>

<script>
import mixin from "/src/mixin";
export default {
	mixins: [mixin],
	components: {},
	data() {
		return {

		}
	},
	computed: {
		carro(){
			return this.carrito
		}
	},
	methods: {

	},
	mounted() {

	}
}
</script>

<style scoped>
.total-bouncer{
	position: fixed;
	z-index: 100;
}
</style>