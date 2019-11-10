// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj));
console.log(Object.entries(obj));

// Melhorias na Notação Literal
const nome = 'Carlos';
const pessoa = {
    nome
    , ola() {
        return 'E aí raça, de boa?';
    }
};
console.log(`${pessoa.nome} diz: ${pessoa.ola()}`);

// Class
class Animal { };
class Cachorro extends Animal {
    falar() {
        return 'Au au!';
    }
};
console.log(new Cachorro().falar());