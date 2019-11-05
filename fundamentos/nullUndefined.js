let valor; // não inicializada
console.log(valor);

// console.log(valor2);  valor2 nem foi declarada (is not defined)

valor = null; // ausência de valor
console.log(valor);

const produto = {};
console.log(produto.preco); // produto está definido mas o preço não

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco); // transforma em boolean, é false por que está undefined
console.log(produto);

produto.preco = null // sem preço
// delete produto.preco apaga o atributo do objeto
console.log(!!produto.preco)
console.log(produto);
