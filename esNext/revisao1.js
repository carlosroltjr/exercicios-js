// let e const
{
    var a = 2;
    let b = 3;
    console.log(b);
}

console.log(a); // var não tem escopo de bloco, por isso podemos chamar...
// console.log(b); // b não está definido nesse escopo pois let tem escopo de bloco

// Template String
const produto = 'Magic';
console.log(`${produto} é caro... 
Mas é irado!!`);

// Destructuring (atribui valores às variáveis desestruturando strings, arrrays, ...)
const [l, e, ...tras] = 'Nadya💜';
console.log(l, e, tras);

const [x, , y] = [1, 2, 3];
console.log(x, y);

const { idade, nome } = { nome: 'Nadya', idade: 23 };
console.log(nome, idade);