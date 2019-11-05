// o objeto que vai ser exportado desse arquivo será sempre o module.exports
// por isso não adianta atribuir valores diferentes para exports
console.log(module.exports);
console.log(module.exports === this);
console.log(module.exports === exports);

this.a = 1;
exports.b = 2;
module.exports.c = 3;

exports = null;
console.log(module.exports);

exports = {
    nome: 'Nadya'
};
console.log(module.exports);

module.exports = {
    publico: true
};