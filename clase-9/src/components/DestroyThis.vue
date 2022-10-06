<template>
  <div>
    DESTROY THIS: {{count}}
  </div>
</template>

<script>
export default {
    data(){
        return{
            interval:null,
            count:0
        }
    },
    mounted(){
        this.interval = setInterval(() => {
            this.count++
            console.log('this.count',this.count);
        }, 1000);
    },
    destroyed(){
        console.log('DESTRUIDO');
    },
    beforeDestroy(){
        console.log('ANTES DE DESTRUIRSE');
        clearInterval(this.interval);
    }
}
</script>

<style>

</style>