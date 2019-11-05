console.log('a = ', a);
var a = 2;
console.log('a = ', a);

// isso é análago à:

var a // hoisting = içamento, jogou a declaração da variável pro início do código
console.log('a = ', a);
a = 2;
console.log('a = ', a);


console.log('a = ', a);
let a = 2; // nesse caso n ocorre o hoisting
console.log('a = ', a);