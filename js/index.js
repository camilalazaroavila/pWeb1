import items from "../data/items.json" with { type: 'json' };

//let items = JSON.parse(localStorage.getItem("items")) || [];
// 1. Hardcodeamos dos items con estructura similar al JSON original
    const favoritos = [
      {
        Id: "categoria01-item01",
        Nombre: "Grand Theft Auto V",
        Autor: "Rockstar Games",
        Categoria: "Acción",
        Descripcion: "Explorá el mundo abierto de Los Santos en alta definición.",
        Referencia: "https://store.steampowered.com/app/271590/Grand_Theft_Auto_V_Legacy/",
        Portada: "https://cdn1.epicgames.com/offer/b0cd075465c44f87be3b505ac04a2e46/EGS_GrandTheftAutoVEnhanced_RockstarNorth_S1_2560x1440-906d8ae76a91aafc60b1a54c23fab496",
        Rating: 5,
        "personalizado_1.Precio": "$ 30.89",
        "personalizado_2.Requisitos minimos": "Windows 10, 8GB RAM, SSD",
        "personalizado_3.Clasificacion": "M17+",
        "personalizado_4.Fecha de lanzamiento": "17/09/2013",
        "personalizado_5.Sitio web": "https://www.rockstargames.com/gta-v",
        Favorito: true
      },
      {
        Id: "categoria01-item02",
        Nombre: "Minecraft",
        Autor: "Mojang",
        Categoria: "Aventura",
        Descripcion: "Juego de construcción y supervivencia con bloques.",
        Referencia: "https://www.minecraft.net",
        Portada: "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png",
        Rating: 4,
        "personalizado_1.Precio": "$ 26.95",
        "personalizado_2.Requisitos minimos": "Windows 10, 4GB RAM",
        "personalizado_3.Clasificacion": "E10+",
        "personalizado_4.Fecha de lanzamiento": "18/11/2011",
        "personalizado_5.Sitio web": "https://www.minecraft.net",
        Favorito: true
      }
    ];

    // 2. Simulamos guardar en localStorage
    localStorage.setItem("items", JSON.stringify(items));

    // 3. Obtener favoritos
    //let favoritos = i.filter(item => item.Favorito === true);
    const contenedor = document.querySelector("#contenedorFavorito");

    function crearArticuloFavorito(item) {
      const article = document.createElement("article");
      article.id = item.Id;
      article.className = `articulo-categoria ${item.Id.split("-")[1]}`;

      const header = document.createElement("header");
      header.className = "header-articulo";

      const divArticulo = document.createElement("div");
      divArticulo.className = "articulo";

      const nombre = document.createElement("p");
      nombre.className = "item-valor-nombre";
      nombre.innerHTML = `<span style="font-weight:bold;text-transform:uppercase;">${item.Nombre}</span>`;

      const autor = document.createElement("p");
      autor.className = "item-valor-autor";
      autor.innerHTML = `<span style="font-weight:bold;text-transform:uppercase;">${item.Autor}</span>`;

      const portada = document.createElement("img");
      portada.className = "item-valor-portada";
      portada.src = item.Portada;
      portada.alt = "Imagen de Portada";

      const rating = document.createElement("div");
      rating.className = "item-valor-rating";

      const estrella = document.createElement("span");
      estrella.className = "estrella";
      estrella.textContent = "★";
      estrella.dataset.id = item.Id;

      divArticulo.appendChild(nombre);
      divArticulo.appendChild(autor);
      divArticulo.appendChild(portada);
      divArticulo.appendChild(rating);
      divArticulo.appendChild(estrella);
      header.appendChild(divArticulo);
      article.appendChild(header);

      const detalle = document.createElement("div");
      detalle.className = "detalle-articulo";

      const h1 = document.createElement("h4");
      h1.className = "item-campo-personalizado_1";
      h1.style.color = "gray";
      h1.textContent = "CAMPO PERSONALIZADO 1";

      const p1 = document.createElement("p");
      p1.className = "item-valor-personalizado_1";
      p1.style.color = "gray";
      p1.textContent = item["personalizado_1.Precio"];

      detalle.appendChild(h1);
      detalle.appendChild(p1);
      article.appendChild(detalle);

      const info = document.createElement("div");
      info.className = "info";

      const descripcion = document.createElement("p");
      descripcion.className = "item-valor-descripcion";
      descripcion.innerHTML = `<span style="font-weight:bold;text-transform:uppercase;">${item.Descripcion}</span>`;

      const h2 = document.createElement("h4");
      h2.className = "item-campo-personalizado_2";
      h2.style.color = "gray";
      h2.textContent = "CAMPO PERSONALIZADO 2";

      const p2 = document.createElement("p");
      p2.className = "item-valor-personalizado_2";
      p2.style.color = "gray";
      p2.textContent = item["personalizado_2.Requisitos minimos"];

      const grid = document.createElement("div");
      grid.className = "info-grid";

      const h3 = document.createElement("h4");
      h3.className = "item-campo-personalizado_3";
      h3.style.color = "gray";
      h3.textContent = "CAMPO PERSONALIZADO 3";

      const h5 = document.createElement("h4");
      h5.className = "item-campo-personalizado_5";
      h5.style.color = "gray";
      h5.textContent = "CAMPO PERSONALIZADO 5";

      const p3 = document.createElement("p");
      p3.className = "item-valor-personalizado_3";
      p3.style.color = "gray";
      p3.textContent = item["personalizado_3.Clasificacion"];

      const p5 = document.createElement("p");
      p5.className = "item-valor-personalizado_5";
      p5.style.color = "gray";
      p5.textContent = item["personalizado_5.Sitio web"];

      grid.appendChild(h3);
      grid.appendChild(h5);
      grid.appendChild(p3);
      grid.appendChild(p5);

      const h4 = document.createElement("h4");
      h4.className = "item-campo-personalizado_4";
      h4.style.color = "gray";
      h4.textContent = "CAMPO PERSONALIZADO 4";

      const p4 = document.createElement("p");
      p4.className = "item-valor-personalizado_4";
      p4.style.color = "gray";
      p4.textContent = item["personalizado_4.Fecha de lanzamiento"];

      info.appendChild(descripcion);
      info.appendChild(h2);
      info.appendChild(p2);
      info.appendChild(grid);
      info.appendChild(h4);
      info.appendChild(p4);

      article.appendChild(info);

      return article;
    }

    function renderizarFavoritos() {
      contenedor.innerHTML = "";
      //favoritos = items.filter(item => item.Favorito === true);
      if (favoritos.length === 0) {
        contenedor.innerHTML = "<p>No hay juegos favoritos.</p>";
        return;
      }

      favoritos.forEach(item => {
        const articulo = crearArticuloFavorito(item);
        contenedor.appendChild(articulo);
      });
    }

    // Evento clic en estrella para quitar de favoritos
    contenedor.addEventListener("click", (e) => {
      if (e.target.classList.contains("estrella")) {
        const id = e.target.dataset.id;
        const index = items.findIndex(item => item.Id === id);
        if (index !== -1) {
          items[index].Favorito = false;
          localStorage.setItem("items", JSON.stringify(items));
          renderizarFavoritos();
        }
      }
    });

    renderizarFavoritos();