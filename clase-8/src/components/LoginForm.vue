<template>
  <div class="fcc my-5">
	<label for="user">Nombre de usuario</label>
	<input type="text" v-model="user" class="form-control">
	<p>Validad Nombre de usuario: <span class="text-success fw-bold">{{user}}</span></p>
	<label for="password" class="mt-4">Contraseña</label>
	<input type="password" v-model="password" class="form-control">
	<p>Validad Contraseña: <span class="text-success fw-bold">{{password}}</span></p>

	<button class="btn btn-success" @click="submit()">{{!userLogged ? 'INGRESAR':'CERRAR SESIÓN'}}</button>
	<p v-for="(error,index) in errors" :key="index">{{error}}</p>
	<!-- <h5 class="mt-5">.STOP</h5>
	<div @click.stop="console('div')">
		<button class="btn btn-info" @click="console('button')">click me!</button>
	</div>
	<h5 class="mt-5">.PREVENT</h5>
	<form action="" @submit.prevent="console('form')">
		<button class="btn btn-info" type="submit">click me!</button>
	</form>
	<h5 class="mt-5">.CAPTURE</h5>
	<div @click.capture="console('primero')">
		<div @click.capture="console('segundo')">
			<div @click.capture="console('tercero')">
				<button class="btn btn-info">click me!</button>
			</div>
		</div>
	</div>
	<h5 class="mt-5">.ONCE</h5>
	<div>
		<button class="btn btn-info" @click.once="console('once')">click me!</button>
		<button class="btn btn-info" @click="console('not once')">click me!</button>
	</div>
	<h5 class="mt-5">.SELF</h5>
	<div @click.self="console('tercero')">
		<button class="btn btn-info">click me!</button>
	</div>
	<h5 class="mt-5">.NUMBER</h5>
	<div>
		<input type="number" v-model.number="number">
		{{number}},{{typeof number}}
	</div>
	<h5 class="mt-5">.TRIM</h5>
	<div>
		<input type="text" v-model.trim="text">
		{{text}},{{typeof text}}
	</div>
	<h5 class="mt-5">.LAZY</h5>
	<div class="fcc">
		<input type="text" v-model.lazy="lazy">
		{{lazy}},{{typeof lazy}}
		<input type="text" v-model="notlazy">
		{{notlazy}},{{typeof notlazy}}
	</div>
	<h5 class="mt-5">.ENTER</h5>
	<div class="fcc" @keyup.enter="console('enter')">
		<button class="btn btn-info" @click.alt="console('alt')" > click + alt</button>
	</div> -->
</div>
</template>

<script>
export default {
	data() {
		return {
			user:"",
			number:"",
			text:"",
			lazy:"",
			notlazy:"",
			password:"",
			errors:[],
			userLogged:false,
			users:['alejo','ivan','nahuel']
		}
	},
	methods:{
		console(text){
			console.log('text',text);
		},
		submit(){
			if (!this.user){
				this.errors.push('no hay usuario')
			}
			if (!this.password){
				this.errors.push('no hay contraseña')
			}
			if (!this.user||!this.password){
				return
			}

			let userExists = this.users.find(user => user == this.user)
			if (!userExists) {
				alert('No se encontro ese usuario');
			}
			alert('Usuario Logueado');
			this.userLogged = true
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