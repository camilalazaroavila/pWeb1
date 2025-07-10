// import items from "../../data/items.json" with { type: 'json' };
import items from "../data/items.json" with { type: 'json' };
// import configuracion from "../../config/configuracion.json" with { type: 'json' };
import configuracion from "../config/configuracion.json" with { type: 'json' };
import { actualizarFavoritosVisibles } from "./favoritos.js";
const tabCategoria1 = document.getElementById("tab-categoria-1");

let linksCategorias = document.querySelectorAll("a.tab-categoria");

linksCategorias.forEach((linkCategoria) => {
   linkCategoria.addEventListener("click", () => {
      actualizarFavoritosVisibles();
      items.forEach((item) => {
         const { Categoria, Id, Nombre, Autor, Portada, Descripcion, Rating } = item;

         let innerText = linkCategoria.innerText;
         if (innerText.toLowerCase() != Categoria.toLowerCase()) return;
         const articuloContenedor = document.querySelector("article." + Id.split("-")[1])

         articuloContenedor.getElementsByClassName("item-valor-nombre")[0].innerText = Nombre;
         articuloContenedor.getElementsByClassName("item-valor-autor")[0].innerText = Autor;
         articuloContenedor.getElementsByClassName("item-valor-portada")[0].src = Portada;
         articuloContenedor.getElementsByClassName("item-valor-portada")[0].alt = Nombre;
         articuloContenedor.getElementsByClassName("item-valor-descripcion")[0].innerText = Descripcion;
         articuloContenedor.getElementsByClassName("item-valor-rating")[0].innerText = Rating;

         const personalizados = Object.keys(item).filter(key => key.startsWith("personalizado_"));
         
         personalizados.forEach((personalizado, index) => {
            let itemCampoName = `item-campo-personalizado_${index + 1}`;
            let itemValueName = `item-valor-personalizado_${index + 1}`;
            
            let articuloContenedorItemCampoPersonalizado = articuloContenedor.getElementsByClassName(itemCampoName)[0]
            if (articuloContenedorItemCampoPersonalizado != null && articuloContenedorItemCampoPersonalizado.innerText != null) {
               articuloContenedor.getElementsByClassName(itemCampoName)[0].innerText = personalizado.split(".")[1];
               articuloContenedor.getElementsByClassName(itemValueName)[0].innerText = item[personalizado];
            }
         });

         articuloContenedor.id = Id;
      });
   });
});

if (configuracion["modo-test-prod"] === "prod") {
   tabCategoria1.click();
};