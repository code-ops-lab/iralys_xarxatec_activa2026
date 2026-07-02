class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    presentarse() {
        console.log("Hola, soy", this.nombre);
    }
}

class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre);
        this.raza = raza;
    }
}

const perro = new Perro("Firulais", "Labrador");

perro.presentarse();
console.log(perro.raza);