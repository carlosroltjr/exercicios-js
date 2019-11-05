// Cadeia de protótipos (prototype chain)
Object.prototype.atributo0 = '0'; // n faça isso em casa!
const avo = {atributo1: 'A'};
const pai = {__proto__: avo, atributo2: 'B', atributo3: '3'};
const filho = {__proto__: pai, atributo3: 'C'};
console.log(filho.atributo0, filho.atributo1, filho.atributo2, filho.atributo3);
console.log(pai.atributo3);

const carro = {
    velAtual: 0
    , velMax: 200
    , acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta;
        } else {
            this.velAtual = this.velMax;
        }
    }
    , status() {
        return `${this.velAtual} Km/h de ${this.velMax} Km/h`;
    }
}

const ferrari = {
    modelo: 'f40'
    , velMax: 324 // shadowing
}

const volvo = {
    modelo: 'v40'
    , status() {
        return `${this.modelo}: ${super.status()}`;
    }
}

Object.setPrototypeOf(ferrari, carro); // primeiro o objeto e depois o protótipo
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);
console.log(volvo.velMax);

volvo.acelerarMais(100);
console.log(volvo.status());

ferrari.acelerarMais(302);
console.log(ferrari.status());