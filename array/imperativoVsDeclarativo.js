const alunos = [
    {nome: 'Carlos', nota: 8.5}
    , {nome: 'Nadya', nota: 8}
    , {nome: 'Victória', nota: 9.8}
];

// Imperativo (menos reuso)
let total1 = 0;
for(let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota;
}
console.log(total1 / alunos.length);

// Declarativo
const total2 = alunos.map(aluno => aluno.nota).reduce((acumulador, nota) => acumulador + nota);
console.log(total2 / alunos.length);