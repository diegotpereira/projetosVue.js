var app = new Vue({
    el: '.app',
    data() {
        return {
            titulo: 'Filtros',
            usuarios: [
                { nome: 'Bob Marley' },
                { nome: 'Peter Tosh' },
                { nome: 'Bunny Wailer' }
            ]
        }
    },
    filters: {
        toUpperCase(str) {

            return str.toUpperCase()
        },
        truncate(str, length) {
            var output = str

            if (output.length > length) {
                output = str.substring(0, length) + ' ...'
            }
            return output
        }
    },
    methods: {
        enviar() {
            alert('enviado')
        }
    },
})