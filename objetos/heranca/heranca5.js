console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

// split separa os caracteres de uma string num array
// join junta os elementos do array em uma string
// reverse é um método da função Array, neste exemplo estamos
// criando um método reverse para a função String
String.prototype.reverse = function() {
    return this.split('').reverse().join('');
}

console.log('Nadya linda de maravilhosa'.reverse(''));

// criando o método first para o prototype de Array
Array.prototype.first = function() {
    return this[0];
}

console.log([1, 2, 3, 4, 5].first());
console.log(['a', 'b', 'c', 'd', 'e'].first());