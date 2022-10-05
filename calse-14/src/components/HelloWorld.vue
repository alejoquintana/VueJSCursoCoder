<template>
  <div class="hello">
    <h1 @click="console()">{{ msgR }}</h1>
  </div>
</template>

<script>
import { toRef } from "vue";
export default {
  //name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(props){
    //console.log('props',props);
    //console.log('context',context);
    const msgR = toRef(props,'msg')
    return{
        msgR
    }
  },
  methods:{
    console(){
        console.log(this.msgR);
    }
  },
  //mounted(){}
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
