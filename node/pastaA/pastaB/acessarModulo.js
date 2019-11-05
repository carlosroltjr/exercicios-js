const moduloA = require('../../moduloA');
console.log(moduloA.ola);

const saudacao = require('saudacao');
console.log(saudacao.ola);

const pastaC = require('./pastaC');
console.log(pastaC.elogio);

const http = require('http');
http.createServer((req, res) => {
    res.write('Boa Tarde!');
    res.end();
}).listen(8080);
