function gerarNumsEntre(min, max) {
    if(min > max) {
        [max, min] = [min, max] // destructuring
    }

    return new Promise(resolve => {
        const aleatorio = parseInt(Math.random() * (max - min + 1) + min)
        resolve(aleatorio)
    })
}

gerarNumsEntre(10, 60)
    .then(num => num * 10)
    .then(numX10 => `O número gerado foi ${numX10}`)
    .then(console.log)
