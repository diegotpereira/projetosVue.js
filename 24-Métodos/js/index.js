const vm = new Vue({
    el: '#app',
    data() {
        return {
            acoes: {}
        }
    },
    methods: {
        puxarAcoes() {
            fetch('https://cloud.iexapis.com/stable/stock/nvda/quote?token=pk_bea744d3560e47cdb6cf2f220123b65c')
                .then(response => response.json())
                .then(json => {
                    this.acoes = json
                })
        }
    },
})