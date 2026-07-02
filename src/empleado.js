class Empleado {
    constructor(nombre,puesto,salario) {
        this.nombre=nombre;
        this.puesto= puesto;
        this.salario=salario;
        
    }
    toString()
    {
        return(`Nombre: ${this.nombre}, Puesto: ${this.puesto}, Salario: ${this.salario}`);
    }

    aumentarSalario(cantidad)
    {
        this.salario=this.salario + cantidad;
    }

    mostrarEmpleado()
        {
            this.empleado;
        }
    
}

const empleado=new Empleado("Emily", "Administrador", 2500);
empleado.aumentarSalario(500);
empleado.mostrarEmpleado();

console.log(empleado.toString());