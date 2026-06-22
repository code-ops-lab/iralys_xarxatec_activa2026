
const prompt = require('readline-sync').question;
/*Dado un vector de números, devuelve por consola el 
valor máximo, el mínimo y la media de todos los valores 
almacenados en el vector*/



//let media;

let vector = [2, 23, 45, 65, 100, 78];

let max=vector[0];
let min=vector[0];
let media=0;
let suma=0;

for (let i = 0; i < vector.length; i++)
    
{
    if (vector[i] > max) {
        max = vector[i];
    }
   if (vector[i]< min) {
     min=vector[i];
   }

suma+=vector[i];


}
media=(suma/vector.length).toFixed(2);
console.log("El máximo es:", max);
console.log("El minimo es:", min);
console.log("La media es:", media);

