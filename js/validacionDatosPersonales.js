
function validarDatos()
{
  var regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var nombreInput = document.getElementById('nombre');
  var emailInput = document.getElementById('email');
  var dniInput = document.getElementById('dni');
  var telefonoInput = document.getElementById('telefono');
  var nacimientoInput = document.getElementById('nacimiento');
  var direccionInput = document.getElementById('direccion');
  var generoInput = document.getElementById('genero');

  
  var errorNombre = document.getElementById('error-nombre');
  var errorDNI = document.getElementById('error-dni');
  var errorEmail = document.getElementById('error-email');
  var errorTelefono = document.getElementById('error-telefono');
  var errorNacimiento = document.getElementById('error-nacimiento')
  var errorDireccion = document.getElementById('error-direccion');
  var errorGenero = document.getElementById('error-genero');

  var email = emailInput.value.trim();
  var nombre = nombreInput.value.trim();
  var dni = dniInput.value.trim();
  var telefono = telefonoInput.value.trim();
  var nacimiento = nacimientoInput.value;
  var direccion = direccionInput.value.trim();
  var genero = generoInput.value;

  // Limpiar mensaje previo
  errorEmail.textContent = "";
  errorNombre.textContent = "";
  errorDNI.textContent = "";
  errorTelefono.textContent = "";
  errorNacimiento.textContent = "";
  errorDireccion.textContent = "";
  errorGenero.textContent = "";

  let valid = true;

if (nombre.length === 0) {
    errorNombre.textContent = "Por favor, ingrese su nombre completo.";
    nombreInput.focus();
    valid = false;
  }

  if (dni.length === 0 || !/^\d{7,9}$/.test(dni)) {
    errorDNI.textContent = "Por favor, ingrese un DNI válido (7 a 9 dígitos).";
    dniInput.focus();
    valid = false;
  }

  if (email.length === 0) {
    errorEmail.textContent = "Por favor, ingrese su correo electrónico.";
    emailInput.focus();
    valid = false;
  } else if (!regexp.test(email)) {
    errorEmail.textContent = "Por favor, ingrese un email válido (ejemplo@dominio.com).";
    emailInput.focus();
    valid = false;
  }

  if (telefono.length === 0 || !/^\d{6,15}$/.test(telefono.replace(/[-\s+]/g, ""))) {
    errorTelefono.textContent = "Por favor, ingrese un número de teléfono válido.";
    telefonoInput.focus();
    valid = false;
  }

  if (nacimiento.length === 0) {
    errorNacimiento.textContent = "Por favor, ingrese su fecha de nacimiento.";
    nacimientoInput.focus();
    valid = false;
  }

  if (direccion.length === 0) {
    errorDireccion.textContent = "Por favor, ingrese su dirección.";
    direccionInput.focus();
    valid = false;
  }

  if (genero === "") {
    errorGenero.textContent = "Por favor, seleccione una opción.";
    generoInput.focus();
    valid = false;
  }

  return valid;

}
