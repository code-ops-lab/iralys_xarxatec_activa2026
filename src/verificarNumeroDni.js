const prompt = require('readline-sync').question;

//const numeroDni=prompt("Entre el numero de su DNI: ");

const numeroDni="05900600L";
const letrasDNI = ["T","R","W","A","G","M","Y","F","P","D","X","B","N",
                     "J","Z","S","Q","V","H","L","C","K","E"];



function validateNumber(number) {
 
  for (let i = 0; i < 8; i++) {
    if (number[i] < "0" || number[i] > "9") return false;
    
  }
  return true;
}

function validateLetter(user_letter)
 {
  
  for (let i = 0; i < letrasDNI.length; i++) {
    if (user_letter == letrasDNI[i]) return true;
  }
  return false;
  
}

function validateDniNumber(number) {
    let mensaje="";
    if (number.length != 9) return mensaje="El numero de DNI le sobran caracteres";
    const onlyNumbers = number.slice(0, number.length - 1) ;
    const onlyLetter = number[number.length - 1].toUpperCase();
   

    if (validateNumber(onlyNumbers) && validateLetter(onlyLetter))
       return calculateDNIletter(onlyNumbers, onlyLetter);

    return mensaje="Caracter incorrecto en su DNI";
    }
      
  
function calculateDNIletter(number, letra)
{
  let mensaje="";
  let resto= number % 23;
  mensaje="La letra no es correcta";
  if (letra == letrasDNI[resto])
  {
  console.log(`DNI: ${number}\nLetra indicada: ${letra}\nResto de la división: ${resto}\nLetra calculada: ${letra}`);
  mensaje= "El numero y la letra del DNI son correctos";
  }
  return mensaje;

}
let resul=validateDniNumber(numeroDni);
console.log(resul);



/* function validateDniNumber(number) {
    
    const isValidLength= number.length;
    const onlyNumbers = number.slice(0, number.length - 1) ;
    
    const onlyLetter = number[number.length - 1].toUpperCase();

    if (isValidLength == 9 && onlyNumbers.length == 8)
    {
    const intOnlyNumbers= parseInt(onlyNumbers);  
    const isNotValid = intOnlyNumbers < 0 || intOnlyNumbers > 99999999;
    if (isNotValid) return mensaje;
    return calcularLetraDNI(onlyNumbers, onlyLetter);
    }
    return mensaje;
    
} */
