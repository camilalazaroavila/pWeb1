const ITEMS_POR_CATEGORIA = 12;

function obtenerIndiceGlobal(elementoArticulo) {
  const id = elementoArticulo.id;
  const match = id.match(/categoria(\d+)-item(\d+)/);

  if (!match) return null;

  const categoria = parseInt(match[1]) - 1;
  const indiceLocal = parseInt(match[2]) - 1;

  return categoria * ITEMS_POR_CATEGORIA + indiceLocal;
}

export function actualizarFavoritosVisibles() {
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  // Obtené todos los artículos visibles
  const articulosVisibles = document.querySelectorAll(".articulo-categoria");

  articulosVisibles.forEach((articulo) => {
    const id = articulo.id;
    const match = id.match(/categoria(\d+)-item(\d+)/);


    if (match) {
      const categoria = parseInt(match[1]) - 1;
      const indiceLocal = parseInt(match[2]) - 1;
      const indiceFinal = categoria * 12 + indiceLocal;

      const checkbox = articulo.querySelector(".favorito-checkbox");
      if (checkbox) {
        checkbox.checked = favoritos.includes(indiceFinal);
      }
    }
  });
}


document.addEventListener("DOMContentLoaded", () => {
  actualizarFavoritosVisibles();
});

// Manejo de click en los corazones
document.querySelectorAll('.favorito-checkbox').forEach(boton => {
  boton.addEventListener("click", (event) => {
    event.stopPropagation(); // Evita que el clic se propague al artículo

    const articulo = boton.closest('.articulo-categoria');
    const indiceFinal = obtenerIndiceGlobal(articulo);
    if (indiceFinal === null) return;

    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    if (favoritos.includes(indiceFinal)) {
      favoritos = favoritos.filter(i => i !== indiceFinal);
    } else {
      favoritos.push(indiceFinal);
    }

    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    console.log("Favoritos actualizados:", favoritos);
  });
});
