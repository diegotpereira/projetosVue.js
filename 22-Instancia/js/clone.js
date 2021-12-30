// Função construtora em JS
function VueClone(options) {
    this.options = options
    this.el = document.querySelector(options.el)
    this.data = options.data
}

const vmClone = new VueClone({
    el: '#app',
    data() {
        return {
            nome: 'Martelo'
        }
    },
})
console.log(vmClone);

// Função construtora em VueJS
const vm = new Vue({
    el: '#app',
    data() {
        return {
            instrumento: 'Violão',
            cor: 'Vermelho'
        }
    },

    computed: {
        nomeProduto() {
            setTimeout(() => {
                console.log('Isso faz timeout', this.instrumento);
            })
            return this.instrumento + ' ' + this.cor
        }
    }
})
console.log(vm);