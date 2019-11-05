function getPreco(imposto = 0, moeda = 'BRL') {
    return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)}`;
}

const produto = {
    nome: 'Brawl Decks'
    , preco: 400.00
    , desconto: 0.15
    , getPreco
}

global.preco = 20;
global.desconto = 0.1;
console.log(getPreco());
console.log(produto.getPreco());

const carro = {preco: 25000, desconto: 0.05};

console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

// call e apply
// o objeto (carro, global) vai ser usado como contexto 'this' dentro da função getPreco
console.log(getPreco.call(carro, 0.08, 'US')); // chama os parâmetros um por um
console.log(getPreco.apply(global, [0.1, 'EUR'])); // passa na forma de array os parâmetros
