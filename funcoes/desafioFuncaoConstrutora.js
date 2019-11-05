function Pessoa(nome, sobrenome, idade) {
    this.nome = nome
    , this.sobrenome = sobrenome
    , this.idade = idade
    , this.falar = () => console.log(`Meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos!!`);
}

const p1 = new Pessoa('Nadya');
p1.sobrenome = 'Vicentini';
p1.idade = 23;

p1.falar();