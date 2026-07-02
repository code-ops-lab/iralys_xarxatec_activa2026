class Cuenta {
    constructor(titular,saldo) {
        this.titular=titular;
        this.saldo=saldo;
        
    }
    toString()
    {
        return(`Titular: ${this.titular}, Saldo: ${this.saldo}`)
    }

   depositarDinero(deposito)
    {
        this.saldo= this.saldo + deposito;
    }

    retirarDinero(retiro)
    {
        this.saldo=this.saldo-retiro;
    }
    mostrarSaldo()
    {
        this.saldo;
    }
}
 


 const cuenta = new Cuenta("Iralys", 1200);
 cuenta.depositarDinero(300);
 cuenta.retirarDinero(100);
 cuenta.mostrarSaldo();


 console.log(cuenta.toString());