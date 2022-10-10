<template>
	<div class="hello">
		<div :class="{ error: v$.firstName.$errors.length }">
			<!-- {{v$.firstName}} -->
			<input v-model="state.firstName">
			<div class="input-errors" v-for="error of v$.firstName.$silentErrors" :key="error.$uid">
				<div class="error-msg">{{ error.$message }}</div>
			</div>
		</div>
		<button class="btn btn-primary" @click="submitForm()"> SAVE </button>
	</div>
</template>

<script>
import { reactive } from 'vue' // "from '@vue/composition-api'" if you are using Vue 2.x
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default {
	name: 'HelloWorld',
	setup() {
		const state = reactive({
			firstName: '',
			lastName: '',
			contact: {
				email: ''
			}
		})
		const rules = {
			firstName: {
				required
			}, // Matches state.firstName
			lastName: {
				required
			}, // Matches state.lastName
			contact: {
				email: {
					required,
					email
				} // Matches state.contact.email
			}
		}

		const v$ = useVuelidate(rules, state)

		return {
			state,
			v$
		}
	},
	methods: {
    async submitForm () {
      const isFormCorrect = await this.v$.$validate()
      // you can show some extra alert to the user or just leave the each field to show it's `$errors`.
      if (!isFormCorrect) return
      // actually submit form
    }
  },
	mounted() {
		console.log('123', 123);
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
