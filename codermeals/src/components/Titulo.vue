<template>
  <div id="title">
    <h1 ref="title">{{title|mayusculas}}</h1>
		<button class="btn btn-info" @click="console()">CONSOLE!</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    title: String
  },
	filters:{
		mayusculas: (text)=>{
			return text.toUpperCase()
		}
	},
	data() {
		return {
			msg:'cusro coder'
		}
	},
	methods:{
		emitEvent(){
			this.$emit('click');
		}
	},
	mounted(){
		//this.$refs.inputText.focus()
		//console.log('this.$refs.title',this.$refs.title);
		//console.log('this.title',this.title, typeof this.title);
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
