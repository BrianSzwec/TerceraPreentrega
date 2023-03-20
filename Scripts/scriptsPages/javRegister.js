////////////////////////FORMULARIO REGISTRO////////////////
const registroForm = document.getElementById('form_register');
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













