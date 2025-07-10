import items from "../data/items.json" with { type: 'json' };

function obtenerFavoritos() {
  return JSON.parse(localStorage.getItem("favoritos")) || [];
}

function guardarFavoritos(favs) {
  localStorage.setItem("favoritos", JSON.stringify(favs));
}

function esFavorito(id) {
  return obtenerFavoritos().includes(id);
}

function toggleFavorito(id) {
  let favoritos = obtenerFavoritos();
  if (favoritos.includes(id)) {
    favoritos = favoritos.filter(f => f !== id);
  } else {
    favoritos.push(id);
  }
  guardarFavoritos(favoritos);
  renderizarItems();
}

function renderizarItems() {
  const contenedor = document.getElementById("items-container");
  const favoritos = obtenerFavoritos();
  const soloFavoritos = window.location.pathname.includes("favoritos");

  contenedor.innerHTML = "";

  items.forEach(item => {
    if (soloFavoritos && !favoritos.includes(item.Id)) return;

    const div = document.createElement("div");
    div.className = "item";

    div.innerHTML = `
      <img src="${item.Portada}" alt="${item.Nombre}" width="200">
      <div>
        <h2>${item.Nombre}</h2>
        <p><strong>Autor:</strong> ${item.Autor}</p>
        <p><strong>Precio:</strong> ${item.Precio}</p>
        <p><a href="${item.Referencia}" target="_blank">Ver más</a></p>
        <span class="favorito" data-id="${item.Id}" style="cursor:pointer">
          ${esFavorito(item.Id) ? "❤️" : "🤍"}
        </span>
      </div>
    `;

    div.querySelector(".favorito").onclick = () => toggleFavorito(item.Id);

    contenedor.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", renderizarItems);