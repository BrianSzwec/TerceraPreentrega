////LOGIN//////////

const usuariosLog = JSON.parse(localStorage.getItem('usuarios')) || [];
const btnIngreso = document.getElementById('btnIngreso')
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function (e) {
  e.preventDefault();
  
  const username = document.getElementById('LogUser').value;
  const password = document.getElementById('LogPass_input').value;

  let usuarioEncontrado = false;

  for (let i = 0; i < usuariosLog.length; i++) {
    if (usuariosLog[i].username === username && usuariosLog[i].password === password) {
      usuarioEncontrado = true;
      break;
    }
  }

  if (usuarioEncontrado) {
    Swal.fire({
      icon: 'success',
      title: '¡Bienvenido!',
      text: 'Iniciaste sesión correctamente',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Continuar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Si el usuario hace clic en el botón "Continuar", redirige al usuario a la página de inicio de la tienda virtual
        window.location.href = './pages/repuestos.html';
      }
    });
  } else {Swal.fire({
    icon: 'error',
    title: 'Error de inicio de sesión',
    text: 'Usuario o contraseña incorrectos',
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'Intentar de nuevo'
  });
}
});