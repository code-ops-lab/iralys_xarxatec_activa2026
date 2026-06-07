console.log("Hola mundo!");



const horasTotalCurso=parseInt(prompt("Dame una duracion en horas de un crso"));

const horasPorSesion=prompt("Dame el numero de horas que va a tener cada sesion");
console.log("Numero horas" ,horasTotalCurso);
console.log("Numero horas sesion" ,horasPorSesion);

if (horasPorSesion == null && horasTotalCurso == null)
{
    console.log("entre los datos");
}



console.log(`Numero horas curso :${horasTotalCurso} .\n Numero de horas por sesion ${horasPorSesion}`);

if (horasPorSesion == null && horasTotalCurso == null)
{
    console.log("entre los datos");
}


const total= horasTotalCurso / horasPorSesion;

console.log("total : " , Math.ceil(${total}));