

///////////////////////////////////
let carritoA = [];
let total = 0;



function agregar_a_carrito(e){
    
    let etiqueta = e.target;
    let div = etiqueta.parentNode;
    
    
    let nombre_producto = div.querySelector(".h2card").textContent;
    let precio_producto = div.querySelector(".p-card-precio").textContent;
    let cantidad = div.querySelector(".cantidad").textContent;


let producto = {
    nombre: nombre_producto,
    precio: precio_producto,
    cantidad: cantidad,
}

carritoA.push(producto);
console.log( carritoA)

let productos_json = JSON.stringify(carritoA);
localStorage.setItem("carritoA", productos_json);

FuncabrirCarrito()

render_carrito()
    
}



function render_carrito(){

  let cuerpo = document.getElementById('tbody');
    cuerpo.innerHTML= "";

  for(let producto of carritoA){
    let linea = document.createElement('tr');

    linea.innerHTML = `
    <td><p>${producto.nombre}</p></td>
    <td>${producto.cantidad}</td>
    <td>${producto.precio}</td>
    <td><button class="btn btn-danger borrar_elemento">Borrar</button></td>
    `
    cuerpo.append(linea);
  }

  

}




let btn_compra = document.querySelectorAll('.card-button');



for(let boton of btn_compra){
    boton.addEventListener('click' , agregar_a_carrito)
}





























////FUNCIONES BOTON CARRITO
let abrirCarrito = document.getElementById('boton_carrito');
function FuncabrirCarrito(){
    carrito.style.display = "block"
    boton_carrito.style.display = "none"
}

abrirCarrito.addEventListener('click' , FuncabrirCarrito) ;
// let  container_carrito = document.getElementById
let cerrarCarrito = document.getElementById('boton_carrito_abierto');
function FunccerrarCarrito (){
    let container_carrito= document.querySelector('.container_carrito')
    container_carrito.style.display = "none"
    boton_carrito.style.display = "block"
    
}
cerrarCarrito.addEventListener('click' , FunccerrarCarrito);


