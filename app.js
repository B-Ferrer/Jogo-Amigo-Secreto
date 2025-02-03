//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let participantes = []

function exibirTextoNaTela(tag, texto) {
    let campo = document.querrySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h2', "Digite o nome dos seus amigos.")
}

exibirMensagemInicial();

function adicionarParticipante() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    
    if (nome && !participantes.includes(nome)) {
        participantes.push(nome);
        atualizarLista();
        input.value = "";
    } else {
        alert("Nome inválido ou já adicionado!");
    }
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = participantes.map(nome => `<li>${nome}</li>`).join("");
}

function sortearAmigo() {
    if (participantes.length < 2) {
        alert("Adicione pelo menos 2 participantes!");
        return;
    }
    
    let sorteados = [...participantes];
    let resultado = {};

    for (let p of participantes) {
        let possiveis = sorteados.filter(s => s !== p);
        if (possiveis.length === 0) {
            return alert("Erro no sorteio. Tente novamente!");
        }
        let sorteado = possiveis[Math.floor(Math.random() * possiveis.length)];
        resultado[p] = sorteado;
        sorteados = sorteados.filter(s => s !== sorteado);
    }
    
    mostrarResultado(resultado);
}

function mostrarResultado(resultado) {
    const resLista = document.getElementById("resultado");
    resLista.innerHTML = Object.entries(resultado)
        .map(([p, s]) => `<li>${p} → ${s}</li>`).join("");
}
