const vm = new Vue({
    el: '#app',
    data() {
        return {
            nome: 'Martelo'
        }
    },
})

const vm1 = new Vue({
    el: '#app1',
    data() {
        return {
            ferramentas: vm.nome,
        }
    },
})

const vm2 = new Vue({
    el: '#app2',
    data() {
        return {
            instrumentos: 'Piano'
        }
    },
})