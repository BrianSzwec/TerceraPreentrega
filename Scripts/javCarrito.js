




















////FUNCIONES BOTON CARRITO
let abrirCarrito = document.getElementById('boton_carrito');
function FuncabrirCarrito(){
    carrito.style.display = "block"
    boton_carrito.style.display = "none"
}

abrirCarrito.addEventListener('click' , FuncabrirCarrito) ;

let cerrarCarrito = document.getElementById('boton-carrito-abierto');
function FunccerrarCarrito (){
    carrito.style.display = "none"
    boton_carrito.style.display = "block"
}
cerrarCarrito.addEventListener('click' , FunccerrarCarrito);

