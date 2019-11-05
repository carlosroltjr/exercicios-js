let numero = 1;
{
    let numero = 2;
    console.log('dentro = ', numero);
    // se não achar 'numero' dentro desse escopo, ele passa pro próximo
}
console.log('fora = ', numero);
// o let NÃO ignora os blocos, fazendo com q mude o escopo