var app = new Vue({
    el: '.app',
    data() {
        return {
            titulo: 'Vbind Classe Estilo',
            btnClasseLimpar: {
                'btn-danger': true,
                'btn-sm': false
            },
            btnClasseEnviar: {

            },
            btnEstiloLimpar: {
                'text-transform': 'uppercase'
            },
            btnEstiloEnviar: [{
                    'text-transform': 'uppercase'
                },
                {
                    'font-weight': '600'
                }
            ]
        }
    },
})