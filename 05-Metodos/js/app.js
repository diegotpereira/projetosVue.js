new Vue({
    el: '#app',
    data() {
        return {
            mensagem: 'Vue.js Model'
        }
    },

    methods: {
        ola() {
            this.mensagem = 'Método Chamado'
        }
    },
})