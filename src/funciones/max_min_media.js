const prompt = require('readline-sync').question;

function validar_numeros(numericArray) {

    for(let i=0; i<numericArray.length; i++){
    if(typeof(numericArray[i])=="number" && !isNaN(numericArray[i])) onlyNumbersArray.push(numericArray[i]);
    else {
    console.log("No hay números en el vector");
}
}

}

function maximo_numero(onlyNumbersArray) {

    if (onlyNumbersArray.length > 0){
   
    maxValue = onlyNumbersArray[0];
      for (let i=1; i<onlyNumbersArray.length; i++){
        if (onlyNumbersArray[i]>maxValue) maxValue = onlyNumbersArray[i];
        
    }
    return  `El valor máximo es ${maxValue}`;
    
} 


    
}

function min_numero(onlyNumbersArray) {

    if (onlyNumbersArray.length > 0){
   
    minValue = onlyNumbersArray[0];
      for (let i=1; i<onlyNumbersArray.length; i++){
        if (onlyNumbersArray[i]<minValue) minValue = onlyNumbersArray[i];
        
    }
   //console.log(`El mínimo es ${minValue}.`);
   return `El valor minimo es ${minValue}`;
    }
    
    
}

function media(onlyNumbersArray) {
    let sumOfValues = onlyNumbersArray[0];
    let media=0;
    for (let i=1; i<onlyNumbersArray.length; i++){
   
    sumOfValues += onlyNumbersArray[i];
    }
   
   return `La media es ${(sumOfValues/onlyNumbersArray.length).toFixed(2)}`;
    
}

    

















const numericArray = ["hol", NaN, 5, 3, 2, 10];
 
const onlyNumbersArray = [];
let maxValue, minValue;
 
let currentIndex = 0;

let validar= validar_numeros(numericArray);
let max=maximo_numero(onlyNumbersArray);
let min=min_numero(onlyNumbersArray);
let resul_media=media(onlyNumbersArray);

console.log(validar,max,min,resul_media);


 
/* for(let i=0; i<numericArray.length; i++){
    if(typeof(numericArray[i])=="number" && !isNaN(numericArray[i])) onlyNumbersArray.push(numericArray[i]);
}
 
if (onlyNumbersArray.length > 0){
    let sumOfValues = onlyNumbersArray[0];
    maxValue = onlyNumbersArray[0];
    minValue = onlyNumbersArray[0];
    for (let i=1; i<onlyNumbersArray.length; i++){
        if (onlyNumbersArray[i]>maxValue) maxValue = onlyNumbersArray[i];
        if (onlyNumbersArray[i]<minValue) minValue = onlyNumbersArray[i];
        sumOfValues += onlyNumbersArray[i];
    }
 
    console.log(`El valor máximo del vector es ${maxValue}. El mínimo es ${minValue}. Y la media es ${(sumOfValues/onlyNumbersArray.length).toFixed(2)}`);
} else {
    console.log("No hay números en el vector");
} */