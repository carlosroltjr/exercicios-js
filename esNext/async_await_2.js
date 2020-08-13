function gerarNumsEntre(min, max, numsProibidos) {
    if(min > max) [max, min] = [min, max] // destructuring

    return new Promise((resolve, reject) => {
        const aleatorio = parseInt(Math.random() * (max - min + 1) + min)

        if(numsProibidos.includes(aleatorio)) {
            reject('Número repetido!')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdNums, tentativas = 1) {
    try {
        const nums = []
        
        for(let _ of Array(qtdNums).fill()) { // itera num array do tamanho que voce passou
           nums.push(await gerarNumsEntre(1, 60, nums))
        }
    
        return nums
    } catch(e) {
        if(tentativas > 5) {
            throw 'Muitas tentativas!!'
        } else {
            return gerarMegaSena(qtdNums, tentativas + 1)
        }
    }
}

gerarMegaSena(20)
    .then(console.log)
    .catch(console.log)
