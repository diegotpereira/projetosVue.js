new Vue({
    el: '#app',
    data() {
        return {
            valor: 2,
            link: `https://www.google.com`,
            mensagem: `Exemplos em Vue.js` ,
            alunos: ['Fulano', 'Sicrano', 'Beltrano']
        }
    },
    computed: {
        valorDuplicado() {
            return this.valor * 2
        } 
    },
    methods: {
        somar(a , b) {
            return a + b
        },
        multiplicar(a, b) {
            return a * b
        },
        calcular(a, b) {
            return this.somar(a, b)
        },
        clicou(botao) {
            alert(`clicou no ` + botao)
        },
        digitou() {
            alert(`clicou no `)
        }
    }
})