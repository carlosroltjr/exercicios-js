function Carro (velMax = 200, delta = 10) {
    // atributo privado
    let velAtual = 0;

    // método público
    this.acelerar = function () {
        if (velAtual + delta <= velMax) {
            velAtual += delta;
        } else {
            velAtual = velMax;
        }
    }

    // método público
    this.getVelAtual = function () {
        return velAtual;
    }
}

const uno = new Carro;
uno.acelerar()
uno.acelerar()
console.log(uno.getVelAtual());

const ferrari = new Carro(350, 45);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelAtual());