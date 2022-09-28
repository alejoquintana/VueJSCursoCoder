<template>
	<div class="relative carrito-container">
		<div class="carrito">
			<div class="items">
				<span class="total">TOTAL: </span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			
		}
	},
	methods: {
		
	},
}
</script>

<style scoped>
.carrito-container {
	z-index: 99;
	width: 75px;
	min-width: 75px;
	height: 100vh;
}
.carrito {
	z-index: 99;
	background: #fff;
	position: fixed;
	transition: width 300ms;
	top: 0;
	right: 0;
	width: 75px;
	height: 100%;
	border-left: 1px solid #ddd;
	overflow: hidden;
}
.carrito:hover {
	width: 200px;
}
.total{
	position: absolute;
	bottom: 50%;
	writing-mode: vertical-rl;
	text-orientation: mixed;
}
.items{
	width: 200px;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
</style>