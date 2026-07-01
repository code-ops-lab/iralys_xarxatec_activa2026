const lettersDNI = ["T","R","W","A","G","M","Y","F","P","D","X","B","N",
                     "J","Z","S","Q","V","H","L","C","K","E"];

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
  
  for (let i = 0; i < lettersDNI.length; i++) {
    if (user_letter == lettersDNI[i]) return true;
  }
    return false;
  }

function validateDniNumber(number) {

   if (number == null) return "Ha cancelado la entrada de datos";
   const onlyNumbers = number.slice(0, number.length - 1) ;
   if (!validateNumber(onlyNumbers)) return "Dni Incorrecto";

   const convertInt= parseInt(onlyNumbers);
   if (convertInt < 0 || convertInt > 99999999) return "Número fuera de rango";

   const onlyLetter = number[number.length - 1].toUpperCase();
   if (!validateLetter(onlyLetter)) return "No ha introducido una letra";

   return calculateDNIletter(onlyNumbers,onlyLetter); 
    
    }

function calculateDNIletter(number, letter)
{
  
  let remainder= number % 23;
  
  if (letter != lettersDNI[remainder]) return `DNI: ${number}\nLetra indicada: La letra ${letter} no es correcta\nResto de la división: ${remainder}\nLetra calculada: ${letter}` ;
  
  console.log(`DNI: ${number}\nLetra indicada: ${letter}\nResto de la división: ${remainder}\nLetra calculada: ${letter}`);
  return "El número y la letra del DNI son correctos";
  
}

console.log(validateDniNumber(prompt("Entre el número de su DNI: ")));
