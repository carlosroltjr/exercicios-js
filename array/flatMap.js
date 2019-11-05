const escola = [{
    nome: 'Turma M1'
    , alunos: [{
        nome: 'Nadya'
        , nota: 8.1
    }, {
        nome: 'Carlos'
        , nota: 7.5
    }]
}, {
    nome: 'Turma M2'
    , alunos: [{
        nome: 'Victória'
        , nota: 9.8
    }, {
        nome: 'Roberto'
        , nota: 8.8
    }]
}];

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback));
}

const getNotaAluno = aluno => aluno.nota;
const getNotasTurmas = turma => turma.alunos.map(getNotaAluno);
const notas1 = escola.map(getNotasTurmas)
const notas2 = escola.flatMap(getNotasTurmas);

console.log(notas1);
console.log(notas2);