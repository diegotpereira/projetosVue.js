console.clear()

const cores = [{
    opcoes: ['vermelho', 'amarelo', 'verde'],
    selecionarOpcao: 'amarelo'
}]

new Vue({
    el: '#app',
    data() {
        return {
            cores
        }
    },
})