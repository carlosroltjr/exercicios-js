class Pessoa {
    constructor(nome, adjetivo) {
        this.nome = nome
        this.adjetivo = adjetivo
    }

    falar() {
        console.log(`Meu nome é ${this.nome} e sou ${this.adjetivo}!!`);
    }
}

const p1 = new Pessoa('Nadya', 'linda');
p1.falar()

const criarPessoa = (nome, adjetivo) => {
    return {
        falar: () => console.log(`Meu nome é ${nome} e sou ${adjetivo}!!`)
    }
}

const p2 = criarPessoa('Nadya', 'linda');
p2.falar();