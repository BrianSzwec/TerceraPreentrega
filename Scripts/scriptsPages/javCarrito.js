///////////////////////////////////
let carritoA = [];
let total = 0;
let cantidadIni =1;
if(localStorage.getItem("carritoA")) {
  carritoA = JSON.parse(localStorage.getItem("carritoA"));
  render_carrito();
}

///////////AGREGAR A CARRITO
function agregar_a_carrito(e){
    
  let etiqueta = e.target;
  let div = etiqueta.parentNode;
 
  let nombre_producto = div.querySelector(".h2card").textContent;
  let precio_producto = parseFloat(div.querySelector(".p-card-precio").textContent);
  let cantidad = div.querySelector(".cantidad").value;

  let producto_existente = carritoA.find(p => p.nombre === nombre_producto && p.precio === precio_producto);
  if (producto_existente) {
      producto_existente.cantidad += 1;
  } else {
      // Si el producto no está en el carrito, agrégalo con cantidad 1
      let producto = {
          nombre: nombre_producto,
          precio: precio_producto,
          cantidad: 1,
      };
      
      carritoA.push(producto);
  }

  total = carritoA.reduce((acc, curr) => acc + (curr.precio * curr.cantidad), 0);

  console.log( carritoA)

  let productos_json = JSON.stringify(carritoA);
  localStorage.setItem("carritoA", productos_json);

  FuncabrirCarrito()

  render_carrito()   
}

let productos_json = JSON.stringify(carritoA);
localStorage.setItem("carritoA", productos_json);

///////////MOSTRAR CARRITO Y RENDERIZAR PRODS
function render_carrito(){
  

  let cuerpo = document.getElementById('tbody');
    cuerpo.innerHTML= "";

  for(let producto of carritoA){
    let linea = document.createElement('tr');
    
    linea.innerHTML = `
    <td><p>${producto.nombre}</p></td>
    <td>${producto.precio}</td>
    <td>${producto.cantidad}</td>
    <td><button class="btn btn-danger borrar">Borrar</button></td>
    `
    cuerpo.append(linea);


   
  }

  let btn_borrar = document.querySelectorAll('.borrar');
  
  for(let boton of btn_borrar){
    boton.addEventListener('click', borrar_producto);
  }
  
  let total = 0;
  for (let producto of carritoA) {

    total +=  producto.precio * producto.cantidad;
  }
  
  // Crear la línea de total
  let lineaTotal = document.createElement('tr');
  lineaTotal.innerHTML = `
    <td></td>
    <td></td>
    <td>Total:</td>
    <td>${total}</td>
  `;
  
  // Agregar la línea de total al cuerpo de la tabla
  cuerpo.append(lineaTotal);
}


////////////FUNCION ELIMINAR PRODUCTO
 function borrar_producto(e){
      //abuelo
  let div = e.target.parentNode.parentNode;
  
  
  let producto_a_eliminar = div.querySelector('p').textContent;
  
  function eliminarProd(producto){
    return producto.nombre != producto_a_eliminar;
  }



  
  let resultado_filter = carritoA.filter(eliminarProd);
  carritoA = resultado_filter;
  
render_carrito()
 
 }
  

/////////////////BOTON ELIMINAR
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