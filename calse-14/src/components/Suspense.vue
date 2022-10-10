<template>
   <Suspense>
        <SuspenseFetch />
        <template #fallback>
            <span class="loading">
                Cargando a la promesa...
            </span>
        </template>
    </Suspense>
</template>

<script>
import SuspenseFetch from "./SuspenseFetch.vue";
export default {
    name: 'SuspenseComponent',
    components:{
        SuspenseFetch
    }
}
</script>

<style scoped>
.loading{
    font-size: 32px;
    font-weight: bold;
    color: red;
}
</style>