console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]); // não tem 4 elementos no array

aprovados[3] = 'Paulo';
aprovados.push('Nadya');
console.log(aprovados.length);

aprovados[9] = 'Rafael';
console.log(aprovados.length);
console.log(aprovados[8] === undefined);

console.log(aprovados)
aprovados.sort();
console.log(aprovados);

delete aprovados[4];
console.log(aprovados[4]);
console.log(aprovados);

aprovados = ['Nadya', 'Carlos', 'Victória', 'João', 'Paulo'];
aprovados.splice(3, 2);
console.log(aprovados);