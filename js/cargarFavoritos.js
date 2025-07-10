import items from '../data/items.json' with { type: 'json' };

document.addEventListener("DOMContentLoaded", () => {
   const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
   const container = document.getElementById("favoritos-container");

   if (favoritos.length === 0) {
      container.innerHTML = "<p class='text-center'>No tienes juegos en favoritos aún.</p>";
      return;
   }

   favoritos.forEach((index) => {
      const juego = items[index];
      if (!juego) return;

      const article = document.createElement("article");
      article.id = `categoria00-item${index + 1}`;
      article.className = `articulo-categoria item${index + 1}`;

      // Contenido del artículo
      article.innerHTML = `
         <header class="header-articulo">
            <div class="articulo">
               <p class="item-valor-nombre"><span style="font-weight:bold;text-transform:uppercase;">${juego.Nombre}</span></p>
               <p class="item-valor-autor"><span style="font-weight:bold;text-transform:uppercase;">${juego.Autor}</span></p>
               <img class="item-valor-portada" src="${juego.Portada}" alt="${juego.Nombre}">
               <p class="item-valor-rating"><span style="font-weight:bold;text-transform:uppercase;"></span></p>
               <div class="item-valor-rating"></div>
            </div>
         </header>
         <div class="detalle-articulo">
            <h4 class="item-campo-personalizado_1" style="color:gray;">CAMPO PERSONALIZADO 1</h4>
            <p class="item-valor-personalizado_1" style="color:gray;">${juego['personalizado_1.Precio']}</p>
         </div>
         <div class="info">
            <div class="favorito-container">
               <input type="checkbox" id="fav-${index}" class="favorito-checkbox" data-index="${index}" hidden>
               <label for="fav-${index}" class="favorito-label" title="Agregar a favoritos" data-index="${index}">❤</label>
            </div>
            <p class="item-valor-descripcion"><span style="font-weight:bold;text-transform:uppercase;">${juego.Descripcion}</span></p>
            <h4 class="item-campo-personalizado_2" style="color:gray;">Requisitos minimos</h4>
            <p class="item-valor-personalizado_2" style="color:gray;">${juego['personalizado_2.Requisitos minimos']}</p>
            <div class="info-grid">
               <h4 class="item-campo-personalizado_3" style="color:gray;">Clasificacion</h4>
               <h4 class="item-campo-personalizado_5" style="color:gray;">Sitio web</h4>
               <p class="item-valor-personalizado_3" style="color:gray;">${juego['personalizado_3.Clasificacion']}</p>
               <p class="item-valor-personalizado_5" style="color:gray;">${juego['personalizado_5.Sitio web']}</p>
            </div>
            <h4 class="item-campo-personalizado_4" style="color:gray;">Fecha de lanzamiento</h4>
            <p class="item-valor-personalizado_4" style="color:gray;">${juego['personalizado_4.Fecha de lanzamiento']}</p>
         </div>
      `;

      container.appendChild(article);
   });

   // Manejar eliminación de favoritos
   document.querySelectorAll(".favorito-label").forEach(label => {
      label.addEventListener("click", () => {
         const index = parseInt(label.getAttribute("data-index"));
         const nuevosFavoritos = favoritos.filter(i => i !== index);

         localStorage.setItem("favoritos", JSON.stringify(nuevosFavoritos));
         window.location.reload();
      });
   });
});