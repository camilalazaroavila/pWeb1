function validarFormulario() {
  var campoCorreo = document.getElementById('email');
  var campoContrasena = document.getElementById('password');

  var mensajeErrorCorreo = document.getElementById('error-email');
  var mensajeErrorContrasena = document.getElementById('error-pass');

  var correo = campoCorreo.value.trim();
  var contrasena = campoContrasena.value.trim();

  var expReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Limpiar mensajes anteriores
  mensajeErrorCorreo.textContent = "";
  mensajeErrorContrasena.textContent = "";

  let esValido = true;

  if (correo === "") {
    mensajeErrorCorreo.textContent = "Por favor, ingrese su correo electrónico.";
    campoCorreo.focus();
    esValido = false;
  } else if (!expReg.test(correo)) {
    mensajeErrorCorreo.textContent = "Por favor, ingrese un correo válido (ejemplo@dominio.com).";
    campoCorreo.focus();
    esValido = false;
  }

  if (contrasena === "") {
    mensajeErrorContrasena.textContent = "Por favor, ingrese su contraseña.";
    if (esValido) campoContrasena.focus();
    esValido = false;
  } else if (contrasena.length < 6) {
    mensajeErrorContrasena.textContent = "La contraseña debe tener al menos 6 caracteres.";
    if (esValido) campoContrasena.focus();
    esValido = false;
  }

  return esValido;
}