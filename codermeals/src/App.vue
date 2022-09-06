<template>
  <div id="app" class="fcc">
    <Titulo />
		<ProductsCard class="mxw"
			v-for="product in products"
			:key="product.id"
			:product="product"
		/>
  </div>
</template>

<script>
import Titulo from './components/Titulo.vue'
import ProductsCard from './components/ProductsCard.vue'

export default {
	name: 'App',
	components:{
		Titulo,ProductsCard
	},
	data(){
		return{
			products:[
				{id:1,name:"termo",color:"verde"},
				{id:2,name:"mate",color:"rojo"},
				{id:3,name:"bombilla",color:"azul"},
				{id:4,name:"vaso",color:"transparente"},
			]
		}
	}
}
</script>

<style>
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
