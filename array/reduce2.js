const turma = [
    {nome: 'Carlos', nota: 7.5, bolsista: false}
    , {nome: 'Nadya', nota: 8.9, bolsista: true}
    , {nome: 'Victória', nota: 7, bolsista: false}
    , {nome: 'Roberto', nota: 9.8, bolsista: false}
];
const isBolsista = turma.map(aluno => aluno.bolsista);

// Desafio 1: Todos os alunos são bolsistas?
console.log(isBolsista.reduce((resultado, bolsista) => resultado && bolsista));

// Desafio 2: algum aluno é bolsista?
console.log(isBolsista.reduce((resultado, bolsista) => resultado || bolsista));