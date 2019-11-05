class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome;
        this.valor = valor;
    }
};

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = []
    }
    
    addLancamentos(...lancamentos) { // ...lancamentos cria um array com os N parâmetros que você passar
        lancamentos.forEach(l => this.lancamentos.push(l));
    }

    sumario() {
        let valorConsolidado = 0;
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado;
    }
}

const salario = new Lancamento('Salário', 45000);
const contaDeLuz = new Lancamento('Luz', -220);
const viagem = new Lancamento('Férias Europa', -8000);
const colegio = new Lancamento('Anaba', -3000);
const ipva = new Lancamento('Honda Civic', -2000);

const contas = new CicloFinanceiro(10, 2019);
contas.addLancamentos(salario, contaDeLuz, viagem, colegio, ipva);
console.log(contas.sumario());
