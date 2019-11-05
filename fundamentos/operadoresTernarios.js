
// função arrow com um parametro não precisa de ()
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' // ? operador ternário
/*
a primeira parte é uma expressão que vai retornar true ou false,
a segunda parte é a imterrogação ?
a terceira parte são as ações que serão realizadas caso a expressão seja
true ou false.
*/
console.log(resultado(7.1));
console.log(resultado(5.3));