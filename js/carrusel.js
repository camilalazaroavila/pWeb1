// items es un array que contiene todos los 60 items, con sus correspondientes campos
import items from "../data/items.json" with { type: 'json' };
const myCarouselElement = new bootstrap.Carousel('#carouselExampleControls')

// Obtener número aleatorio entre 1 y 60
function numeroAleatorio() {
  return Math.floor(Math.random() * 60) + 1;
}

// Función para obtener una portada aleatoria
function obtenerPortadaAleatoria(numeroAleatorio){
  let portadaAleatoria;
  portadaAleatoria = items[numeroAleatorio].Portada
  
  //Acá deben agregar el código para obtener una portada aleatoria (portada de algún item),
  //y guardarla en la variable portadaAleatoria
  
  return portadaAleatoria;
}

function obtenerNombreAleatorio(numeroAleatorio){
  let nombreAleatorio;
  nombreAleatorio = items[numeroAleatorio].Nombre
  //Acá deben agregar el código para obtener una portada aleatoria (portada de algún item),
  //y guardarla en la variable nombreAleatorio
  
  return nombreAleatorio;
}

// A continuación, deben agregar el código para "enlazar" 5 portadas aleatorias al carrusel
const tituloSlide = document.querySelectorAll('.tituloSlide')


const portadas = document.querySelectorAll("#slide");
let numero = [numeroAleatorio(), numeroAleatorio(), numeroAleatorio(), numeroAleatorio(), numeroAleatorio()];
let i = 0;


tituloSlide.forEach(titulo => {
    titulo.textContent = obtenerNombreAleatorio(numero[i]);
    i++
});
i = 0;
portadas.forEach(portada => {
  portada.src = obtenerPortadaAleatoria(numero[i]);
  i++;
});


const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 5000,
})

