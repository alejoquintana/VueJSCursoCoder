<template>
	<div id="app" class="fcc mt-0 relative">
		<NavBar />
		<div class="row m-0">
			<Titulo class="col-12" />
			<div class="col-12 px-0">
				<div v-for="tienda in tiendas" :key="tienda.id" class="border-green my-3">
					<h2 class="py-3 mb-0">{{tienda.name}}</h2>
					<div class="row">
						<div v-for="product in tienda.products" :key="product.id" class="col-3 mb-0">
							<ProductsCard :product="product" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Titulo from "./components/Titulo.vue";
import ProductsCard from "./components/ProductsCard.vue";
import NavBar from './components/NavBar.vue'
//import CounterTwo from './components/CounterTwo.vue'

export default {
	name: 'App',
	components: {
		Titulo, ProductsCard, NavBar
	},
	data() {
		return {
			tiendas: [
				{
					id: 1,
					name: "Pizzeria by Alfredo",
					products: [
						{ id: 1, name: "Muzzarella", price: 100 },
						{ id: 2, name: "Napolitana", price: 100 },
						{ id: 3, name: "Calabresa", price: 100 },
						{ id: 4, name: "Fugazzeta", price: 100 },
					]
				},
				{
					id: 2,
					name: "Heladeria Via Flaminia",
					products: [
						{ id: 1, name: "1 kilo", price: 100 },
						{ id: 2, name: "1/2 kilo", price: 100 },
						{ id: 3, name: "1/4 kilo", price: 100 },
						{ id: 4, name: "Cucurucho", price: 100 },
					]
				},
				{
					id: 3,
					name: "Panaderia Cabana",
					products: [
						{ id: 1, name: "Medialunas", price: 100 },
						{ id: 2, name: "Chipa", price: 100 },
						{ id: 3, name: "Biscochitos", price: 100 },
						{ id: 4, name: "Scones", price: 100 },
					]
				},
			]
		}
	}
}
</script>

<style>
.border-green {
	border-top: 2px solid #9fff31;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	/*text-align: center;*/
	color: #2c3e50;
	margin-top: 60px;
}

.mxw {
	max-width: 200px;
}
</style>
