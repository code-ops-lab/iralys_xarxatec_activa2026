
const prompt = require('readline-sync').question;
/* Crea un script que pida 10 números cualesquiera por el prompt y 
devuelva su suma. */

/* const AMOUNT_OF_NUMBERS = 10;
let sumaUserNumbers=0;
let media=0;
 
for (let i=1; i<=AMOUNT_OF_NUMBERS; i++){
    let userNuber;
    while(number.isNaN(userNuber)){ //mientras no sea un numero o mientras sea un NaN
        userNuber = parseFloat(prompt(`te has equiocado, el dato introducido no era un numero valido. introduce un numero valido: `))
    }
    sumaUserNumbers += userNuber;
 
}
media=sumaUserNumbers/AMOUNT_OF_NUMBERS;
 
console.log(`la suma total de los numeros es ${sumaUserNumbers}`);
console.log(`la suma total de los numeros es ${media}`);  */


/* Haz un script que pida un número como base y otro número como 
exponente, y, mediante un bucle for, calcule la potencia. 
(baseexponente), por ejemplo: si la base fuera 4 y el exponente fuera 7, 
haría la operación 47 y el resultado sería 16384) */


/* let exponente=parseInt(prompt("Entre el exponente"));  
//let exponente=2;
 let base=parseInt(prompt("Entre la base"));
//let exponente=2;
let prueba=Math.pow(base,exponente);
let res=base;

for (let i = 1; i <exponente; i++) {
   
    
    res*=base;
}
console.log(res);
console.log(prueba); */



/* for (let i = 0; i < ; i++) {
    const element = array[i];
    
}  */
/* Escribe un programa que use que imprima por pantalla los números 
de 1 a 100, con dos excepciones. Los números que sean divisibles 
por 3, no aparecerán, en su lugar aparecerá́“Fizz” y para los 
números divisibles por 5 aparecerá́“Buzz”. Los que sean divisibles 
por 3 y por 5 aparecerá́“FizzBuzz”. */

let numero=0;

for (let i = 0; i <= 100; i++) {

    

    if(i % 3 == 0) console.log("Fizz");
   
        if(i % 5 == 0) console.log("Buzz"); 
    
   
    
       if(i % 3 == 0 && i % 5) console.log("FizzBuzz");
 console.log(i);
    }
   
    





