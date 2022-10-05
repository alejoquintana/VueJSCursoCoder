<template>
   <div>
     r: {{ result }}
   </div>
</template>

<script>
export default {
    name: 'SuspenseFetch',
    options:{
        suspensible:false
    },
    async setup() {
        const result = await fetch('https://632ba0ac5568d3cad872d716.mockapi.io/orderItems');
        return {
            result
        }
    }
}
</script>
