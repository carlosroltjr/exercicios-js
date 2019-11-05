function getInteiroAleatorioEntre (max, min) {
    const intervalo = Math.random() * (max - min) + min;
    return Math.floor(intervalo);
}

let valor = -1;

do {
    valor = getInteiroAleatorioEntre(-1, 10);
    console.log(`O valor escolhido é ${valor}`);
} while (valor != -1);