
const prompt = require('readline-sync').question;
const numeros = ["hola",2,3,4,5,6,7,undefined,9,10,,NaN];
const numeros_pares=[];

//Validar que sea un array de numeros
for (let i = 0; i < numeros.length; i++) {

    if (typeof numeros[i] !== "number") {
       numeros.splice(i,1); 
    }
    
}
console.log("array limpio",numeros);




for (let i = 0; i < numeros.length; i++) {

    if (numeros[i] % 2 == 0)numeros_pares.push(numeros[i]);
}
console.log(`Los numeros pares son: ${numeros_pares}`);
