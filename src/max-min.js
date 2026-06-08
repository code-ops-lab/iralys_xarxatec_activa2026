
const prompt = require('readline-sync').question;
/*Dado un vector de números, devuelve por consola el 
valor máximo, el mínimo y la media de todos los valores 
almacenados en el vector*/



function maximo(vector) {

    let max = vector[0];

    for (let i = 1; i < vector.length; i++) {

        if (vector[i] > max) {
            max = vector[i];
        }
    }

    return max;
}

function minimo(vector) {

    let min = vector[0];

    for (let i = 1; i < vector.length; i++) {

        if (vector[i] < min) {
            min = vector[i];
        }
    }

    return min;
}

function media(vector) {

    let suma = 0;

    for (let i = 0; i < vector.length; i++) {
        suma += vector[i];
    }

    return (suma / vector.length).toFixed(2);
}

let vector = [2, 230, 45, 65, 100, 78];

console.log("Máximo:", maximo(vector));
console.log("Mínimo:", minimo(vector));
console.log("Media:", media(vector));