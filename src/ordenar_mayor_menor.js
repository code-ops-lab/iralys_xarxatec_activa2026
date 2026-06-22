const prompt = require('readline-sync').question;

 let array = [2, 100, 56, 789];
let ordenada = [];

while (array.length > 0) {

    let mayor = array[0];
    let pos = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i];
            pos = i;
        }
    }

    ordenada.push(mayor);
    array.splice(pos, 1);
}

console.log(ordenada); 
