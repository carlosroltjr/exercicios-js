const funcs = [];

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(`Índice ${i}`);
    });
}

funcs[2]();
funcs[8]();
// let tem escopo de bloco, então funcionou como esperado
