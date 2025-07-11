function obtenerIndiceGlobal(elementoArticulo) {
  const id = elementoArticulo.id;
  const match = id.match(/categoria(\d+)-item(\d+)/);
 
  const categoria = parseInt(match[1]) - 1;
  const indiceLocal = parseInt(match[2]) - 1;

  return categoria * 12 + indiceLocal;
}

function obtenerFavoritos() {
  return JSON.parse(localStorage.getItem("favoritos")) || [];
}

function guardarFavoritos(favoritos) {
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

export function actualizarFavoritosVisibles() {
  const favoritos = obtenerFavoritos();
  const articulosVisibles = document.querySelectorAll(".articulo-categoria");

  articulosVisibles.forEach((articulo) => {
    const indice = obtenerIndiceGlobal(articulo);

    const checkbox = articulo.querySelector(".favorito-checkbox");
    if (checkbox) {
      checkbox.checked = favoritos.includes(indice);
    }
  });
}

function manejarClicksFavoritos() {
  const botones = document.querySelectorAll('.favorito-checkbox');

  botones.forEach(boton => {
    boton.addEventListener("click", (event) => {
      event.stopPropagation();

      const articulo = boton.closest('.articulo-categoria');
      const indice = obtenerIndiceGlobal(articulo);

      let favoritos = obtenerFavoritos();

      if (favoritos.includes(indice)) {
        favoritos = favoritos.filter(i => i !== indice);
      } else {
        favoritos.push(indice);
      }

      guardarFavoritos(favoritos);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  actualizarFavoritosVisibles();
  manejarClicksFavoritos();
});
