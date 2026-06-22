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

 // version adaptada a como lo hace el profesor jjjj

 //let palabra="reconocer";
function palindrome(palabra) {

    let nuevapalabra=[];
    let esigual=true;

    /* const esNumero = (typeof palabra == "number");
    if (esNumero) return "Error: introduce una palabra, no un número"; */

    for (let i = palabra.length-1; i >= 0; i--) {
       nuevapalabra.push(palabra[i]);
    }
    

    for (let u = 0; u < palabra.length; u++) {
        const sonDiferentes = (palabra[u] != nuevapalabra[u]);
        
        if (sonDiferentes) esigual = false;
    }
return esigual;    
}

console.log(palindrome(prompt("Entre la palabra: ")));

/* let res=palindrome(palabra);
console.log(res); */
