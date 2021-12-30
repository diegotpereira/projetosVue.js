new Vue({
    el: '#app',
    data() {
        return {
            contador: 0
        }
    },
    methods: {
        soma: function() {
            this.contador++
        }
    },
})