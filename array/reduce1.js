const turma = [
    {nome: 'Carlos', nota: 7.5, bolsista: false}
    , {nome: 'Nadya', nota: 8.9, bolsista: false}
    , {nome: 'Victória', nota: 7, bolsista: true}
    , {nome: 'Roberto', nota: 9.8, bolsista: true}
];

console.log(turma.map(aluno => aluno.nota));
const resultado = turma.map(aluno => aluno.nota).reduce((acumulador, atual) => {
    console.log(`Acumulador: ${acumulador}, Atual: ${atual}`);
    return acumulador + atual;
}, 10);

console.log(resultado);