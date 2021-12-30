new Vue({
    el: '#app',
    data() {
        return {
            titulo: 'Usando VueJS',
            link: 'https://www.google.com'
        }
    },
    methods: {
        saudacao: function() {
            console.log(this);

            return this.titulo
        }
    },
})