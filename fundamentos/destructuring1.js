// "novo" recurso do ES2015

const pessoa = {
    nome: 'Nadya'
    , idade: 23
    , endereco: {
        logradouro: 'Lamim'
        , numero: 17
    }
};

const {nome, idade} = pessoa;
console.log(nome, idade);

const {nome: n, idade: i} = pessoa;
console.log(nome, idade);

const {sobrenome, bemHumorada = true} = pessoa;
console.log(sobrenome, bemHumorada);