const path = require('path')
const fs = require('fs')

const caminho = path.join(__dirname, 'dados.txt')

const lerArquivo = (caminho) => {
    return new Promise(resolve => {
        fs.readFile(caminho, (_, conteudo) => {
            resolve(conteudo.toString())
        })
    })
}

lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => console.log(linhas[1]))

lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)