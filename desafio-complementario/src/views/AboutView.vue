<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{users}}
  </div>
</template>

<script>
export default {
    computed:{
        users(){
            return this.$store.getters.getUsers
        }
    },
    mounted() {
        this.$store.dispatch('get')
    },
}
</script>
