<template>
  <div id="app">
	<ProductsList class="w-50"/>
	<CarritoView class="w-50"/>
  </div>
</template>

<script>
import ProductsList from './components/ProductsList.vue'
import CarritoView from './components/CarritoView.vue'

export default {
  name: 'App',
  components: {
    CarritoView,ProductsList
  }
}
</script>

<style>
#app {
	display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.w-50{
	width: 50%;
}
</style>
