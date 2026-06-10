
const prompt = require('readline-sync').question;
const numeros = [1,2,3,4,5,6,7,8,9,10];
const numeros_pares=[];

for (let i = 0; i < numeros.length; i++) {

    if (numeros[i] % 2 == 0)numeros_pares.push(numeros[i]);
}
console.log(`Los numeros pares son: ${numeros_pares}`);
