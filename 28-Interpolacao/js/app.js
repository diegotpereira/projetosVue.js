const vm = new Vue({
    el: '#app',
    data() {
        return {
            contador: 0,
            x: 0,
            y: 0
        }
    },
    methods: {
        soma: function() {
            this.contador++
        }
    },
})