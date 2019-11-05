const pilotos = ['Vetel', 'Alonso', 'Raiconen', 'Massa'];
pilotos.pop(); // exclui o elemento na ultima posição do array
console.log(pilotos);

pilotos.push('Verstapim'); // adiciona um elemento na ultima posição do array
console.log(pilotos);

pilotos.shift(); // exclui o elemento na primeira posição do array
console.log(pilotos);

pilotos.unshift('Hamilton'); // adiciona um elemento na primeira posição do array
console.log(pilotos);

// splice pode adicionar e remover elementos de um array

// adicionar
pilotos.splice(2, 0, 'Botas', 'Massa'); // no índice 2, excluiu 0 elementos, add Botas e Massa
console.log(pilotos);

// remover
pilotos.splice(3, 1);
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); // gera um novo array apartir do índice informado (2)
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4); // pega o intervalo [1, 4)
console.log(algunsPilotos2);