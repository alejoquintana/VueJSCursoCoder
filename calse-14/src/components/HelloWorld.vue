<template>
  <div class="hello" ref="content">
    <h1 @click="console()">{{ msgR }}</h1>
    <input type="text" v-model="msgR">
  </div>
</template>

<script >
import { toRef, onRenderTriggered } from "vue";
export default {
    props: {
        msg: String
    },
    setup(props) {
        onRenderTriggered(() => {
          console.log('vue 3 ',props.msg);  
        })
        //console.log('props',props);
        //console.log('context',context);
        let msgR = toRef(props, 'msg')
        return {
            msgR
        }
    },
    methods: {
        console() {
            console.log(this.msgR);
        }
    },
    mounted(){
        console.log('vue 2 ',this.msg);
    }
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
