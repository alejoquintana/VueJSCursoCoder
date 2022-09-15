<template>
	<div class="container">
		<form action="">
			<div class="row justify-content-center">
				<div class="col col-6">
					<br /><br />
					<label for="inputNombre" class="text-start">Tu nombre</label>
					<input type="text" class="form-control" id="inputNombre" placeholder="Nombre completo" 
					v-model="name"/>
					<p>Validar Nombre: <span class="text-success fw-bold">{{name}}</span></p>
					<br />
					<label for="inputEdad" class="form-label text-start">Edad</label>
					<input type="number" class="form-control" id="inputEdad" placeholder="Edad" 
					v-model="age"/>
					<p>Validar Edad: <span class="text-success fw-bold">{{age}}</span></p>
					<br />
					<label for="inputEmail" class="form-label text-start">Email</label>
					<input type="email" class="form-control" id="inputEmail" placeholder="tu@email.com" 
					v-model="email"/>
					<p>Validar Email: <span class="text-success fw-bold">{{email}}</span></p>

					<br />
					<div class="row">
						<h4>Selecciona tu curso</h4>
						<div class="col col-2">
							<div class="form-check">
								<input class="form-check-input" type="checkbox" value="JavaScript" id="JavaScript" 
								v-model="checked"/>
								<label class="form-check-label" for="JavaScript">
									JavaScript
								</label>
							</div>
							<div class="form-check">
								<input class="form-check-input" type="checkbox" value="React" id="React" 
								v-model="checked"/>
								<label class="form-check-label" for="React"> React </label>
							</div>
							<div class="form-check">
								<input class="form-check-input" type="checkbox" value="Angular" id="Angular" 
								v-model="checked"/>
								<label class="form-check-label text-start" for="Angular">
									Angular
								</label>
							</div>
							<div class="form-check">
								<input class="form-check-input" type="checkbox" value="Vue" id="Vue" 
								v-model="checked"/>
								<label class="form-check-label" for="Vue"> Vue </label>
							</div>
						</div>
						<p>Validar Chequeados: <span class="text-success fw-bold">{{checked}}</span></p>
					</div>
					<br />
					<label for="amount" class="form-label text-start">Cantidad</label>
					<select name="amount" id="amount" class="form-select"
					v-model="amount">
						<option v-for="option in options" :key="option.value" :value="option.value">
							{{option.text}}
						</option>
					</select>
					<p>Validar Amount: <span class="text-success fw-bold">{{amount}}. type:{{typeof amount}}</span></p>

					<label for="amount" class="form-label text-start">Cantidad Multiple</label>
					<select name="amount" id="amount" class="form-select" multiple
					v-model="multiAmount">
						<option v-for="option in options" :key="option.value" :value="option.value">
							{{option.text}}
						</option>
					</select>
					<p>Validar Amount: <span class="text-success fw-bold">{{multiAmount}}. type:{{typeof multiAmount}}</span></p>
					
					<br />
					<label for="areaComentarios" class="form-label text-start">Comentarios</label>
					<textarea class="form-control" id="areaComentarios" rows="3"></textarea>
					<br />
					<div class="row">
						<h4>Tipo de documento</h4>
						<div class="col">
							<input type="radio" name="checkDNI" class="form-check-input" />
							<label for="checkDNI">DNI</label>
						</div>
						<div class="col">
							<input type="radio" name="checkPass" class="form-check-input" />
							<label for="checkDNI">Pasaporte</label>
						</div>
						<div class="col">
							<input type="radio" name="checkVisa" class="form-check-input" />
							<label for="checkDNI">VISA</label>
						</div>
					</div>
					<hr />
					<div class="row">
						<br />
						<div class="col-10"></div>
						<br />
						<div class="col-2">
							<input type="submit" class="btn btn-primary" value="ENVIAR" />
						</div>
						<br />
					</div>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	name: "FormularioWeb",
	data() {
		return {
			name: "",
			email: "",
			age:0,
			checked:[],
			amount:0,
			multiAmount:[],
			options:[
				{value:0,text:"Seleccionar Opcion"},
				{value:1,text:"Uno"},
				{value:2,text:"Dos"},
				{value:3,text:"Tres"},
			]
		}
	},
};
</script>

<style scoped>
a {
  color: #42b983;
}
label {
  margin-left: 0.5em !important;
}
</style>
