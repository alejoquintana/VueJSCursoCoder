<template>
  <div class="hello">
    <button @click="boolean = !boolean"> BOTON </button>
    <div v-if="boolean">
        <destroy-this />
    </div>
  </div>
</template>

<script>
import destroyThis from './DestroyThis.vue'
export default {
  name: 'HelloWorld',
  components: {destroyThis},
  data(){return {
    boolean: true
  }},
  mounted(){
    console.log('MOUNTED',this.$el,this.$data);
  },
  created(){
    console.log('CREATED',this.$el,this.$data);
  },
  beforeCreate(){
    console.log('BEFORE CREATE',this.$el,this.$data);
  },
  beforeMount(){
    console.log('BEFORE MOUNT',this.$el,this.$data);
  },
  beforeUpdate(){
    console.log('BEFORE UPDATE',this.$el,this.$data);
  },
  updated(){
    console.log('UPDATED',this.$el,this.$data);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
