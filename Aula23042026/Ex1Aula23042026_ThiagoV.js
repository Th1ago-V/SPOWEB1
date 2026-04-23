let i = 0;
while (i < 5) {
    console.log("Número: ", i+1);
    // O que falta aqui para o loop não rodar para sempre?
    // R: Falta uma virgula no console.long, que deve estar posicionada depois do "Número: "; 
    // Além de que, para o console.log mostrar o sucessor de i, é preciso colocar i+1
    // Assim, a linha de código correta é console.log("Número: ", i+1);
    // Por fim, para que o loop aconteça, devesse colocar ++i como ultima linha antes da chave do while
}