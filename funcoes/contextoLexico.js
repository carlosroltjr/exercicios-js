const valor = 'Global';

function minhaFuncao () {
    console.log(valor);
}

function exec () {
    const valor = 'Local';
    minhaFuncao(); // procura o valor no contexto q a funcao foi declarada
}

exec();