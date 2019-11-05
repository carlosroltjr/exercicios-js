// pessoa aponta para um endereço de memória que aponta para o objeto
// pessoa -> 2331 -> {...}
const pessoa = {nome: 'Nadya'};
pessoa.nome = 'Nadya Linda';
console.log(pessoa);

// pessoa -> 4345 -> {...} 
// pessoa = {nome: 'Lilica'}; dá erro pq tenta atribuir um obejeto novo para a constante pessoa

// não da pra mudar nada no objeto depois de usar freeze
Object.freeze(pessoa)
pessoa.nome = 'Nenein';
console.log(pessoa);

const pessoaConstante = Object.freeze({nome: 'Carlos'});
pessoaConstante.nome = 'Pupo';
console.log(pessoaConstante);