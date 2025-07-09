let cerrar = document.querySelector("#cerrar");
let popup = document.querySelector(".popup");
let contenidoPopUp = document.querySelector("#contenido-popup");
let infoDivs = document.querySelectorAll(".articulo-categoria");

cerrar.addEventListener("click", () => {
  popup.classList.add("d-none");
});

infoDivs.forEach((info) => {
  info.addEventListener("click", () => {
    // Copiamos el contenido completo del div.info
    contenidoPopUp.innerHTML = info.innerHTML;
    popup.classList.remove("d-none");
  });
});