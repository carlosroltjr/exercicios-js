function soma () {
    let soma = 0;
    for (i in arguments) {
        soma += arguments[i];
    }
    return soma
}

console.log(soma());
console.log(soma(1));
console.log(soma(2, 5, 6));

console.log(soma(2, 5, ' teste'));
console.log(soma('a', 'b', 'c')); // aparece 0 pq foi atribuido esse valor na função



const teste = function (a, b) {
    console.log(arguments);
    return a + b
}
console.log(teste(254, 66));
