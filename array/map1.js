const nums = [1, 2, 3, 4, 5];

// For com propósito
let resultado = nums.map(el => el * 2);
console.log(resultado);

const soma10 = el => el + 10;
const triplo = el => el * 3;
const paraDinheiro = el => `R$ ${parseFloat(el).toFixed(2).replace('.', ',')}`;

resultado = nums.map(soma10).map(triplo).map(paraDinheiro);
console.log(resultado);

