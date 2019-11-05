const pai = { nome: 'João', corCabelo: 'preto' };

const filha1 = Object.create(pai); // o protótipo do objeto filha1 é pai (ver criandoObjetos.js)
filha1.nome = 'Agata';
console.log(filha1.corCabelo);

const filha2 = Object.create(pai, {
    nome: {
        value: 'Beatriz'
        , writable: false
        , enumerable: true
    }
});

console.log(filha2.nome);
filha2.nome = 'Maria';
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

// por padrão Object.keys() não retorna os atributos do objeto pai (que é protótipo das filhas)
console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

// verificar se o atributo é herdado ou não
for(let key in filha2) {
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança ${key}`);
}