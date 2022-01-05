var app = new Vue({
    el: '.app',
    data() {
        return {
            titulo: 'V-bind Classe Estilo'
        }
    },
    methods: {
        enviar() {
            alert('enviado')
        }
    },
})