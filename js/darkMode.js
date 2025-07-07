const iniciarSesion = document.querySelector('#iniciar-sesion');
const registrar = document.querySelector('#registrar');
const articulos = document.querySelectorAll('.articulo-categoria');
const infos = document.querySelectorAll('.info');
const nombres = document.querySelectorAll('.item-valor-nombre');
const buscador = document.querySelector('#buscador');

boton.addEventListener('click', () => {
  body.classList.toggle('body-style-dark-mode');
  navegacionCategoria.classList.toggle('navegacion-categoria-dark-mode');

  iniciarSesion.classList.toggle('dark-mode');
  registrar.classList.toggle('dark-mode');
  buscador.classList.toggle('dark-mode');

  articulos.forEach(el => el.classList.toggle('dark-mode'));
  infos.forEach(el => el.classList.toggle('dark-mode'));
  nombres.forEach(el => el.classList.toggle('dark-mode'));
});
