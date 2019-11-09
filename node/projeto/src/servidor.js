const porta = 3003;
const express = require('express');
const app = express();
const bancoDeDados = require('./bancoDeDados');
const bodyParser = require('body-parser');

/**
 * qualquer requisição que você fizer no seu servidor usando o express, ele vai
 * ser obrigado a passar por esse middleware (bodyParser). Dados no padrão urlencoded 
 * sofrerão o parse, sendo transformados em objetos.
 */
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos());
});

//req.params guarda tudo que voce escreve com ':', um exemplo é o 'id'
app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
});

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome
        , preco: req.body.preco
    });
    res.send(produto); //JSON
});

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id // pega um id que já existe
        , nome: req.body.nome
        , preco: req.body.preco
    });
    res.send(produto);
});

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id);
    res.send(produto);
});

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
});

/**
 * Instalar um módulo somente nas dependencias de desenvolvimento,
 * exemplo: npm i --save-dev nodemon@1.14.11 -E
 * --save -> salva na pasta node_modules do seu projeto
 * -dev -> dependencias de desenvolvimento
 * -E -> instala a versão exata que você escreveu
 */