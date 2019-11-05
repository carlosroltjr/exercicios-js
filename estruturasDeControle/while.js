function getInteiroAleatorioEntre (max, min) {
    const valor = Math.random() * (max - min) + min; // Math.random gera um numero de 0 à 1
    return Math.floor(valor);
}

let opcao = 0;

while (opcao != -1){
    opcao = getInteiroAleatorioEntre(-1, 10);
    console.log(`A opção escolhida foi ${opcao}.`);
}

