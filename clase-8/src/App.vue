<template>
  <div id="app">
    <img class="logo" alt="Vue logo" src="./assets/logo.png">
    <VueForm />
  </div>
</template>

<script>
//import FormularioWeb from './components/FormularioWeb.vue'
//import LoginForm from './components/LoginForm.vue'
import VueForm from './components/VueForm.vue'

export default {
  name: 'App',
  components: {
    VueForm
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
.logo{
    width: 6em;
}
</style>
