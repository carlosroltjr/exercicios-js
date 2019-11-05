const fabricantes = ['Mercedes', 'Audi', "BMW"];

function imprimir (nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
};

fabricantes.forEach(imprimir);
fabricantes.forEach( (el => console.log(el))); // el de elemento, pra cada elemento do array...
fabricantes.forEach( (fabricante => console.log(fabricante))); // = o de cima mas com nome de param melhor

/* pra cada um dos elementos do array fabricantes, a função forEach chama a função imprimir ou 
a arrow function, voltando a chamar essas funções conforme for lendo os elementos do array.
*/
