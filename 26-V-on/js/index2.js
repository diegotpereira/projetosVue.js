const vm = new Vue({
    el: '#app',
    data() {
        return {
            acao: {}
        }
    },
    methods: {
        puxarAcao(event) {
            const url = event.currentTarget.href
            fetch(url)
                .then(r => r.json())
                .then(r => {
                    this.acao = r
                })
        }
    },
})