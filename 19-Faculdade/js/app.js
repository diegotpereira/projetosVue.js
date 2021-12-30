const vm = new Vue({
    el: '#app',
    data() {
        return {
            nome: 'Fulano de Tal',
            idade: 25,
            faculdade: {
                possui: 'sim',
                curso: 'ADS Análise ...'
            }
        }
    },
})

vm.nome = "João"
console.log(vm);