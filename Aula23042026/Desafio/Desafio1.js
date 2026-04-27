let lista = [];
let controle = 1;
let i = 0;

while (i <= 50){
    for(j = 0; j<i; ++j){
        console.log(lista[j])
    }

    console.log("Digite 1 para adcionar um convidado a lista e digite \"SAIR\" para remover um convidado da lista: ");

    if(controle == 1){ // adcionar convidado
        lista.push("Convidado " + (i+1));
    }

    else if(controle == "SAIR"){ // remover convidado especifico
        console.log("Entre com o número do convidado que deseja sair: ");
        let del = 0; //como não há interface para entrada de dados, deixarei aqui como 0. 
        let index = lista.indexOf("Convidado " + del);
    if (index > -1) {
    lista.splice(index, 1);
    }
    }

    else{ // caso digitada algo diferente de "1" ou "SAIR"
        console.log("Opção inválida")
    }

    i = lista.length
    if(i == 51){
        console.log("Lotação esgotada! Temos 50 inscritos.")
    }
}
