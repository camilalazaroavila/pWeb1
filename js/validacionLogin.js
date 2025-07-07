function validarFormulario() {
  var emailInput = document.getElementById('email');
  var passInput = document.getElementById('pass');

  var errorEmail = document.getElementById('error-email');
  var errorPass = document.getElementById('error-pass');

  var email = emailInput.value.trim();
  var pass = passInput.value.trim();

  var regexpEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Limpiar mensajes previos
  errorEmail.textContent = "";
  errorPass.textContent = "";

  let valid = true;

  if (email === "") {
    errorEmail.textContent = "Por favor, ingrese su correo electrónico.";
    emailInput.focus();
    valid = false;
  } else if (!regexpEmail.test(email)) {
    errorEmail.textContent = "Por favor, ingrese un email válido (ejemplo@dominio.com).";
    emailInput.focus();
    valid = false;
  }

  if (pass === "") {
    errorPass.textContent = "Por favor, ingrese su contraseña.";
    if (valid) passInput.focus();
    valid = false;
  } else if (pass.length < 6) {
    errorPass.textContent = "La contraseña debe tener al menos 6 caracteres.";
    if (valid) passInput.focus();
    valid = false;
  }

  return valid;
}