new Vue({
    el: '#app',
    data() {
        return {
            maiorNum: 0,
            maiorNum_2: 0
        }
    },
    computed: {
        resultado: function() {
            console.log('Chamando Método');

            return this.maiorNum >= 5 ?
                'Maior ou igual a 5' : 'Maior que 5'
        }
    },
    methods: {
        maior: function() {
            this.maiorNum++
        },
        menor: function() {
            this.maiorNum--
        }
    },
})