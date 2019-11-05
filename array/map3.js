const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}'
    , '{"nome": "Caderno", "preco": 13.90}'
    , '{"nome": "Kit de Lápis", "preco": 41.22}'
    , '{"nome": "Caneta", "preco": 7.50}'
];

Array.prototype.map2 = function(callback) {
    const arr = [];
    for(let i = 0; i < this.length; i++) {
        arr.push(callback(this[i], i, this));

    }
    return arr;
};

const resultado = carrinho.map2(el => JSON.parse(el).preco);
console.log(resultado);

