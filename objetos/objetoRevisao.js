// coleção dinâmica de pares chave/valor
const produto = new Object;
produto.nome = 'Cadeira';
produto['marca do produto'] = 'Generica';
produto.preco = 20;
console.log(produto);

delete produto.preco;
delete produto['marca do produto'];
console.log(produto);

const carro = {
    modelo: 'A4',
    proprietario: {
        nome: 'Rosane',
        idade: 42,
        endereco: {
            logradouro: 'Lamin',
            numero: 87
        }
    },
    condutores: [{
        nome: 'Nadya',
        idade: 23
    }, {
        nome: 'Carlos',
        idade: 27
    }],
    calcSeguro: function() {
        // ....
    }
};

carro.proprietario.endereco.numero = 17;
carro['proprietario']['endereco']['logradouro'] = 'Quebrada do Lamin';
console.log(carro);

delete carro.condutores[1];
console.log(carro.condutores);