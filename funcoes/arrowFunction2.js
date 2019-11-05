function Pessoa () {
    this.idade = 0;

    setInterval( () => { // arrow function n faz o this variar
        this.idade++
        console.log(`${this.idade} segundos de idade`);
    }/* .bind(this) */, 1000);
}

new Pessoa