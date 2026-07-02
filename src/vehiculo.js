class Vehiculo {
    marca;
    constructor(marca) {

        this.marca=marca;
        
    }

    mostrarMarca()
    {
        console.log("La marca es:",this.marca);
    }
    

}

class Coche extends Vehiculo{
    constructor(marca, puertas) {
        super(marca);
        this.puertas=puertas;
        
    }
    mostrarPuertas()
    {
        console.log(`La cantidad de puertas es de: ${this.puertas}`) ;
    }
}

const coche=new Coche("Mercedes", 4);

coche.mostrarMarca();
coche.mostrarPuertas();

console.log(coche.puertas);