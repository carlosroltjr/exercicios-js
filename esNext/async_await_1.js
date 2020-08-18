function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function retornarValorRapido() {
    return 20
}

esperarPor()
    .then(() => console.log("Executando promise 1..."))
    .then(esperarPor)
    .then(() => console.log("Executando promise 2..."))
    .then(esperarPor)
    .then(() => console.log("Executando promise 3..."))

async function executar() {
    let valor = await retornarValorRapido()

    await esperarPor()
    console.log(`Async/Await ${valor + 1}...`)

    await esperarPor()
    console.log(`Async/Await ${valor + 2}...`)

    await esperarPor()
    console.log(`Async/Await ${valor + 3}...`)

    return valor + 4
}

executar().then(console.log)

