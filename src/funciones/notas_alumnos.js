/* Escribe un script que gestione las notas de una clase. 
Declara un array de notas (valores entre 0 y 10) con al menos 10 alumnos.
 Implementa las funciones necesarias y llama a la función principal mostrarInforme(notas),
  que debe mostrar por consola: la media de la clase y el recuento de alumnos por calificación
   (Insuficiente, Suficiente, Bien, Notable y Excelente). */


const array_notas=[2,5,6,9,10,3,7,6.5,8,5.8];

function calcular_media(array) {
            
    let suma_notas=0;
    let promedio_notas=0;

    for (let i = 0; i < array.length; i++) {
        
    suma_notas+=array[i];
    
  }
    promedio_notas= (suma_notas/ array.length).toFixed(2);
    return `Media: ${promedio_notas}\n`;
    
}

function clasificar_notas(array) {

    let cantidad_insuficientes=0;
    let cantidad_suficiente=0;
    let cantidad_bien=0;
    let cantidad_notable=0;
    let cantidad_excelente=0;

    for (let i = 0; i < array.length; i++) {
       
        if(array[i] <= 4) cantidad_insuficientes++;

        else if (array[i] == 5) cantidad_suficiente++;

        else if (array[i] <= 6.9) cantidad_bien++;

        else if (array[i] <= 8.9) cantidad_notable++;

        else if (array[i] <= 10) cantidad_excelente++;
    
    }
     return (`\nInsuficientes: ${cantidad_insuficientes} \nSuficientes: ${cantidad_suficiente} \nBien: ${cantidad_bien} \nNotables: ${cantidad_notable} \nExcelentes: ${cantidad_excelente}`);
}

function mostrarInformeNotas(array_notas) {

console.log(`----- Informe de la clase -------`);

const media= calcular_media(array_notas);
const notas= clasificar_notas(array_notas);

return `${media} ${notas}` ;
    
} 

const mostrar=mostrarInformeNotas(array_notas);
console.log(mostrar);






