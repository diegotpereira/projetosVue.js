var app = new Vue({
    el: '.app',
    data() {
        return {
            titulo: 'Computed e Wath',
            nome: '',
            sobrenome: ''
        }
    },
    computed: {
        nomeCompleto() {

            return this.nome + '' + this.sobrenome
        }
    },
    watch: {
        nome(newValue) {
            this.atualizarUsuario()
        }
    },
    methods: {
        atualizarUsuario() {
            console.log('Usuário Atualizado');
        }
    },
})