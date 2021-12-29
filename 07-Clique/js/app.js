new Vue({
    el: '#app',
    data() {
        return {
            x: ''
        }
    },

    methods: {
        clicado: function() {
            this.x = 'clicado'
        }
    },
})