function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            if(Math.random() < chanceErro) {
                reject('Ocorreu um erro')
            } else {
                resolve(valor)
            }
        } catch (e) {
            reject(e)
        }
    })
}

funcionarOuNao('testando...', 0.6)
    .then(valor => `Valor: ${valor}`)
    .then(
        valor => console.log(valor),
        // erro => console.log(`Erro Específico: ${erro}`)
    )
    .then(() => console.log('Quase Fim!'))
    .catch(erro => console.log(`Erro Geral: ${erro}`))
    .then(() => console.log('Fim!'))
