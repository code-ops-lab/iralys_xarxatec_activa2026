const prompt = require('readline-sync').question;
//que reciba un array de números como parámetro y devuelva cuántos números pares contiene.



function entrada(numeros) {
    let pos=0;
    for (let i = 0; i < numeros.length; i++) {
        
        while (isNaN(numeros[i])) {
       console.log(`Te has equivocado, la posicion: ${i} no es  un numero:`);
        pos=i;
        numeros.splice(pos,1); 
        break;
        }  
        
    }
    return numeros;
    
    
}




function contar_pares(numeros) {

    let verificado=entrada(numeros);
    console.log(verificado);


    let cont_pares=0;

    for (let i = 0; i < numeros.length; i++) {
       
        if (numeros[i] % 2 == 0) cont_pares++;
        
    }
    return cont_pares;
    
}
let numeros = ["a", "b", "c", 10];
let resultado=contar_pares(numeros);
console.log(resultado);


