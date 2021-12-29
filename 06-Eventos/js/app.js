new Vue({
    el: '#app',
    data() {
        return {
            mensagem: 'Vue.js Model'
        }
    },

    methods: {
        chave: function(event) {
            this.mensagem = 'chave ' + event.key + ' (' + event.keyCode + ')';
        }
    },
})