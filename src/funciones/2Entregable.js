const prompt = require('readline-sync').question;

const numeroDni=prompt("Entre el numero de su DNI: ");
//const numeroDni='12345678za';



function validarNumeros(number){
 //tengo q validar primero q number tenga un tama;o de 9 y luego hacer el resto

  let numeroDni; // declarada fuera, así sobrevive a las vueltas del bucle

do {
  numeroDni = prompt("Entre el numero de su DNI: ");
  if (numeroDni.length != 9) {
    console.log("El tamaño caracteres del DNI debe ser 9");
  }
} while (numeroDni.length != 9);


  const onlyNumbers = number.slice(0, number.length - 1); // string, para validar longitud
  const validNumber = parseInt(onlyNumbers);  // number, para validar rango
  const onlyLetter = numeroDni[numeroDni.length-1].toUpperCase();

  const isNumber = !isNaN(validNumber); // mejor que typeof para detectar si son dígitos válidos
  const isValido = validNumber >= 0 && validNumber <= 99999999 && validNumber.length == 8;
 
  

  if (!isNumber || !isValido) message="El número no es valido";
 
  return message;
  

  calcularLetraDNI(validNumber, letra);
}
   
function calcularLetraDNI(numeroCorrecto,letra)
{
 
  let resto= numeroCorrecto % 23;
  // aqui tengo q coger el array de letras y buscar en ese array si el indice coincide con este resto y devolverlo
  const letrasDNI = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
  if (letra==letrasDNI[resto])console.log("Esta correcto el DNI");
  else console.log("El DNI no es valido");
  return "";


}



let resultado = validarNumeros(numeroDni);

// aqui esta funcion va a preguntar en la cadena q introduzca l usuario si la ultim posicion coincide con la letra q saco el resto

