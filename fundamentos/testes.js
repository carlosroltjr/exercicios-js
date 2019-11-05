const a = {nome: 'Carlos'};
console.log(a);
const b = a;
b.nome = 'Roberto';
console.log(a, b);
/*
Isso acontece por que a constante a guarda o endereço de
memória do objeto. Atribuindo a à constante b, a constante b 
também passa a guardar o endereço de memória do objeto.
*/


let c = 3;
let d = c;
d++
console.log(c, d);
/*
Com tipos primitivos é criada uma cópia do valor que foi 
armazenado na variável, portanto o comportamento é diferente.
*/