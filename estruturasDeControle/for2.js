const notas = [6.7, 7.4, 9, 8.2, 5.4];

// não é muito usado para arrays
for (let i in notas) {
    console.log(`índice ${i}, nota: ${notas[i]}`);
}

const pessoa = {
    nome: 'Nadya'
    , sobrenome: 'Vicentini'
    , idade: 23
    , peso: 67
    , altura: 1.78
}

// é legal usar pra percorrer atributos de um objeto
for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}