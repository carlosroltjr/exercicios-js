// operador ... rest(juntar)/spread(espalhar)
// usar rest como parâmetro de função

// usar spread com objeto (espalha todos os atributos do objeto dentro de 'clone')
const funcionario = {
    nome: 'Maria'
    , salario: 2113.6
};
const clone = { ativo: true, ...funcionario };
console.log(clone);

// usar spread com objeto (espalha todos os elementos do array dentro de 'grupoFinal')
const grupoA = ['Carlos', 'Nadya', 'Roberto'];
const grupoFinal = ['victória', ...grupoA];
console.log(grupoFinal);