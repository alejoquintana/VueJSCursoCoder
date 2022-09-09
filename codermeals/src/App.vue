<template>
  <div id="app" class="d-flex mt-0">
    <NavBar />
    <div class="row">
        <Titulo class="col-12"/>
        <div class="col-12">
            <div v-for="tienda in tiendas" :key="tienda.id">
                <h2 class="tienda-titulo">{{tienda.name}}</h2>
                <div class="row">
                    <ProductsCard class="col-3"
                        v-for="product in tienda.products"
                        :key="product.id"
                        :product="product"
                    />
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Titulo from './components/Titulo.vue'
import ProductsCard from './components/ProductsCard.vue'
import NavBar from './components/NavBar.vue'

export default {
	name: 'App',
	components:{
		Titulo,ProductsCard,NavBar
	},
	data(){
		return{
			tiendas:[
				{
					id:1,
                    name:"Pizzeria by Alfredo",
					products:[
						{id:1,name:"muzzarella",price:100},
						{id:2,name:"napolitana",price:100},
						{id:3,name:"calabresa",price:100},
						{id:4,name:"fugazzeta",price:100},
					]
				},
				{
                    id:2,
					name:"Heladeria Via Flaminia",
					products:[
                        {id:1,name:"1 kilo",price:100},
						{id:2,name:"1/2 kilo",price:100},
						{id:3,name:"1/4 kilo",price:100},
						{id:4,name:"Cucurucho",price:100},
					]
				},
				{
                    id:3,
                    name:"Panaderia Cabana",
					products:[
                        {id:1,name:"Medialunas",price:100},
						{id:2,name:"Chipa",price:100},
						{id:3,name:"Biscochitos",price:100},
						{id:4,name:"Scones",price:100},
					]
				},
			]
		}
	}
}
</script>

<style>
.tienda-titulo{
    background: #9eff2f;
    padding: 12px 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.mxw{
	max-width: 200px;
}
.fcc{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
</style>
