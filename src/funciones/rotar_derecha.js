const prompt = require('readline-sync').question;

function rotar_derecha(array,pos) {


    let new_array=[];
    for (let i =array.length-pos ; i < array.length ; i++) {
        
        //pos=i;
        new_array.push(array[i]);
    } 
    for (let u = 0; u < array.length-pos; u++) {
       new_array.push(array[u]);
        
    }
    return new_array;
   



    
}

let array=[10,20,30,40,50];
let pos=2;

let resultado = rotar_derecha(array,pos);
console.log(resultado);