const sequencia = {
    _valor: 1 // convenção para variável que vai ser acessada somente internamente
    , get valor() {return this._valor++}
    , set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor;
        }
    }
}

console.log(sequencia.valor, sequencia.valor); // chama o get e o set de uma vez só
console.log(sequencia._valor);

