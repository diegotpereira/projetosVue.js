new Vue({
    el: '#app',
    data() {
        return {
            quantidade: 0
        }
    },

    methods: {
        clicou() {
            this.quantidade = this.quantidade + 1
        },

        limpar() {
            this.quantidade = 0
        },

        apresentarBotaoLimpar() {
            if (this.quantidade < 3) {
                return `none`
            }

            return `block`
        }
    }
})