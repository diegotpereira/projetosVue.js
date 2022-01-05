var app = new Vue({
    el: '.app',
    data() {
        return {
            texto: true,
            status: true,
            titulo: 'Olá Vue!',
            usuario: {
                id: 1,
                nome: 'João',
                profissao: 'dev'
            }
        }
    },
})