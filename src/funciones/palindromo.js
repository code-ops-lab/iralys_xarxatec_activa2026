const prompt = require('readline-sync').question;

/* Crea una función que recibe una palabra como parámetro y devuelve true si se lee igual
 empezando por la izquierda que por la derecha,
 y false en caso contrario. Por ejemplo: "reconocer" 
 devolvería true, "activa" devolvería false. */

 /* function palindrome(palabra) {
     let nuevapalabra=[];
     let esigual=true;
   
    for (let i = palabra.length-1; i >= 0; i--) {

        nuevapalabra.push(palabra[i]);
         }
    for (let u = 0; u < palabra.length; u++) {

        if (palabra[u]!=nuevapalabra[u])
            {
             esigual=false
             return esigual;
            } 
        
    
    }
     return esigual;
 } */

 // version adaptada a como lo hace el profesor 

function palindrome(palabra) {

    let palabraInvertida = [];

    for (let i = palabra.length - 1; i >= 0; i--) {
        palabraInvertida.push(palabra[i]);
    }

    for (let i = 0; i < palabra.length; i++) {

        if (palabra[i] != palabraInvertida[i]) {
            return false;
        }
    }

    return true;
}

console.log(palindrome(prompt("Entre la palabra: ")));


