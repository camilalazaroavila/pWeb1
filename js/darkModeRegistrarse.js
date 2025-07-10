// Seleccionamos el botón toggle
const toggleBtn = document.getElementById("toggle-dark-mode");

// Función para actualizar el estado del botón y body según el modo
function actualizarModo() {
  const esOscuro = document.body.classList.contains("dark-mode");
  toggleBtn.textContent = esOscuro ? "☀️" : "🌙";
  toggleBtn.title = esOscuro ? "Modo Claro" : "Modo Oscuro";
}

// Cambiar modo al hacer click
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");

  // Guardar preferencia en localStorage
  const esOscuro = document.body.classList.contains("dark-mode");
  localStorage.setItem("modoOscuro", esOscuro ? "true" : "false");

  actualizarModo();
});

// Al cargar la página, aplicar modo guardado si existe
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("modoOscuro") === "true") {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
  } else {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
  }
  actualizarModo();
});
