var mixin = {
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
};


new Vue({
    el: '#app',
    mixins: [mixin]
})