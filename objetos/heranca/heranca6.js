function Aula(nome, videoId) {
    this.nome = nome;
    this.videoId = videoId;
}

const aula1 = new Aula('Bem Vindo', 123);
const aula2 = new Aula('Foda-se', 456);
console.log(aula1, aula2);

// simulando o operador new
function novo(f, ...params) { // encurtador.com.br/bcN27  operador spread
    obj = {};
    obj.__proto__ = f.prototype;
    f.apply(obj, params);
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 123);
const aula4 = novo(Aula, 'Foda-se', 456);
console.log(aula3, aula4);