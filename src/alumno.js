class Alumno {
    #nombre;

    constructor(nombre) {
        this.#nombre=nombre;
    }

    get nombre()
    {
        return this.#nombre;
    }

    set nombre(newname)
    {
        if (newname !="") {
            this.#nombre= newname;
            
        }
        else {
            console.log("Vacio");
        }
    }
}
let alumno= new Alumno("Emily");
console.log(alumno.nombre);
alumno.nombre="Ana";

console.log(alumno);