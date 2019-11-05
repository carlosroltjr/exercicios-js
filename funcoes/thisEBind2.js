function Pessoa () {
    this.idade = 0;

    const self = this; // agora o this sempre vai apontar para Pessoa
    setInterval(function () {
        self.idade++
        console.log(`${self.idade} segundos de idade`);
    }/* .bind(this) */, 1000);
}

new Pessoa