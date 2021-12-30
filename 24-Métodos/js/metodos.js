const vm = new Vue({
    el: '#app',
    data() {
        return {
            total: 0,
            instrumento: ''
        }
    },
    methods: {
        incrementar() {
            this.total++
                this.teste()
        },
        decrementar() {
            this.total--
                this.teste()
        },
        mudarNome(instrumento) {
            this.instrumento = instrumento
        },
        verEvento(event) {
            console.log(event);
        },
        teste() {
            console.log('Método ativado');
        }
    },
})