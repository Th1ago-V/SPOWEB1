function validarNumero() { // Função presente na tag <input> do código HTML
    let Numero = document.getElementById("numero").value; //Obtém o VALOR digitado pelo usuário no input com id="numero"
    let Mensagem = document.getElementById("mensagem"); //Elemento HTML (o elemento em si) com id="mensagem"

    if (Numero === "") {
        Mensagem.textContent = "Por favor, insira um número."; //muda o mensagem
        Mensagem.style.color = "red"; // Feedback visual de erro
    } 
    else {  // Transforma a string recebida em número inteiro
        Numero = parseInt(Numero); 

        if (Numero > 10) {
            Mensagem.textContent = "O número é maior que 10."; //muda o mensagem
            Mensagem.style.color = "green"; // Feedback visual
        } 
        else {
            if (Numero > 5) {
                Mensagem.textContent = "O número é maior que 5, mas menor ou igual a 10."; //muda o mensagem
                Mensagem.style.color = "orange"; // Feedback visual
            } 
            else {
                Mensagem.textContent = "O número é 5 ou menor."; //muda o mensagem
                Mensagem.style.color = "blue"; // Feedback visual
            }
        }
    }
}