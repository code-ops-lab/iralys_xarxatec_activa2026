const prompt = require('readline-sync').question;


function frec_mayor(array) {
    let igual=array[0];
    
    let pos=0;
    let cont2=0;
    let pos2=0;

for (let i = 0; i < array.length; i++) {
    
    let cont = 0;
   
    for (let u = 0; u < array.length-1; u++) {
      
        if (array[i]== array[u]) {
            cont++;

            
        }
    }
    
    
return cont;
    
}


}



let array=[7,2,5,1,2,0];
let resultado=frec_mayor(array);
console.log(resultado);