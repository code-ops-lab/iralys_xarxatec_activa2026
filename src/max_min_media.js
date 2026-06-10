const prompt = require('readline-sync').question;



/*const numericArray=[3,25,19,""];
let maximo;
//const vector=numericArray[0];
let max = numericArray[0];



    
let numeros;

    for (let i = 1; i < numericArray.length; i++) {


       do
           {
           numeros=console.log("Error")
           }

           while (isNaN(!numericArray[i])) 
             numeros=console.log("Entre numeros")


        if (numericArray[i] > max)  max = numericArray[i];
        
    }
    console.log(max);*/


    /* const numericArray = [ 10, NaN, 10];
 
const onlyNumbersArray = [];
let minValue;
let currentIndex = 0;
let suma=0;
let media=0;
 
for(let i=0; i<numericArray.length; i++){
    if(typeof(numericArray[i])=="number") onlyNumbersArray.push(numericArray[i]);
}
 
if (onlyNumbersArray.length > 0){
    minValue = onlyNumbersArray[0];
 
    for (let i=1; i<onlyNumbersArray.length; i++){
        if (onlyNumbersArray[i]< minValue) minValue = onlyNumbersArray[i];
       
    }

    for (let i = 0; i < onlyNumbersArray.length; i++) {
       
         suma+=onlyNumbersArray[i];
    }

    media=suma/onlyNumbersArray.length;
 
    console.log(`El valor minimo del vector es ${minValue}`);
    console.log(`La media es es ${media}`);
   
} else {
    console.log("No hay números en el vector");
}
  */

/* El programa genera un número aleatorio entre 1 y 100.
 El usuario tiene que adivinarlo. En cada intento le dices si
  su número es mayor o menor que el secreto. Cuando lo adivine, 
  muestra cuántos intentos necesitó */

const max=100;
const min=0;

let intentos= 0;
let numeroAleatorio=Math.floor(Math.random() * (max -min +1)) + min;
console.log(numeroAleatorio);
let numeroUsuario;


while (numeroUsuario!=numeroAleatorio) 
{
 numeroUsuario= Number(prompt("Inserte un numero entre 0 y 100"));
if (numeroUsuario < numeroAleatorio)
 {
   console.log("Su numero es menor que el numero aleatorio");
}
    
else if  (numeroUsuario > numeroAleatorio)
    {
 console.log("Su numero es mayor que el numero aleatorio"); 
 
}
//numeroUsuario= parseInt(prompt("Intentelo nuevamente"));
intentos++;
    
}
console.log("Adivinaste y necesitaste", intentos, "intentos"); 

//hecho x la IA----------------------------------

/* const secreto = Math.floor(Math.random() * 100) + 1;
let intento = 0;
let intentos = 0;
while (intento !== secreto) {
  intento = parseInt(prompt("Adivina el número (1-100):"));
  intentos++;
  if (intento < secreto) console.log("Demasiado bajo");
  else if (intento > secreto) console.log("Demasiado alto");
}
console.log("¡Correcto! Intentos:", intentos); */

//-----------------------------------------------------------------
/* Filtrar positivos
Dado el array [-5, 3, 0, 8, -2, 11, -1, 7], recórrelo
 y crea un nuevo array que contenga solo los números positivos
  (mayores que 0). Muéstralo por consola. */

