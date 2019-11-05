const produtos = [
    {nome: 'Notebook', preco: 2500, fragil: true}
    , {nome: 'Tablet', preco: 4200, fragil: true}
    , {nome: 'Copo de vidro', preco: 12.5, fragil: true}
    , {nome: 'Copo de plástico', preco: 10, fragil: false}
];

console.log(produtos.filter(el => el.preco > 8 && el.fragil));