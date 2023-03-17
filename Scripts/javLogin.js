////////////////////////FORMULARIO REGISTRO////////////////
const registroForm = document.getElementById('form_register');

/////////////////////////EVENTOS///////////////////


// console.log(loginForm);

const registroExitoso = document.getElementById('registro-exitoso');

const whebshopLink = document.getElementById('whebshopLink');

let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

registroForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('nombre_usuario').value;
  const email = document.getElementById('email_registro').value;
  const password = document.getElementById('clave_registro').value;

  // Crea el objeto usuario con los datos ingresados
  const usuario = {
    username: username,
    email: email,
    password: password
  };

    usuarios.push(usuario)
  // Agrega el objeto usuario al local storage
  localStorage.setItem('usuarios', JSON.stringify(usuarios));

  // Muestra el mensaje de registro exitoso
  registroExitoso.style.display = 'block';
  whebshopLink.style.display = 'block'

  // Oculta el formulario de registro
  registroForm.style.display = 'none';
  
});
/////////////////////EVENTOS////////////


////LOGIN//////////
const usuariosLog = JSON.parse(localStorage.getItem('usuarios')) || [];

const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function (e) {
  e.preventDefault();
  
  const username = document.getElementById('LogUser').value;
  const password = document.getElementById('LogPass_input').value;

  let usuarioEncontrado = false;

  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].username === username && usuarios[i].password === password) {
      usuarioEncontrado = true;
      break;
    }
  }

  if (usuarioEncontrado) {
    // Si el usuario y la contraseña son correctos, redirige al usuario a la página de inicio de la tienda virtual
    window.location.href = './pages/registro.html';
  } else {
    // Si el usuario y la contraseña son incorrectos, muestra un mensaje de error
    errorLog.style.display = 'block';
  }
});
  











// const btn_ingreso = document.getElementById('btnIngreso')
// const errorLog = document.getElementById('errorLog');
// const loginForm = document.getElementById('loginForm');
// function enviarForm(){
//   preventDefault
//   localStorage.getItem('usuarios' , JSON.parse(usuarios))
// }
// // ////////////7eventos////

// btn_ingreso.addEventListener('click' , enviarForm)
// // loginForm.addEventListener('submit' , loginForm) {
// //   log.preventDefault();

// //    const username = document.getElementById('LogUser').value;
// //    const password = document.getElementById('LogPass_input').value;

// //   const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
// //    const usuarioEncontrado = usuarios.find(usuario => usuario.username === username && usuario.password === password);

// //    if(usuarioEncontrado){
// //     alert('osiiiiiiiiiii')
    

// //    }else{
// //      errorLog.style.display = 'block'
// //    }
// //  };




// ////////////////////CARRITO///
// function agregar_a_carrito(){ 
//   console.log('evento');
// }
// let btn_compra = document.querySelectorAll('#btn_agregar_carrito');
// console.log('btn_compra');

// for ( let boton of btn_compra){
  
//   boton.addEventListener("click ", agregar_a_carrito);
// }