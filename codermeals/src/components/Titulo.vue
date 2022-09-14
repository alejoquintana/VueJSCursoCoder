<template>
	<div>
		<h1 class="my-4 bold text-center">
			<span class="fa-solid fa-burger"></span>
			CODERMEALS
		</h1>
	</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	props: {
		title: String
	},
	filters: {
		mayusculas: (text) => {
			return text.toUpperCase()
		}
	},
	data() {
		return {
			msg: 'cusro coder'
		}
	},
	methods: {
		emitEvent() {
			this.$emit('click');
		}
	},
	mounted() {
		//this.$refs.inputText.focus()
		//console.log('this.$refs.title',this.$refs.title);
		//console.log('this.title',this.title, typeof this.title);
	}
}
</script>

<style scoped>

</style>
