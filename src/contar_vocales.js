
const prompt = require('readline-sync').question;

//Escribe un bucle que cuente el número de vocales en una cadena de texto


let cadena=["i","r","a","l","y","s"];

let vocales=0;

for (let i = 0; i < cadena.length; i++) {
    
    if (cadena[i]=="a" || cadena[i]=="e" || cadena[i]=="i" || cadena[i]=="o" || cadena[i]=="u" ) {
        
        vocales++;
    }
    
}
console.log("La cantidad de vocales q tiene la cadena es de :" , vocales);