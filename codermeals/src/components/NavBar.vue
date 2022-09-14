<template>
	<div class="navbar-container">
		<div class="items">
			<div v-for="(item,i) in items" :key="i" class="d-flex justify-space-between align-items-center">
				<div class="icon">
					<i class="fa-solid fa-xl" :class="'fa-'+item.icon"></i>
				</div>
				<span>{{item.name}}</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			items:[
				{icon:"bars",name:""},
				{icon:"user",name:"Mi cuenta"},
				{icon:"percentage",name:"Descuentos"},
				{icon:"cog",name:"Configuracion"},
			]
		}
	},
	methods: {
		
	},
}
</script>

<style scoped>
.navbar-container {
	z-index: 99;
	background: #fff;
	transition: width 300ms;
	position: fixed;
	width: 75px;
	height: 100vh;
	top: 0;
	left: 0;
	border-right: 1px solid #ddd;
	box-shadow: 20px 0px 100px 0px #ddd;
	overflow: hidden;
}
.navbar-container:hover {
	width: 200px;
}
.items{
	width: 200px;
}
.icon{
	width: 75px;
	height: 75px;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>