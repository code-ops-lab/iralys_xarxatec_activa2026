const prompt = require('readline-sync').question;

//Invertir el orden de un array------------------------

let numeros = [10, 20, 30, 40, 50];
let invertido = [];



while (numeros.length>0) {
    let pos =0;
   
    pos=numeros.length-1;
    invertido.push(numeros[pos])
    numeros.splice(pos,1);


}
console.log(invertido);
