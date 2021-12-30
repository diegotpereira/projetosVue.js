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
            return this.maiorNum >= 5 ?
                'Maior ou igual a 5' : 'Menor que 5'
        }
    },
    watch: {
        maiorNum(novo, antigo) {
            console.log(novo, antigo);
            setTimeout(() => {
                this.maiorNum = 0
            }, 2000)
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