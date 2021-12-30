const vm = new Vue({
    el: '#app',
    data() {
        return {
            contador: 0,
            ativo: true,
            mouse: ''
        }
    },
    methods: {
        handleClick(event) {
            console.log(event.key);
        },
        handleMove(event) {
            this.mouse = event
        }
    },
})