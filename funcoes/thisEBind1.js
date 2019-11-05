const pessoa = {
    saudacao: 'Bom dia!'
    , falar () {
        console.log(this.saudacao);
    }
}

pessoa.falar();

const falar = pessoa.falar;
falar(); // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa); // usou o this de pessoa, no qual tem o método saudacao
falarDePessoa();