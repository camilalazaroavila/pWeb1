export function mostrarEstrellas(contenedor, rating) {
  contenedor.innerHTML = "";

  const estrellas = Math.round(Number(rating)) || 0;

  for (let i = 0; i < 5; i++) {
    const estrella = document.createElement("span");
    estrella.classList.add("estrella");
    estrella.innerText = i < estrellas ? "★" : "☆";
    contenedor.appendChild(estrella);
  }
}
