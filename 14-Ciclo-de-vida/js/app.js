new Vue({
    el: '#app',
    data() {
        return {
            mensagem: 0
        }
    },

    created() {
        console.log('vue foi criada.');
    },

    mounted() {
        console.log('vue foi montada');
    },

    updated() {
        console.log('vue foi atualizada');
    },
    methods: {
        clicou() {
            this.mensagem = this.mensagem + 1
        }
    },
})