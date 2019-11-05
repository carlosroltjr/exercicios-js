var numero = 1;
{
    var numero = 2;
    console.log('dentro = ', numero);
}

// var ignora qlqr bloco de código menos o de função
// fazendo com q nesse caso, o var fique no escopo global

console.log('fora = ', numero);