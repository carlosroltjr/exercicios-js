const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}'
    , '{"nome": "Caderno", "preco": 13.90}'
    , '{"nome": "Kit de Lápis", "preco": 41.22}'
    , '{"nome": "Caneta", "preco": 7.50}'
];

// Retornar um array apenas com os preços usando map()

// minha solução
const resultado = carrinho.map(el => JSON.parse(el).preco);
console.log(resultado);

// solução do professor
const paraObj = json => JSON.parse(json);
const apenasPreco = produto => produto.preco;

const resultado2 = carrinho.map(paraObj).map(apenasPreco);
console.log(resultado);