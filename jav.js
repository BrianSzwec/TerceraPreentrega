//VARIABLES & ARRAYS PARA DEFINICION

const productos = [{
  nombre: "Titanio",
  precio: 850,
  peso: "gramos",
},
//  { 
//     nombre: "Mercurio",
//     precio: 850,
//     peso: "gramos"
//   },

{
  nombre: "Potasio",
  precio: 450,
  peso: "gramos",
},

{
  nombre: "Fosfato",
  precio: 100,
  peso: "gramos",

},

];

const mercurio = {
  nombre: "Mercurio",
  precio: 850,
  peso: "gramos"
};
const vip = "Brian";

/////////////////////////////////////////////////////////////////
ingresoGeneral();
function ingresoBrian() {
  let contador = 0;
  while (contador < 3) {
    let usuarioPass = prompt("Ingrese su contraseña");

    if (usuarioPass === "2718") {
      alert("Ingreso Exitoso");
      productos.push(mercurio)
      return mostrarProductosDisponibles(); // pasar el nombre de usuario como argumento

    } else {
      alert("Contraseña incorrecta, intento " + (contador + 1) + " de 3 intentos");
      contador++;
    }
  }
  alert("**Expulsado Del Login**")
}
function ingresoGeneral() {
  let ingresoSinClave = prompt("Hola bienvenido a Droguerias S.A || Ingrese su usuario")
  if (ingresoSinClave === "Brian") {
    alert("Bienvenido Brian Szwec")
    ingresoBrian();
  } else {
    alert("Bienvenido " + ingresoSinClave + "\n te daremos una lista  de los productos que estas Autorizado a comprar")
    mostrarProductosDisponibles(ingresoSinClave);
  }
}
function mostrarProductosDisponibles(usuario) {
  productos



  let productosDisponibles = "Productos disponibles:\n";
  for (let i = 0; i < productos.length; i++) {
    {
      productosDisponibles += "- " + productos[i].nombre + "\n";
    }
  }

  const elementoSeleccionado = prompt(productosDisponibles + "¿Qué producto necesitas?");

  if (elementoSeleccionado.toLowerCase() === "mercurio") { // comparar en minúsculas
    if (vip === "Brian" && prompt("Ingrese su contraseña nuevamente") === "2718") {
      alert("Compra de Mercurio autorizada. desea Agregar otro producto? ");
      let agregarAmer = mostrarProductosDisponibles(usuario);
      alert(" Usted ha seleccionado " + elementoSeleccionado + " y luego agrego " + agregarAmer) 
    } else {
      alert("Solo Brian puede comprar Mercurio. Por favor, seleccione otro producto.");
      mostrarProductosDisponibles(usuario); // volver a llamar a la función para seleccionar otro producto
      
    }
  } else {
    switch (elementoSeleccionado.toLowerCase()) {
      case "potasio":
        if(vip=="Brian" && elementoSeleccionado=="mercurio"){
          alert("Usted ha seleccionado Mercurio por Autorizacion \n y agrego " + elementoSeleccionado)

        }
        let agregarApot = prompt("Agregaste Potasio , Quieres agregar algo mas? " + productosDisponibles)
        
        alert(" Usted ha seleccionado " + elementoSeleccionado + " y luego agrego " + agregarApot)
        console.log("El potasio es un elemento químico esencial para la vida y se encuentra en muchos alimentos.");
        break;
      case "Mercurio":
          let agregarAmer = prompt("Agregaste Mercurio , Quieres agregar algo mas ? + productosDisponibles" )
          alert("Usted ha seleccionado Mercurio por Autorizacion \n y agrego " + agregarAmer)
        
        alert(" Usted ha seleccionado " + elementoSeleccionado + "y luego agrego " + agregarAmer)
        console.log("El mercurio es un metal tóxico que puede causar graves problemas de salud.");
        break;
      case "titanio":
        let agregarAtit = prompt("Agregaste Titanio , Quieres agregar algo mas? " + productosDisponibles)
        
        alert(" Usted ha seleccionado " + elementoSeleccionado + " y luego agrego " + agregarAtit)
        console.log("El titanio es un metal de transición que se utiliza en muchas aplicaciones, desde la aeronáutica hasta la medicina.");
        break;
      case "fosfato":
        let agregarAfos = prompt("Agregaste Fosfato , Quieres agregar algo mas? " + productosDisponibles)
        
        alert(" Usted ha seleccionado " + elementoSeleccionado + " y luego agrego " + agregarAfos)
        console.log("El fosfato es un compuesto químico que se encuentra en muchas rocas y se utiliza en la producción de fertilizantes.");
        break;
      default:
        alert("El elemento no se reconoce o no está en la lista, Vuelva a intentar")
        console.log("El elemento no se reconoce o no está en la lista.");
        return mostrarProductosDisponibles();

    }
  }
}
function registroEnvio() {

}