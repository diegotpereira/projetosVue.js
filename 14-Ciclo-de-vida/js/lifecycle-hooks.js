var app = new Vue({
    el: '.app',
    beforeCreate() {
        console.log('beforeCreate');
        console.log('Título', this.titulo);
        console.log('el', this.$el);
    },
    created() {
        console.log('created');
        console.log('Título', this.titulo);
        console.log('el', this.$el);
    },
    beforeMount() {
        console.log('beforeMount');
        console.log('Título', this.titulo);
        console.log('el', this.$el);
    },
    mounted() {
        console.log('mounted');
    },
    beforeUpdate() {
        console.log('beforeUpdate');
    },
    updated() {
        console.log('updated');
    },
    data() {
        return {
            titulo: 'Lifecycle e Hooks'
        }
    },
})