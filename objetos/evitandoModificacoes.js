// Object.preventExtensions impede que adicione novos atributos no objeto
const produto = Object.preventExtensions({
    nome: 'maconha'
    , preco: 25
    , tag: 'promoção'
});

console.log('Extensível:', Object.isExtensible(produto));

produto.nome = 'Borracha'; // pode modificar
produto.descricao = 'Borracha escolar branca'; // não pode adicionar
delete produto.tag; // pode excluir
console.log(produto);

// Object.seal impede que adicione ou exclua atributos do objeto
const pessoa = {nome: 'Nadya', idade: 15};
Object.seal(pessoa);
console.log('Selado:', Object.isSealed(pessoa));
console.log(pessoa);

pessoa.sobrenome = 'Vicentini'; // não pode adicionar
delete pessoa.nome; // não pode excluir
pessoa.idade = 23;
console.log(pessoa);

// Object.freeze = selado + valores constantes
// não pode mudar NADA no objeto