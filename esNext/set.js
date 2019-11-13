/**
 * É uma estrutura não indexada e não aceita repetição
 */

const times = new Set();
times.add('Vasco');
times.add('Avai').add('Palmeiras').add('São Paulo');
times.add('Flamengo');
times.add('Avai'); // ignorado

console.log(times);
console.log(times.size);
console.log(times.has('vasco'));
console.log(times.has('Vasco'));
times.delete('Avai');
console.log(times.has('Avai'));

const nomes = ['Carlos', 'Nadya', 'Nadya', 'Carlos'];
const nomesSet = new Set(nomes);
console.log(nomesSet);