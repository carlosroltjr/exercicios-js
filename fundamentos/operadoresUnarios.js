let num1 = 1;
let num2 = 2;

num1++;
console.log(num1);
--num1;
console.log(num1);


// ++num1 é um operador pré fixado e num2-- é pós fixado.
// antes da comparação, o ++num1 foi realizado. Só depois da comparação é q o num2-- foi realizado.
console.log(++num1 === num2--);
console.log(num1 === num2); 
