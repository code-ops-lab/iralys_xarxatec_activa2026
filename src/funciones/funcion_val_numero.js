const prompt = require('readline-sync').question;

function validar_numero() {
    let userNumber;

    userNumber = parseFloat(prompt("Introduce un número"));

    while (isNaN(userNumber)) {
        userNumber = parseFloat(prompt(
            "Te has equivocado, el dato no es valido. Introduce un numero:"
        ))
    }

    return userNumber;
}


validar_numero();
//console.log(numero);