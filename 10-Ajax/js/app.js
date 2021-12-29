new Vue({
    el: '#app',
    created() {
        this.buscardados()
    },

    data() {
        return {
            postagens: []
        }
    },

    methods: {
        buscardados() {
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(response => {
                    this.postagens = response.data
                })
        }
    },
})