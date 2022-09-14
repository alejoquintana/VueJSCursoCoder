export default {
	data() {
		return {
			carrito: [{product:null,amount:1}],
		}
	},
	methods: {
		addToCarrito(product) {
			console.log('132', 132);
			console.log('this.carrito', this.carrito);
			this.carrito = this.carrito.push({ product: product, amount: 1 })
		}
	},
};