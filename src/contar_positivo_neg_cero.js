
const prompt = require('readline-sync').question;
//--------------------------------------------------------------------
let numeros = [5, -2, 0, 7, -8, 0, 4, -1];
let positivos=0;
let negativos=0;
let cero=0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i]<0) negativos++;
    else if (numeros[i]>0) positivos++; 
    else cero++;
    
}
console.log(`Positivos: ${positivos} Negativos: ${negativos} Cero: ${cero}`)