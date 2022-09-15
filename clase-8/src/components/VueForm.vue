<template>
<div class="fcc my-5">
	<vue-form :state="formState" @submit.prevent="submit()">
		<validate tag="label" :custom="{customValidator: customValidator}">
			<span>Nombre *</span>
			<input type="text" required name="name" id="name" v-model="model.name">
			<field-messages name="name">
				<div>
					Correcto!
				</div>
				<div slot="required">
					Incorrecto!
				</div>
				<div slot="customValidator">
					no es custom!
				</div>
			</field-messages>
		</validate>
		<button class="btn btn-info" type="submit">submit</button>
	</vue-form>
	<div v-for="(key,value) in formState" :key="value">
		{{key}} : {{value}}
	</div>
</div>

</template>

<script>

export default {
	data() {
		return {
			formState:{},
			model:{
				name:"",
				password:""
			}
		}
	},
	methods:{
		console(text){
			console.log('text',text);
		},
		customValidator: function (value) {
			// return true to set input as $valid, false to set as $invalid
			return value === 'custom';
		},
		submit(){
			if (this.formState.$invalid) {
				alert('invalido')
			}
		}
	}
};
</script>

<style scoped>
.fcc{
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 500px;
	margin: auto;
}

</style>