class Producto {
    #precio;

    constructor(precio) {
        this.#precio = precio;
    }

    get precio() {
        return this.#precio;
    }

    set precio(newprice) {
        if (newprice > 0) {
            this.#precio = newprice;
        } else {
            console.log("El precio no es correcto");
        }
    }
}

const producto = new Producto(100);

producto.precio = 200;
console.log(producto.precio);

producto.precio = -50;
console.log(producto.precio);