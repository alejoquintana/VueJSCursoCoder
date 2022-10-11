<template>
	<slot name="name"></slot>
	{{count}}
	<button @click="consoletext(count++)"> + </button>
</template>

<script>
import { ref } from "vue";

export default {
	name: 'HelloWorld',
	/* data() {
		return {
			count: 0,
		}
	}, */
	setup() {
		function consoletext(params) {
			console.log('params',params);
		}
		const count = ref(0);
		return {count,consoletext}
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
