const vm = new Vue({
    el: '#app',
    data() {
        return {
            google: {},
            microsoft: {},
        }
    },
    methods: {
        fetchGoogle() {
            fetch('https://cloud.iexapis.com/stable/stock/googl/quote?token=pk_bea744d3560e47cdb6cf2f220123b65c')
                .then(r => r.json())
                .then(google => {
                    this.google = google
                })
        },

        fetchMicrosoft() {
            fetch('https://cloud.iexapis.com/stable/stock/msft/quote?token=pk_bea744d3560e47cdb6cf2f220123b65c')
                .then(r => r.json())
                .then(microsoft => {
                    this.microsoft = microsoft
                })
        },
        puxarDados() {
            this.fetchGoogle()
            this.fetchMicrosoft()
        }
    },
})