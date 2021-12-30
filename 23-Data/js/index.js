const vm = new Vue({
    el: '#app',
    data() {
        return {
            logado: ''
        }
    },
})

setTimeout(() => {
    vm.logado = 'Sim'
}, 3000)