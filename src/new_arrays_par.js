
const prompt = require('readline-sync').question;
let numeros = [];
//const numeros_pares=[];

//Validar que no sea un array vacio y si lo es pedir datos al usuario

if (numeros.length== 0) {
    let usuario= prompt("Entre los valores ya que el array esta vacio");
   // for (let i = 0; i < numeros.length; i++) {


        numeros=usuario.split(",");
        
        numeros.push(usuario);
    //}
    
   

}
console.log(numeros);


//Validar que sea un array de numeros
/* for (let i = 0; i < numeros.length; i++) {

    if (typeof numeros[i] !== "number") {
       numeros.splice(i,1); 
    }
    
}
console.log("array limpio",numeros);




for (let i = 0; i < numeros.length; i++) {

    if (numeros[i] % 2 == 0)numeros_pares.push(numeros[i]);
}
console.log(`Los numeros pares son: ${numeros_pares}`); */
