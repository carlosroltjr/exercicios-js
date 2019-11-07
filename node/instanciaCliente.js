// se o objeto já tiver sido criado, ele retorna a mesma isntância sempre
const contadorA = require('./instanciaUnica');
const contadorB = require('./instanciaUnica');

// invoca a funcao factory retornando um objeto
const contadorC = require('./instanciaNova')();
const contadorD = require('./instanciaNova')();

contadorA.inc(); contadorA.inc();
console.log(`ContA: ${contadorA.valor}, ContB: ${contadorB.valor}`);

console.log(`ContC === ContD ? ${contadorC === contadorD}`);
contadorC.inc(); contadorC.inc();
console.log(`ContC: ${contadorC.valor}, ContD: ${contadorD.valor}`);