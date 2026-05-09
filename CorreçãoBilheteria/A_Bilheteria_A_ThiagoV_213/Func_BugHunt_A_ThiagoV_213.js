let convidados = []; 
let i = 0;

function Criar_Lista() {
    let input = document.getElementById("ad_nome");
    let listaHTML = document.getElementById("lista");
    let nome = input.value.trim();

    let titulo = document.getElementById("ttl");
    let paragrafo = document.getElementById("p1")


    if (nome.toUpperCase() === "SAIR" || i == 5) {
        input.disabled = true;
        titulo.textContent = "LISTA CHEIA";
        paragrafo.textContent = "Não há mais espaço na lista de convidados :(";
        return;
    }

    if (nome !== "") {
        convidados.push(nome);

        let novoNome = document.createElement("li");
        novoNome.textContent = nome; 
        
        listaHTML.appendChild(novoNome);

        ++i;
    }
}