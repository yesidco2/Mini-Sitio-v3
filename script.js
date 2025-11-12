
const formSuscripcion = document.getElementById('form-suscripcion');
if (formSuscripcion) {
  formSuscripcion.addEventListener('submit', (e) => {
    e.preventDefault();
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje');
    if (correo) {
      mensaje.textContent = '¡Suscripción exitosa!';
    }
  });
}


const botonEnviar = document.getElementById('enviar');
if (botonEnviar) {
  botonEnviar.addEventListener('click', () => {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    const resultado = document.getElementById('resultado');

    if (nombre && email && mensaje) {
      resultado.textContent = 'Tu mensaje ha sido enviado exitosamente.';
    } else {
      resultado.textContent = 'Por favor completa todos los campos.';
    }
  });
}
