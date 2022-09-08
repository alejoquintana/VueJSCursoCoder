<template>
  <div class="navbar" :class="open ? 'opened' : 'closed'" @click="toggleStatus()">
    <div v-if="open">
    </div>
  </div>
</template>

<script>
export default {
  data(){return{
    open:true,
    count:0
  }},
  methods:{
    toggleStatus(){
      this.open = !this.open
    }
  },
  watch:{
		open(){
			this.count++
			console.log(this.count);
		},
  }
}
</script>

<style scoped>
.navbar{
    background: red;
}
.opened{
    width: 200px;
}
.closed{
    width: 50px;
}
</style>