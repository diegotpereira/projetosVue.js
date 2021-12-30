const vm = new Vue({
    el: '#app',
    data() {
        return {
            empresa: 'Apple',
            produtos: 'IPhone'
        }
    },
})

const vm2 = new Vue({
    el: '#quadrado',
    data() {
        return {
            lado: 30
        }
    },
})