function falarDepoiDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) // aceita um único parâmetro
        }, segundos * 1000);
    });
};

// then é chamado depois que a promise é cumprida (quando acontece o resolve)
falarDepoiDe(3, 'Que legal!')
    .then(frase => frase.concat('?!? '))
    .then(frase => frase.concat('Tô com sono...'))
    .then(outraFrase => console.log(outraFrase))
    .catch(err => console.log(err));