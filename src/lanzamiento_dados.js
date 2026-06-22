const prompt = require('readline-sync').question;

const max=6;
const min=1;




let suma=0;
let array=[];
let media=0;
let sumaA=0;

for (let i = 0; i < 6000; i++) {

let dado1=Math.floor(Math.random()* (max-min+1))+ min;
let dado2=Math.floor(Math.random()* (max-min+1))+ min;     
suma=dado1+dado2;
array.push(suma);
}

for (let j = 0; j < array.length; j++) {
    sumaA+=array[j];
    
}
media=(sumaA/array.length).toFixed(2);
console.log(media);



//corregido --------------------------------------------------------------------------


const max = 6;
const min = 1;

let sumaA = 0;

for (let i = 0; i < 6000; i++) {

    let dado1 = Math.floor(Math.random() * (max - min + 1)) + min;
    let dado2 = Math.floor(Math.random() * (max - min + 1)) + min;

    let suma = dado1 + dado2;

    sumaA += suma;
}

let media = (sumaA / 6000).toFixed(2);

console.log(media);