// uma factory retorna um novo objeto
// toda vez que você importar module.exports, um novo objeto será criado
// por conta da função factory que foi atribuida ao module.exports
module.exports = () => {
    return {
        valor: 1
        , inc() {
            this.valor++
        }
    }
};