<template>
  <div class="margin border">
    <h3>{{ product.name }}</h3>
    <img src="../assets/No-image-available.png" />
    <div class="d-flex justify-content-between">
      <span>#{{ product.id }}</span>
      <span>{{ product.color }}</span>
    </div>
    <button class="btn btn-success" @click="buy()">COMPRAR</button>
  </div>
</template>

<script>
//import  from "/src/mixin";
export default {
  props: {
    product: Object,
  },
  methods: {
    buy() {
			this.$emit('addToCarrito','producto')
		},
  },
  //mixins:[mixin]
};
</script>

<style>
.margin {
  margin: 18px 0;
}
.border {
  border: 2px solid red;
  border-radius: 24px;
}
</style>