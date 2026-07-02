class Empleados {
    constructor(nombre, direccion) {
        this.nombre=nombre;
        this.direccion=direccion;
        
    }
}

class Direccion {
    constructor(calle , ciudad, pais) {
        this.calle=calle;
        this.ciudad=ciudad;
        this.pais=pais;
                     
        }
        
    
}


const direccion= new Direccion("Cuadra villalon", "Castellon", "España");
const empleados= new Empleados("Felix", direccion );

console.log(empleados);
console.log(empleados.direccion.ciudad);