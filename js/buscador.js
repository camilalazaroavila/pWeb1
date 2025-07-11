
import items from "../data/items.json" with { type: 'json' };
import { mostrarEstrellas } from "./rating.js";

var inputBuscador = document.getElementById("buscador");
var linksCategorias = document.querySelectorAll("a.tab-categoria");
var articulos = document.querySelectorAll("article.articulo-categoria");

let categoriaActiva = ""; 

function mostrarItemsFiltrados(textoBusqueda = "") {
  var texto = textoBusqueda.trim().toLowerCase();

  var itemsFiltrados = items.filter(item => {
    if (categoriaActiva && item.Categoria.toLowerCase() !== categoriaActiva.toLowerCase()) {
      return false;
    }
    if (texto === "") return true;
    return (
      item.Nombre.toLowerCase().includes(texto) ||
      item.Autor.toLowerCase().includes(texto)
    );
  });

  articulos.forEach((articulo) => {
    var claseArticulo = articulo.classList[1]; 
    var itemEncontrado = itemsFiltrados.find(item => item.Id.includes(claseArticulo));

    if (itemEncontrado) {
      articulo.style.display = "block";
      actualizarContenidoBasico(articulo, itemEncontrado);
    } else {
      articulo.style.display = "none";
    }
  });
}

function actualizarContenidoBasico(articuloContenedor, item) {
  var { Id, Nombre, Autor, Portada, Descripcion, Rating } = item;

  articuloContenedor.getElementsByClassName("item-valor-nombre")[0].innerText = Nombre;
  articuloContenedor.getElementsByClassName("item-valor-autor")[0].innerText = Autor;

  var imgPortada = articuloContenedor.getElementsByClassName("item-valor-portada")[0];
  imgPortada.src = Portada;
  imgPortada.alt = Nombre;

  articuloContenedor.getElementsByClassName("item-valor-descripcion")[0].innerText = Descripcion;
var ratingContenedor = articuloContenedor.querySelector(".item-valor-rating");
  if (ratingContenedor) {
    mostrarEstrellas(ratingContenedor, Rating); 
  }

  articuloContenedor.id = Id;
}


linksCategorias.forEach(linkCategoria => {
  linkCategoria.addEventListener("click", e => {//en la categroia q estamos parados
    e.preventDefault();
    categoriaActiva = linkCategoria.innerText;
    inputBuscador.value = "";
    mostrarItemsFiltrados();
  });
});

inputBuscador.addEventListener("input", () => {// escucha el tipeo de la busqueda
  if (inputBuscador.value.length >= 3) {//al menos 3 caracteres
    mostrarItemsFiltrados(inputBuscador.value);
  } else {
    mostrarItemsFiltrados("");
  }
});

if (linksCategorias.length > 0) {
  categoriaActiva = linksCategorias[0].innerText;
  mostrarItemsFiltrados();
}
