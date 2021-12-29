new Vue({
    el: '#app',
    data() {
        return {
            mensagem: ``
        }
    },
    filters: {
        upperCase (value) {
            return value.toUpperCase()
        }
    }
})