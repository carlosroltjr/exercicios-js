const fs = require('fs');
const caminho = __dirname + '/arquivo.json';

// síncrono... não é recomendado pois trava o event loop
const conteudo = fs.readFileSync(caminho, 'utf-8');
console.log(conteudo);

// assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    if (!err) {
        const config = JSON.parse(conteudo);
        console.log(`${config.db.host}:${config.db.port}`)
    } else {
        return err;
    }
});

const config = require('./arquivo.json');
console.log(config.db); // esse console.log aparece antes por ser síncrono

// ler o diretório e fazer o que quiser com eles... (nesse caso só imprimir)
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta');
    console.log(arquivos);
});