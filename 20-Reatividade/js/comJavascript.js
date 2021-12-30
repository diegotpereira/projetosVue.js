const dados = {
    preco: 49,
    total: 0
}

const preco = document.querySelector('.preco')
const total = document.querySelector('.total')
const precoTotal = document.querySelector('.precoTotal')
const adicionar = document.querySelector('.adicionar')
const remover = document.querySelector('.remover')

preco.innerHTML = dados.preco
total.innerHTML = dados.total
precoTotal.innerHTML = dados.preco + dados.total

function incrementar() {
    dados.total++
        atualizarUI()
}

function decrementar() {
    dados.total--
        atualizarUI()
}


function atualizarUI() {
    total.innerText = dados.total
    precoTotal.innerHTML = dados.total * dados.preco
}

adicionar.addEventListener('click', incrementar)
remover.addEventListener('click', decrementar)