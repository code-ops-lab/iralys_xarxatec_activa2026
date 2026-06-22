const prompt = require('readline-sync').question;

let numero=5;
for (let i = 1; i <= numero; i++) {
   
    let linea="";
    for (let j = i; j < numero ; j++) {
        
        linea+=" ";
    }

    for (let k = 1; k <= i; k++)
    {
         
        linea+=k;
        
    }
   
    console.log(linea);
    
}