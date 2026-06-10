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