const MAX_CPU_NUMBER_OPTION= 5;
const MIN_CPU_NUMBER_OPTION =0;

const eleccionUsuarioParesONones = prompt("Elige pares o nones");

const numeroUsuario = parseInt(prompt("Elige un número entre 0 y 5"));

const numeroCPU = Math.floor((Math.random () * MAX_CPU_NUMBER_OPTION - MIN_CPU_NUMBER_OPTION + 1) + MIN_CPU_NUMBER_OPTION);

const sumaNumerosElegidos = numeroCPU + numeroUsuario;

const esUsuarioGanador = (eleccionUsuarioParesONones == "pares" && sumaNumerosElegidos%2==0)||(eleccionUsuarioParesONones == "nones" && sumaNumerosElegidos%2!=0);

let winner;
esUsuarioGanador?winner="usuario":winner="CPU";
 
console.log(`El usuario ha elegido ${eleccionUsuarioParesONones}\nEl usuario eligió ${numeroUsuario} y la CPU ${numeroCPU}\nEl ganador es: ${winner}`);


