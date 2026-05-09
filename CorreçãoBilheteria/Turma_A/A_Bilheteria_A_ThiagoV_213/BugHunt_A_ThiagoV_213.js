let convidados = ["Rafaela", "Felipe", "Nicolas", "Amado", "Miguel"]; 
// tirar SAIR do array de nomes
let entrada = [];
let i = 0;
while (entrada.length < 5) {
console.log("Processando convidado: ", convidados[i]); 
if (convidados[i] == "SAIR") {
break; // Colocar o break; dentro do IF
}
entrada.push(convidados[i]);
i++;
}
console.log("Lotação esgotada!");
console.log(entrada);
