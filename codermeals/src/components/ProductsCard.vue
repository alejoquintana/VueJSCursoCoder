<template>
    <div class="border p-3">
        <p>{{product.name}}</p>
        <img class="w-100" src="../assets/No-image-available.png">
        <div class="d-flex justify-content-between">
            <span>#{{product.id}}</span>
            <span>${{product.price}}</span>
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

<style scoped>
.margin{
    margin: 18px;
}
.border{
	border: 2px solid red;
	border-radius: 24px;
}
</style>