//const prompt = require('readline-sync').question;

const letrasDNI = ["T","R","W","A","G","M","Y","F","P","D","X","B","N",
                     "J","Z","S","Q","V","H","L","C","K","E"];

//const numeroDni="";

function validateNumber(number) {

    if (number.length < 8) return false;
      
    
    for (let i = 0; i < number.length; i++) {
    const negative = (number[0]=="-" );
    if (number[i] == " " || isNaN(number[i]) && !negative) return false;
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

   if (number == null) return "Dni Incorrecto";
   const onlyNumbers = number.slice(0, number.length - 1) ;
   if (!validateNumber(onlyNumbers)) return "Dni Incorrecto";

   const convertInt= parseInt(onlyNumbers);
   if (convertInt < 0 || convertInt > 99999999) return "Numero fuera de rango";

   const onlyLetter = number[number.length - 1].toUpperCase();
   if (!validateLetter(onlyLetter)) return "No se encuentra esa letra";

   return calculateDNIletter(onlyNumbers,onlyLetter); 
    
    }


function calculateDNIletter(number, letra)
{
  
  let resto= number % 23;
  
  if (letra != letrasDNI[resto]) return `DNI: ${number}\nLetra indicada: La letra ${letra} no es correcta\nResto de la división: ${resto}\nLetra calculada: ${letra}` ;
  
  console.log(`DNI: ${number}\nLetra indicada: ${letra}\nResto de la división: ${resto}\nLetra calculada: ${letra}`);
  return "El numero y la letra del DNI son correctos";
  
}


 
console.log(validateDniNumber(prompt("Entre el numero de su DNI: ")));
