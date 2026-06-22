const prompt = require('readline-sync').question;






const AMOUNT_OF_NUMBERS = 10;
 
let sumUserNumbers = 0;
 
for (let i=1; i<=AMOUNT_OF_NUMBERS; i++){
    let userNumber;
    userNumber = parseFloat(prompt("Dame un número"));
    while (Number.isNaN(userNumber)){
        userNumber = parseFloat(prompt("Te has equivocado, el dato introducido no era un número válido.Introdúcelo de nuevo"));
    }
    sumUserNumbers += userNumber;
}
 
console.log(`La suma de los ${AMOUNT_OF_NUMBERS} números introducidos es ${sumUserNumbers}`);