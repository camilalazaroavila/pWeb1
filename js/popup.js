let cerrar = document.querySelector("#cerrar");
let popup = document.querySelector(".popup");
let contenidoPopUp = document.querySelector("#contenido-popup");
let botones = document.querySelectorAll(".ver-mas");

cerrar.addEventListener("click", () => {
  popup.classList.add("d-none");
});

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    let articulo = boton.closest(".articulo-categoria");
    contenidoPopUp.innerHTML = articulo.innerHTML;
    popup.classList.remove("d-none");
  });
});