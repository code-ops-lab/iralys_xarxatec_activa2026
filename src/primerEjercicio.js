const prompt = require('readline-sync').question;


/*const primerNumero=parseInt(prompt("Entre el primer numero"));
const segundoNumero=parseInt(prompt("Entre el segundo numero"));
console.log("Resultado de la suma:" ,primerNumero + segundoNumero);
console.log("Resultado de la resta:" ,primerNumero - segundoNumero);
console.log("Resultado de la multiplicacion:" ,primerNumero * segundoNumero);
console.log("Resultado de la division:" ,primerNumero / segundoNumero);
console.log(`Resulta de la division ${(primerNumero / segundoNumero).toFixed(2)}`);//tofixed redondea la catd de numeros que le pases*/




//---------------------------- ejercicio piedra papel tijera----------------------------------


/*let tijera=0;
let papel=1;
let piedra=2;


console.log("Estas son las opciones: tijera:0 , papel:1, piedra:2");

let usuario =parseInt(prompt(`Usuario escoja su opcion ${tijera},${papel},${piedra} :`));
let cpu= Math.floor(Math.random()*3);

let eleccionU = usuario == 0 ? "Tijera": usuario == 1 ? "Papel" : "Piedra";
let eleccionC= cpu == 0 ? "Tijera": cpu == 1 ? "Papel" : "Piedra";
console.log("El usuario escojio",eleccionU);
console.log("La CPU escogio",eleccionC);

if (usuario == cpu) 
    {
  console.log("Empate");
    }
else 
 if ((usuario == 0 && cpu == 1) || (usuario == 1 && cpu == 2) || (usuario == 2 && cpu == 0))
     {
  console.log("Gana usuario");
     }
  else 
    {
  console.log("Gana CPU");
    }
*/
//-----------------------------------------------Version mejorada-------------------------------------

/*const  MAX_NUM_OPT = 2;
const MIN_NUM_OPT = 0;
const WINNING_SCORE_CONDITION = 2;

let userScore = 0;
let cpuScore = 0;
let message_game_over = "";
//const userElection;


while (userScore < WINNING_SCORE_CONDITION && cpuScore < WINNING_SCORE_CONDITION) {
    let userElection = prompt("Elige piedra, papel o tijera");
    
    while(userElection !== "piedra" && userElection !== "papel" && userElection !== "tijera")
    {
      userElection=prompt("Error");
    }
   
    
    
    const numberOptionCPU = Math.floor((Math.random() * (MAX_NUM_OPT - MIN_NUM_OPT + 1)) + MIN_NUM_OPT);

   /* while(userElection == "piedra" || userElection== "papel" || userElection== "tijera"){
      
      
    
    let cpuElection = "piedra";
    if (numberOptionCPU == 1) cpuElection = "papel";
    if (numberOptionCPU == 2) cpuElection = "tijera";
    let isUserWinner = ((userElection=="piedra" && cpuElection =="tijera")||(userElection=="papel" && cpuElection =="piedra")||(userElection=="tijera" && cpuElection =="papel"));
    let isATie = (userElection == cpuElection);
    if (isUserWinner) userScore++; //userScore = userScore + 1; userScore++; userScore +=1
    if (!isUserWinner && !isATie) cpuScore++; //equivalente a: if (isUserWinner == false && isATie == false)
    message_game_over += `Resultado de ronda: Puntuación usuario -> ${userScore} Puntuación CPU -> ${cpuScore}\n`;
}
//}

let winner = "La cpu ha ganado";
if (userScore == 2) winner = "El usuario ha ganado."

message_game_over += `La partida ha termina. ${winner}. La puntación final fue Puntuación usuario -> ${userScore} Puntuación CPU -> ${cpuScore}`;

console.log(message_game_over);*/
//--------------------------------------------piedra papel con while--------------------------

let tijera = 1;
let papel = 2;
let piedra = 3;
let usuario;
let puntosUsuario = 0;
let puntosCpu = 0;

while (puntosUsuario < 2 && puntosCpu < 2) {
  
  usuario = Number(prompt(`Usuario escoja su opcion ${tijera}:tijera, ${papel}:papel, ${piedra}:piedra :`));

  while (usuario !== 1 && usuario !== 2 && usuario !== 3)
  {
    console.log("Error en los datos");
    usuario = Number(prompt(`Usuario escoja su opcion ${tijera}:tijera, ${papel}:papel, ${piedra}:piedra :`))
  }



  let cpu = Math.floor(Math.random() * 3) + 1;
  let eleccionU = usuario == 1 ? "Tijera" : usuario == 2 ? "Papel" : "Piedra";
  let eleccionC = cpu == 1 ? "Tijera" : cpu == 2 ? "Papel" : "Piedra";

  console.log("El usuario escogió", eleccionU);
  console.log("La CPU escogió", eleccionC);

  if (usuario == cpu) {
    console.log("Empate");
  }
  else if ((usuario == 1 && cpu == 2) || (usuario == 2 && cpu == 3) || (usuario == 3 && cpu == 1)) {
    console.log("Gana usuario");
    puntosUsuario += 1;
  }
  else {
    console.log("Gana CPU");
    puntosCpu += 1;
  }
}

if (puntosUsuario == 3) {
  console.log("Gana el usuario");
} else {
  console.log("Gana la CPU");
}

/*Cres un programa que muestre por pantalla los 100 
primeros números, con la particularidad de que cuando 
muestre algún número que sea múltiplo de 3 añada la 
coletilla "múltiplo de 3---------------------------------------------------*/
//let n=0;
/*for(let i=0; i<=100; i++)
{
  if( i% 3==0)
  { console.log(`${i} Multiplo de 3`)}
  else
    {

  console.log("Los primeros numeros son:",i);
    }

}*/

/*-------------------Dado un vector de números, devuelve por consola el 
valor máximo, el mínimo y la media de todos los valores 
almacenados en el vector*/
/*let vector=[84,23,45,65,34,78];
let max;
let min;
//let media;
max=vector[0];
let vector = [84, 23, 45, 65, 34, 78];

let max = vector[0];

for (let i = 1; i < vector.length; i++) {
    if (vector[i] > max) {
        max = vector[i];
    }
}

console.log("El máximo es:", max);*/



