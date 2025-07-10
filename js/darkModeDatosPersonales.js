const toggle = document.getElementById("toggle-dark-mode");
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
    const esOscuro = document.body.classList.contains("dark-mode");
    localStorage.setItem("modoOscuro", esOscuro ? "true" : "false");
    toggle.textContent = esOscuro ? "☀️ Modo Claro" : "🌙 Modo Oscuro";
  });



  // Al cargar la página, aplicar modo guardado
  window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("modoOscuro") === "true") {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
      document.getElementById("toggle-dark-mode").textContent = "☀️ Modo Claro";
    }
  });