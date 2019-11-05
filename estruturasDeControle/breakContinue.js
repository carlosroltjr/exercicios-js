const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for in transforma o 'i' em string... é boxta
for (let i in nums) {
    if (i == 5) break; // interrompe o laço de repetição qnd i = 5
    console.log(`${i} = ${nums[i]}`);
}

console.log('------')

for (let i in nums) {
    if (i == 5) continue; // interrompe a repetição atual e vai pra próxima
    console.log(`${i} = ${nums[i]}`);
}

/*caso você tenha um laço de repetição dentro do outro,
é necessário utilizar um rótulo para usar o break.
*/
externo: for (let i in nums) {
    for (let j in nums) {
        if (i == 2 && j == 3) break externo;
        console.log(`Par = ${i}, ${j}`);
    }
}
// não usar essa porra de rótulos