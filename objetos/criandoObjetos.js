// usando a notação literal
const obj1 = {};
console.log(obj1);

// Object em JS
console.log(typeof Object, typeof new Object);
const obj2 = new Object // função construtora
console.log(obj2);

// criando minhas próprias funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome; // atributo público
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc);
    }
}

// não dá pra acessar preco e desc pq são atributos privados
const prod1 = new Produto('Cocaína', 300, 0.1);
const prod2 = new Produto('Maconha', 45, 0.05);
console.log(prod1.getPrecoComDesconto(), prod2.getPrecoComDesconto());

// Função factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas);
        }
    }
}

const f1 = criarFuncionario('Nadya Linda', 5000, 2);
const f2 = criarFuncionario('Carlos', 5000, 4);
console.log(Math.floor(f1.getSalario()), Math.floor(f2.getSalario()));

// Object.create
const filha = Object.create(null);
filha.nome = 'Nadya';
console.log(filha);

// Uma função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}'); // converteu a string pra objeto
console.log(fromJSON.info);