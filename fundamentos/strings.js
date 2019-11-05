const escola = "Cod3r";

console.log(escola.charAt(4));
console.log(escola.charAt(5)); // não existe, então não mostra nada
console.log(escola.charCodeAt(3)); // mostra o unicode do 3
console.log(escola.indexOf('o'));  // mostra o índice da letra o na string

console.log(escola.substring(2)); // mostra a string toda a partir do índice informado
console.log(escola.substring(0, 3)); // não inclui o segundo índice informado

console.log('Escola '.concat(escola).concat('!'));
console.log(escola.replace(3, 'e'));
console.log(escola.replace(/\w/g, 'e')); // substitui todas letras por e (usa rejects(?))

console.log('Ana, Maria, Pedro'.split(',')); // gera um array

