var exemploComponent = {
    template: '<div><p>Exemplo de componente</p></div>'
}

new Vue({
    el: '#app',
    components: {
        'exemplo': exemploComponent
    },
    data() {
        return {

        }
    },
})