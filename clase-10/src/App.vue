<template>
	<div id="app">
		<h1>Nuestros cursos</h1>
		<ul>
			<li v-for="curso in cursos" :key="curso.id">
				{{curso.name}}, {{curso.price}} <button @click="borrar(curso.id)">borrar</button>
			</li>
		</ul>
		<button @click="getCursos()">GET</button>

		<h2>Crear un curso</h2>
		<div class="fcc">
			<span>name</span>
			<input type="text" v-model="dataCurso.name">
			<span>price</span>
			<input type="text" v-model="dataCurso.price">
			<button @click="postCurso()">POST</button>
		</div>
		<button @click="putCurso()">PUT</button>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				cursos: [],
				dataCurso:{
					"name":"Deno js",
					"price":"25",
				},
				URL: "https://632ba0ac5568d3cad872d716.mockapi.io/products"
			}
		},
		methods: {
			async getCursos() {
				await this.axios.get(this.URL)
					.then((response) => this.cursos = response.data)
					.catch((err) => {console.log('error', err)})
					.finally(() => console.log('Peticion terminada'))
			},
			async postCurso() {
				await this.axios.post(this.URL, this.dataCurso)
					.then((response) => console.table(response.data))
					.catch((err) => console.error(err))
					.finally(() => console.log('Peticion terminada'))
			},
			async putCurso() {
				let dataCurso = {
					"name":"updated",
					"price":"69",
				}
				await this.axios.put(this.URL+'/'+this.cursos[0].id,dataCurso)
					.then((response) => console.table(response.data))
					.catch((err) => console.error(err))
					.finally(() => console.log('Peticion terminada'))
			},
			async borrar(curso_id){
				await this.axios.delete(this.URL+'/'+curso_id)
					.then((response) => console.table(response.data))
					.catch((err) => console.error(err))
					.finally(() => console.log('Peticion terminada'))
			},
			/*
			async getCursos() {
				const controller = new AbortController()
				setTimeout(() => {
					controller.abort()
				}, 2000);

				await fetch(this.URL, {
						signal: controller.signal
					})
					.then((response) => response.json())
					.then((json) => {
						json.forEach(element => {
							console.table(element);
						});
						this.cursos = json
					})
					.catch((err) => {
						if (err.name == "AbortError") {
							console.log('error por limitacion de tiempo')
						} else {
							console.log('error', err.name)
						}
					})
					.finally(() => console.log('Peticion terminada'))
			},
			async postCurso() {
				const cursoData = {
					"nombre": "Deno",
					"creado": "2021-10-25",
					"duracion": 16
				}

				let encabezado = {
					method: "POST",
					headers: {
						//"Accept": "application/json",
						"Content-Type": "application/json",
					},
					body: JSON.stringify(cursoData)
				}

				console.log('encabezado.body',encabezado);

				await fetch(this.URL, encabezado)
					.then((response) => response.json())
					.then((json) => console.table(json))
					.catch((err) => console.error(err))
					.finally(() => console.log('Peticion terminada'))
			},
			async putCurso() {
				const cursoData = {
					"nombre": "TypescriptCurso",
					"creado": "2021-10-25",
					"duracion": "50"
				}

				let encabezado = {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(cursoData)
				}
				await fetch(this.URL+'/6', encabezado)
					.then((response) => response.json())
					.then((json) => console.table(json))
					.catch((err) => console.error(err))
					.finally(() => console.log('Peticion terminada'))
			},
			async borrar(curso_id){
				let encabezado = {
					method: "DELETE",
				}
				await fetch(this.URL+'/'+curso_id, encabezado)
					.then((response) => response.json())
					.then((json) => console.table(json))
					.catch((err) => console.error(err))
					.finally(() => console.log('Peticion terminada'))
			}  */
		},
	}
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
	.fcc{
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	button{
		margin-top: 24px;
	}
</style>