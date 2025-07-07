function valida_envia() {
  var regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var emailInput = document.getElementById('email');
  var errorEmail = document.getElementById('error-email');
  var email = emailInput.value.trim();

  // Limpiar mensaje previo
  errorEmail.textContent = "";

  if (email.length === 0) {
    errorEmail.textContent = "Por favor, ingrese su correo electrónico.";
    emailInput.focus();
    return false;
  }
  if (!regexp.test(email)) {
    errorEmail.textContent = "Por favor, ingrese un email válido (ejemplo@dominio.com).";
    emailInput.focus();
    return false;
  }

  return true; // todo OK, se envía el formulario
}