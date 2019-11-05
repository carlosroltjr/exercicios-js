// par nome/valor
const saudacao = 'Oi' // contexto léxico 1

function exec() {
    const saudacao = 'E aí feio'; // contexto léxico 2
    return saudacao;
}

// objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Nadya'
    , idade: 23
    , peso: 68
    , endereco: {
        rua: 'Lamim'
        , numero: 18
        , bairro: 'Canasvieiras'
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);