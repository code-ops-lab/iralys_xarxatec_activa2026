const prompt = require('readline-sync').question;

/* Ejercicios con WHILE
Mostrar los números del 1 al 10 usando while.
Mostrar los números del 10 al 1 usando while.
Mostrar los números pares del 1 al 20.
Sumar los números del 1 al 50.
Pedir números al usuario hasta que introduzca un 0.
Pedir una contraseña hasta que sea correcta.
Contar cuántos intentos necesitó el usuario para acertar una contraseña.
Generar un número aleatorio entre 1 y 10 y pedir al usuario que lo adivine.
Pedir números y calcular la suma total hasta que el usuario introduzca -1.
Pedir edades hasta que el usuario introduzca 0 y mostrar cuántas edades se introdujeron. */

/* let numero=0;
while (numero < 10) 
    {
     numero++;
    console.log("los numeros son ", numero);
    
} */

   /*   let numero=11;
    while (numero > 1 ) 
    {
     numero--;
    console.log("los numeros son ", numero);
    } */

    // Mostrar los números pares del 1 al 20.

  /* let numero=0;
while (numero < 20) 
    {
     numero++;
     if (numero%2==0) {
      console.log("Los pares son", numero);
        
     }
    
    
}  */

   //Sumar los números del 1 al 50
    /* let numero=0;
   let suma=0;
while (numero < 50) 
    {
        numero++;
     suma+=numero;
    }
    console.log("la suma de los numeros es ", suma);  */
    
//Pedir números al usuario hasta que introduzca un 0
let numeroUsuario;

do {
    numeroUsuario = parseInt(prompt("Inserte un numero"));
} while (numeroUsuario != 0);

console.log("Ha introducido un cero");