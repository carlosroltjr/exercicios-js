/** 
 * Tagged template -> processa o template dentro de uma função
 * No lugar de 'tag' pode ser escrito qualquer outra coisa
 * É útil usar para separar valores monetários (R$ 10,89)
 */

function tag(partes, ...valores) {
    console.log(partes);
    console.log(valores);
    return 'Outra string';
};

const aluno = 'Nadya';
const situacao = 'Aprovado';
console.log(tag`${aluno} está ${situacao}.`);