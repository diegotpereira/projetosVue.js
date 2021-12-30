new Vue({
    el: '#app',
    data() {
        return {
            contador: 0,
            x: 0,
            y: 0
        }
    },
    methods: {
        soma: function(numPar, evento) {
            console.log(evento);
            this.contador += numPar
        },
        atualizarXY: function(e) {
            console.log(e);
            this.x = event.clientX
            this.y = event.clientY
        },
        parar: function(e) {
            e.stopPropagation();
        },
        alerta: function(e) {
            console.log(e);
            alert('Você apertou ' + e.key)
        }
    }
})