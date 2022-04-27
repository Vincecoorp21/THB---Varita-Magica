//console.log(document.querySelectorAll('a'));

document.querySelector('html').addEventListener('click', desactivar);

function desactivar() {
  let evento = window.event || e;
  evento.preventDefault();
}

//EVENTO 2****************************************
// CAMBIA IMAGENES AL HACER CLICK*******************

let images = document.getElementsByTagName('img');

console.log(images);

// for (let pic of images) {
//   pic.addEventListener('click', () => {
//     pic.setAttribute(
//       'src',
//       '/fundamentos-de-programacion-pp-varita-magica/assets/magic-1.gif'
//     );
//     // pic.src = random_imgs(array_imgs);
//   });
// }

//*******************************+METER IMAGEN CON RANDOM AL HACER CLICK****/

for (let pic of images) {
  pic.addEventListener('click', () => {
    // pic.setAttribute('src', '/assets/magic-1.gif');
    pic.src = random_imgs(array_imgs);
  });
}

// CAMBIAR PÁRRAFOS AL HACER CLICK********************

let parrafos = document.getElementsByTagName('p');

console.log(parrafos);

for (let parrafo of parrafos) {
  parrafo.addEventListener('click', () => {
    // parrafo.setAttribute('style', 'background-color:red');
    parrafo.style.backgroundColor = 'red';
    parrafo.style.color = 'orange';
  });
}

//CAMBIAR ARTICLE or SECTION AL HACER CLICK*******************

let articulos = document.getElementsByTagName('article');

console.log(articulos);

for (let articulo of articulos) {
  articulo.addEventListener('click', () => {
    articulo.style.backgroundColor = 'green';
  });
}

let secciones = document.getElementsByTagName('section');

console.log(secciones);

for (let seccion of secciones) {
  seccion.addEventListener('click', () => {
    seccion.style.backgroundColor = random_paleta(paleta);
  });
}

//EVENTO 3**********************************************CAMBIAR IMAGEN AL PASAR POR ENCIMA*********************
for (let pic of images) {
  pic.addEventListener('mouseover', function handleMouseOver() {
    pic.setAttribute('src', '/assets/magic-2.gif');
  });
}
// for (let pic of images) {
//   pic.addEventListener('mouseout', function handleMouseOut() {
//     pic.src = random_imgs(array_imgs)  ;
//   });
// }

//*********CAMBIAR PARRAFO AL PASAR POR ENCIMA********************/

/********PALETA ALEATORIA DE COLORES********/
for (let parrafo of parrafos) {
  parrafo.addEventListener('mouseover', () => {
    // parrafo.setAttribute('style', 'background-color:red');
    parrafo.style.backgroundColor = random_paleta(paleta);
    parrafo.style.color = 'white';
  });
}
for (let parrafo of parrafos) {
  parrafo.addEventListener('mouseout', () => {
    // parrafo.setAttribute('style', 'background-color:red');
    parrafo.style.backgroundColor = '';
    parrafo.style.color = '';
  });
}

//CAMBIAR ARTICLE or SECTION AL PASAR POR ENCIMA*********************

for (let articulo of articulos) {
  articulo.addEventListener('mouseover', () => {
    articulo.style.backgroundColor = 'purple';
  });
}
for (let articulo of articulos) {
  articulo.addEventListener('mouseout', () => {
    articulo.style.backgroundColor = '';
  });
}

for (let seccion of secciones) {
  seccion.addEventListener('mouseover', () => {
    seccion.style.backgroundColor = 'lightblue';
  });
}

for (let seccion of secciones) {
  seccion.addEventListener('mouseout', () => {
    seccion.style.backgroundColor = '';
  });
}

///PREMIUM****************************************************************/
const colors = ['red', 'blue', 'green'];

function random_color(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

console.log('Color Aleatorio');

console.log(random_color(colors));

//CREAR ARRAY DE IMÁGENES*************************************************

const array_imgs = [];

array_imgs[0] = new Image();
array_imgs[0].src = '/assets/magic-1.gif';

array_imgs[1] = new Image();
array_imgs[1].src = '/assets/magic-2.gif';

array_imgs[2] = new Image();
array_imgs[2].src = '/assets/magic-3.gif';
array_imgs[3] = new Image();
array_imgs[3].src = '/assets/magic-4.gif';

array_imgs[4] = new Image();
array_imgs[4].src = '/assets/magic-5.gif';

array_imgs[5] = new Image();
array_imgs[5].src = '/assets/magic-6.gif';

console.log(array_imgs);

//SACAR IMAGEN ALEATORIA*******************************************

function random_imgs(array_imgs) {
  return array_imgs[Math.floor(Math.random() * array_imgs.length)];
}

console.log('Imagen Aleatoria');
console.log(random_imgs(array_imgs));

/*******CREAR ARRA PALETA COLORES ************************/

let paleta = ['#cb997e', '#ddbea9', '#ffe8d6', '#b7b7a4', '#a5a58d'];

function random_paleta(paleta) {
  return paleta[Math.floor(Math.random() * paleta.length)];
}

console.log('Paleta Aleatoria');
console.log(random_paleta(paleta));

// CAMBIAR IMAGEN

// let img = document.querySelectorAll('img');
// img.addEventListener('click', cambiaImg);

//console.log(img);

// let img = document.getElementsByTagName()
