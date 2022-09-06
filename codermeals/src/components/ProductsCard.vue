<template>
  <div class="margin border">
    <h3>{{product.name}}</h3>
    <img src="../assets/No-image-available.png">
    <div class="d-flex justify-content-between">
        <span>#{{product.id}}</span>
        <span>{{product.color}}</span>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        product: Object
    }
}
</script>

<style>
.margin{
    margin: 18px 0;
}
.border{
    border: 2px solid red;
    border-radius: 24px;
}
</style>