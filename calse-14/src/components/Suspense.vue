<template>
   <Suspense>
        <SuspenseFetch />
        <template #fallback>
            Cargando...
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
