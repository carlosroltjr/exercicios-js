let p1 = new Promise(function(cumprirPromessa) {
    cumprirPromessa(3, 4)
})

p1.then(function(valor1) {
    console.log(valor1)
})

// uma promise retorna um valor apenas
p1.then(function(valor1, valor2) {
    console.log(valor1, valor2)
})

let p2 = new Promise(function(cumprirPromessa) {
    cumprirPromessa({
        x: 3,
        y: 4
    })
})

p2.then(function(valor1) {
    console.log(valor1)
    console.log(valor1.x)
    console.log(valor1.y)
})

let p3 = new Promise(function(cumprirPromessa) {
    cumprirPromessa(['Carlos', 'Nadya'])
})

p3
    .then(valor => valor[0]) // Carlos
    .then(valor => valor[0]) // C
    .then(valor => valor.toLowerCase()) // c
    .then(valor => console.log(valor))

    
const firstElement = arrayOrString => arrayOrString[0]
const firstLetterLowerCase = letter => letter.toLowerCase()

let p4 = new Promise(function(cumprirPromessa) {
    cumprirPromessa(['Carlos', 'Nadya'])
})
    .then(firstElement)
    .then(firstElement)
    .then(firstLetterLowerCase)
    .then(console.log) // passou automaticamente o valor dentro do console.log