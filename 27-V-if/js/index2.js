const vm = new Vue({
    el: '#app',
    data() {
        return {
            estoqueBanana: 7,
            carrinho: 0,
        }
    },
    methods: {
        adicionarItem() {
            this.carrinho++
                this.estoqueBanana--
        },
        removerItem() {
            this.carrinho--
                this.estoqueBanana++
        }
    },
})