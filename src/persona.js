class Persona {

    nombre;
    edad;
    ciudad; 
    constructor(nombre,ciudad) {
        this.nombre = nombre;
        
        this.ciudad = ciudad;
    }

    toString()
    {
        return (`Nombre: ${this.nombre}\n Ciudad: ${this.ciudad}`);
    }
}

const persona= new Persona("Iralys","Castellon");
console.log(persona.toString());