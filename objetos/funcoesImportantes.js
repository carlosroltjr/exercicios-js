const pessoa = {
    nome: 'Nadya'
    , idade: 23
    , peso: 68
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(element => {
    console.log(`${element[0]}: ${element[1]}`);
});
// ou
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
});

Object.defineProperty(pessoa, 'dataDeNascimento', {
    enumerable: true // pode ser listada
    , writable: false // não pode ser sobrescrita
    , value: '19/09/1996'
});

pessoa.dataDeNascimento = '02/04/2000'; // tentativa de sobrescrever
console.log(pessoa.dataDeNascimento);

// Object.assign (ECMAScript 2015)
const destino = {a: 1};
const obj1 = {b: 2};
const obj2 = {c: 3, a: 4};
const obj3 = Object.assign(destino, obj1, obj2);
console.log(obj3);

Object.freeze(obj3);
obj3.a = 1245;
console.log(obj3);