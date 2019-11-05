const nums = [23, 54, 1, 5, 15, 7];
const produtos = [
    {nome: 'Notebook', preco: 2500, fragil: true}
    , {nome: 'Tablet', preco: 4200, fragil: true}
    , {nome: 'Copo de vidro', preco: 12.5, fragil: true}
    , {nome: 'Copo de plástico', preco: 10, fragil: false}
];

Array.prototype.filter2 = function(callback) {
    const arr = [];
    for(let i = 0; i < this.length; i++) {
        if((callback(this[i], i, this))) {
            arr.push(this[i]);
        }
    }
    return arr;
};

console.log(nums.filter2(el => el >= 10));
console.log(produtos.filter2(el => el.preco > 8 && el.fragil));
