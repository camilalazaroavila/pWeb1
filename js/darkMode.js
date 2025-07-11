const boton = document.querySelector('#modo-oscuro');
const body = document.body;

const navegacionCategoria = document.querySelector('#navegacion-categoria');
const encabezadoPrincipal = document.querySelector('#encabezado-principal');

const iniciarSesion = document.querySelector('#iniciar-sesion');
const registrar = document.querySelector('#registrar');
const buscador = document.querySelector('#buscador');

const articulos = document.querySelectorAll('.articulo-categoria');
const infos = document.querySelectorAll('.info');
const nombres = document.querySelectorAll('.item-valor-nombre');

const popup = document.querySelector('.popup');
const footer = document.querySelector('#footer-principal');
const scrollTopButton = document.querySelector('.punto');
const btnFooter = document.querySelector('#btn-footer');
const footerInfo = document.querySelector('.footer-info');

boton.addEventListener('click', () => {
  body.classList.toggle('body-style-dark-mode');

  encabezadoPrincipal?.classList.toggle('encabezado-dark-mode');
  navegacionCategoria?.classList.toggle('navegacion-categoria-dark-mode');

  iniciarSesion?.classList.toggle('dark-mode');
  registrar?.classList.toggle('dark-mode');
  buscador?.classList.toggle('dark-mode');

  articulos.forEach(el => el.classList.toggle('dark-mode'));
  infos.forEach(el => el.classList.toggle('dark-mode'));
  nombres.forEach(el => el.classList.toggle('dark-mode'));

  popup?.classList.toggle('dark-mode');
  footer?.classList.toggle('footer-dark-mode');
  scrollTopButton?.classList.toggle('dark-mode');
  btnFooter?.classList.toggle('dark-mode');
  footerInfo?.classList.toggle('dark-mode');

  // Cambiar texto y estilos del botón modo oscuro
    if (body.classList.contains('body-style-dark-mode')) {
    boton.innerHTML = '🌙'; // Luna para modo oscuro
    boton.classList.remove('btn-light');
    boton.classList.add('btn-dark');
  } else {
    boton.innerHTML = '🌞'; // Sol para modo claro
    boton.classList.remove('btn-dark');
    boton.classList.add('btn-light');
  }
});