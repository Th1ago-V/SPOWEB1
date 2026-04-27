let caixas = [];
for(i = 1; i<=10; ++i ){
    console.log("Caixa ", i, " em analise");
    if(i == 5 || i == 8){
        console.log("caixa extraviada");
        continue;
    }
    if(i == 9){
        console.log("ERRO!");
        break;
    }
    caixas.push(i)
    console.log("Caixa ", i, " conferida");
}
console.log("Caixas no estoque: ")
for(i = 0; i<=10; ++i ){
    console.log(caixas[i])
}
    