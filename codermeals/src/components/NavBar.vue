<template>
	<div class="relative navbar-container">
		<div class="nav-bar">
			<div class="items">
				<div class="item-option">
					<div class="icon">
						<i class="fa-solid fa-xl fa-bars"></i>
					</div>
					<span>Menu</span>
				</div>
				<div>
					<div v-for="(item,i) in items" :key="i" @click="$emit('page',item.page)"
					class="item-option">
						<div class="icon">
							<i class="fa-solid fa-xl" :class="'fa-'+item.icon"></i>
						</div>
						<span>{{item.name}}</span>
					</div>
				</div>
				<div class="item-option">
					<div class="icon">
						<i class="fa-solid fa-xl fa-cog"></i>
					</div>
					<span>Configuración</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			items:[
				//{icon:"bars",name:""},
				{icon:"home",name:"Inicio",page:'home'},
				{icon:"user",name:"Ingresar",page:'login'},
				{icon:"percentage",name:"Descuentos",page:'coupons'},
				//{icon:"cog",name:"Configuracion"},
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
	width: 75px;
	min-width: 75px;
	height: 100vh;
}
.nav-bar {
	z-index: 99;
	background: #fff;
	position: fixed;
	transition: width 300ms;
	top: 0;
	left: 0;
	width: 75px;
	height: 100%;
	border-right: 1px solid #ddd;
	overflow: hidden;
}
.nav-bar:hover {
	width: 200px;
}
.items{
	width: 200px;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.item-option{
	display: flex;
	align-items: center;
	cursor: pointer;
}
.item-option:hover{
	background: #ddd8;
}
.icon{
	width: 75px;
	height: 75px;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>