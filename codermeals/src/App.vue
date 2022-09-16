<template>
	<div id="app" class="d-flex mt-0">
		<NavBar @page="page = $event" />
		<div class="container">
			<div>
				<h1 class="my-4 bold text-center">
					<span class="fa-solid fa-burger"></span>
					CODERMEALS
				</h1>
			</div>
			<div v-if="page == 'login'">
				<LoginForm class="col-12" />
			</div>
			<div v-if="page == 'home'" class="row m-0 relative">
				<span class="total-bouncer bg-success py-2 px-4">
					TOTAL: $ {{ total }}
				</span>
				<div class="col-12 px-0">
					<div v-for="tienda in tiendas" :key="tienda.id" class="border-green my-3 container">
						<div class="d-flex align-items-center py-3">
							<img class="tent-logo" :src="tienda.name | url" :alt="tienda.name" />
							<h2 class="py-3 ps-4 mb-0">{{ tienda.name }}</h2>
						</div>
						<div class="row">
							<div v-for="product in tienda.products" :key="product.id" class="col-3 px-1 mb-0">
								<ProductsCard :product="product" @buy="addItem($event)" :carrito="carrito"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import LoginForm from "./components/LoginForm.vue";
import ProductsCard from "./components/ProductsCard.vue";

export default {
	name: "App",
	components: {
		ProductsCard,
		NavBar,
		LoginForm,
	},
	data() {
		return {
			page: "home",
			carrito: [],
			tiendas: [
				{
					id: 1,
					name: "Pizzeria by Alfredo",
					products: [
						{id: 1,name: "Muzzarella",price: 100},						
						{id: 2,name: "Napolitana",price: 100},						
						{id: 3,name: "Calabresa",price: 100},						
						{id: 4,name: "Fugazzeta",price: 100},
					],
				},
				{
					id: 2,
					name: "Heladeria Via Flaminia",
					products: [
						{id: 5,name: "1 kilo",price: 100},
						{id: 6,name: "1/2 kilo",price: 100},
						{id: 7,name: "1/4 kilo",price: 100},
						{id: 8,name: "Cucurucho",price: 100},
					],
				},
				{
					id: 3,
					name: "Panaderia Cabana",
					products: [
						{id: 9,name: "Medialunas",price: 100},
						{id: 10,name: "Chipa",price: 100},
						{id: 11,name: "Bizcochitos",price: 100},
						{id: 12,name: "Scones",price: 100},
					],
				},
			],
		};
	},
	computed: {
		total() {
			let res = 0;
			this.carrito.forEach((item) => {
				res += item.product.price * item.count;
			});
			return res;
		},
	},
	methods: {
		addItem(item) {
			let itemExists = false
			this.carrito.forEach((listItem) => {
				if (listItem.product.id == item.product.id) {
					listItem.count += item.sum;
					itemExists = true
				}
			});
			if (!itemExists) {
				this.carrito.push({product:item.product,count:1});
			}
		},
	},
};
</script>

<style scoped>
.border-green {
  border-top: 2px solid #9fff31;
}
.total-bouncer {
	border-radius: 48px;
	z-index: 99;
	color: #fff;
	font-weight: bold;
	font-size: 32px;
	position: fixed;
	bottom: 20px;
	right: 20px;
	width: fit-content;
}
.tent-logo {
  width: 100px;
  border-radius: 12px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
</style>
