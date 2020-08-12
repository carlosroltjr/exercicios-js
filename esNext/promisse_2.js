﻿setTimeout(() => {
    console.log('Executando callback...')

    setTimeout(() => {
        console.log('Executando callback...')

        setTimeout(() => {
            console.log('Executando callback...')
    
        }, 2000)
    }, 2000)
}, 2000)

const esperarPor = (tempo = 2000) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Executando promise...')
            resolve('Vish kk')
        }, tempo)
    })
}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)