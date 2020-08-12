function gerarNumsEntre(min, max, tempo) {
    if(min > max) {
        [max, min] = [min, max] // destructuring
    }

    return new Promise(resolve => {
        setTimeout(function() {
            const aleatorio = parseInt(Math.random() * (max - min + 1) + min)
            resolve(aleatorio)

        }, tempo)
    })
}

// simula tarefas assíncronas
function gerarVariosNums() {
    return Promise.all([
        gerarNumsEntre(1, 60, 4000),
        gerarNumsEntre(1, 60, 2000),
        gerarNumsEntre(1, 60, 500),
        gerarNumsEntre(1, 60, 3500),
        gerarNumsEntre(1, 60, 100),
        gerarNumsEntre(1, 60, 1500),
    ])
}
console.time('promise')

gerarVariosNums()
    .then(console.log)
    .then(() => console.timeEnd('promise'))