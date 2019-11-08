require('./global'); // arquivo global.js

console.log(MinhaApp.nome);
console.log(MinhaApp.saudacao());

// Isso é ruim pois dá pra mudar atributos de um objeto que está no global
MinhaApp.nome = 'Eita!';
console.log(MinhaApp.nome);

// Uma alternativa para contornar esse problema é usar o Object.freeze()
// olhar arquivo global.js