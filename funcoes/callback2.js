const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

// o jeito q eu fiz depois de ver a resolução
const notasMenoresQue7_1 = [];
notas.forEach(nota => {if (nota < 7) notasMenoresQue7_1.push(nota);});
console.log(notasMenoresQue7_1);



// Sem callback
const notasBaixas1 = [];
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i]);
    }
}
console.log(notasBaixas1);

// Com callback
const notasBaixas2 = notas.filter(nota => nota < 7);
console.log(notasBaixas2);

// ou ainda
const notasMenoresQue7_2 = nota => nota < 7; // assim a função fica mais fácil de reutilizar
const notasBaixas3 = notas.filter(notasMenoresQue7_2);
console.log(notasBaixas3);

