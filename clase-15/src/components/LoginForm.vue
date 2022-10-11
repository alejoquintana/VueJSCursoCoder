<template>
	<div class="hello">
		<div>
			<!-- {{v$.contact.email}} -->
			<input v-model="state.contact.email">
			<div class="input-errors" v-for="error of v$.contact.email.$silentErrors" :key="error.$uid">
				<div class="error-msg">{{ error.$message }}</div>
			</div>
			{{v$.contact.email}}
		</div>
		<button class="btn btn-primary" @click="submitForm()"> SAVE </button>
	</div>
</template>

<script>
import { reactive } from 'vue' // "from '@vue/composition-api'" if you are using Vue 2.x
import useVuelidate from '@vuelidate/core'
import {  required , helpers , email } from '@vuelidate/validators'

export default {
	name: 'LoginForm',
	setup() {
		//const { withAsync } = helpers
		
		/* const requerido = (value) => {
			console.log('1',1);
			return setTimeout(() => {
				console.log('2',2);
				return value.length != 0 ? true : false
			}, 5000);
		} */

		const state = reactive({
			firstName: '',
			lastName: '',
			contact: {
				email: ''
			}
		})

		const rules = {
			firstName: { required }, // Matches state.firstName
			lastName: { required }, // Matches state.lastName
			contact: {
				email: { 
					required : helpers.withMessage('Este campo es requerido', required),
					email : helpers.withMessage('Este campo es emaikl', email),
					//asyncValidator: withAsync(helpers.withMessage('Este campo es requerido', requerido))
				} // Matches state.contact.email
			}
		}

		const v$ = useVuelidate(rules, state)
		return { state,v$ }
	},
	methods: {
		async submitForm () {
			const isFormCorrect = await this.v$.$validate()
			// you can show some extra alert to the user or just leave the each field to show it's `$errors`.
			if (!isFormCorrect) return
			// actually submit form
		}
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error-msg {
  color: red;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
