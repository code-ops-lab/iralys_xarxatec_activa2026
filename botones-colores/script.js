const cuadrado = document.querySelector("#cuadrado");
 
document.querySelector("#botonRojo").addEventListener("click", e => {
    cuadrado.className = 'rojo';
});
 
document.querySelector("#botonAzul").addEventListener("click",e => {
    cuadrado.className = 'azul';
});
 
document.querySelector("#botonRosa").addEventListener("click", e => {
    cuadrado.className = 'rosa';
});
 