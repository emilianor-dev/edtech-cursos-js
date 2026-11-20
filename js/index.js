import Curso from './models/Curso.js';
import CursoGrabado from './models/CursoGrabado.js';
import BootcampVivo from './models/BootcampVivo.js';
import TiraMaterias from './models/TiraMaterias.js';

const resultadosPruebas = [];

function registrarPrueba(titulo, detalle) {
  const linea = `[QA] ${titulo}: ${detalle}`;
  resultadosPruebas.push(linea);
  console.log(linea);
}

// 1. CATÁLOGO DE CURSOS (HU1 y HU2)
const cursoJS = new CursoGrabado('JS-101', 'JavaScript Moderno', 1000);
const cursoPython = new CursoGrabado('PY-102', 'Python para Ciencia de Datos', 1200);
const bootcampIA = new BootcampVivo('BC-201', 'Bootcamp IA en Vivo', 2000, 500);

const catalogo = [cursoJS, cursoPython, bootcampIA];

console.log('--- CATÁLOGO INICIALIZADO ---');
for (let i = 0; i < catalogo.length; i++) {
  console.log(catalogo[i].clave, '|', catalogo[i].titulo, '| Base: $' + catalogo[i].precioBase);
}

// 2. INSCRIPCIÓN INICIAL Y CÁLCULO MENSUAL (HU3 y HU4)
let tiraAlumno = new TiraMaterias('Sofía Martínez', 50);
tiraAlumno.inscribirCurso(cursoJS);
tiraAlumno.inscribirCurso(bootcampIA);

// Intento de curso duplicado (debe rechazarse)
const intentoDuplicado = tiraAlumno.inscribirCurso(cursoJS);
registrarPrueba(
  'Curso duplicado (JS-101)',
  `Resultado inscripción repetida = ${intentoDuplicado} | Cursos inscritos actuales = ${tiraAlumno.cursos.length}`
);

console.log('--- TIRA DE MATERIAS ---');
console.log(
  `Alumno: ${tiraAlumno.alumno} | Beca: ${tiraAlumno.beca}% | Total mensual: $${tiraAlumno.calcularTotalMensual()}`
);

// 3. PRUEBAS DE CASOS BORDE EN BECAS Y PRECIOS
const bordesBeca = [-1, 0, 100, 101];

for (let i = 0; i < bordesBeca.length; i++) {
  const valorBeca = bordesBeca[i];
  const tiraPrueba = new TiraMaterias(`Prueba Beca ${valorBeca}`, valorBeca);
  tiraPrueba.inscribirCurso(cursoJS);

  if (valorBeca >= 0 && valorBeca <= 100) {
    registrarPrueba(
      `Beca ${valorBeca}% (válida)`,
      `Guardada como ${tiraPrueba.beca}% | Total curso $1000 -> $${tiraPrueba.calcularTotalMensual()}`
    );
  } else {
    registrarPrueba(
      `Beca ${valorBeca}% (inválida)`,
      `Rechazada por setter | Valor seguro asignado: ${tiraPrueba.beca}%`
    );
  }
}

const cursoNegativo = new CursoGrabado('ERR-01', 'Curso Precio Negativo', -500);
registrarPrueba(
  'Precio base negativo (-500)',
  `Rechazado por setter | Precio almacenado: $${cursoNegativo.precioBase}`
);

// 4. REFERENCIAS AL DOM (conecta con los IDs de Fernando)
const inputAlumno = document.getElementById('input-alumno');
const inputBeca = document.getElementById('input-beca');
const btnAplicarBeca = document.getElementById('btn-aplicar-beca');
const btnReiniciar = document.getElementById('btn-reiniciar-tira');
const elMensaje = document.getElementById('mensaje-estado');

const elCatalogo = document.getElementById('catalogo-cursos');
const elTira = document.getElementById('tira-materias');
const elTotal = document.getElementById('total-mensual');
const elPruebas = document.getElementById('pruebas-bordes');

function mostrarMensaje(texto) {
  if (elMensaje) {
    elMensaje.textContent = texto;
  }
}

function renderCatalogo() {
  if (!elCatalogo) return;

  elCatalogo.innerHTML = '';
  const lista = document.createElement('ul');

  for (let i = 0; i < catalogo.length; i++) {
    const c = catalogo[i];
    const item = document.createElement('li');
    const info = document.createElement('span');

    let detallePrecio = `Base: $${c.precioBase}`;
    if (c.costoMentoria !== undefined) {
      detallePrecio += ` + $${c.costoMentoria} mentoría`;
    }
    info.textContent = `${c.clave} - ${c.titulo} (${detallePrecio}) `;

    const boton = document.createElement('button');
    boton.type = 'button';
    boton.textContent = 'Inscribir';

    boton.addEventListener('click', function () {
      const agregado = tiraAlumno.inscribirCurso(c);
      if (agregado) {
        mostrarMensaje(`Curso ${c.clave} inscrito correctamente.`);
      } else {
        mostrarMensaje(`No se puede inscribir ${c.clave}: ya está en la tira de materias.`);
      }
      renderTira();
    });

    item.appendChild(info);
    item.appendChild(boton);
    lista.appendChild(item);
  }

  elCatalogo.appendChild(lista);
}

function renderTira() {
  if (elTira) {
    let htmlTira = '';

    for (let i = 0; i < tiraAlumno.cursos.length; i++) {
      const c = tiraAlumno.cursos[i];
      htmlTira += `
        <tr>
          <td>${c.clave}</td>
          <td>${c.titulo}</td>
          <td>$${c.calcularColegiatura(tiraAlumno.beca)}</td>
        </tr>
      `;
    }

    if (tiraAlumno.cursos.length === 0) {
      htmlTira = '<tr><td colspan="3">No hay cursos inscritos todavía.</td></tr>';
    }

    elTira.innerHTML = htmlTira;
  }

  if (elTotal) {
    const totalMensual = tiraAlumno.calcularTotalMensual();
    elTotal.innerHTML = `
      <p><strong>Alumno:</strong> ${tiraAlumno.alumno} | <strong>Beca:</strong> ${tiraAlumno.beca}%</p>
      <p><strong>Total a pagar:</strong> $${totalMensual}</p>
    `;
  }
}

function renderPruebas() {
  if (!elPruebas) return;

  let htmlPruebas = '<ul>';
  for (let i = 0; i < resultadosPruebas.length; i++) {
    htmlPruebas += `<li>${resultadosPruebas[i]}</li>`;
  }
  htmlPruebas += '</ul>';
  elPruebas.innerHTML = htmlPruebas;
}

// 5. EVENTOS DE INTERACCIÓN
if (btnAplicarBeca && inputBeca) {
  btnAplicarBeca.addEventListener('click', function () {
    if (inputBeca.value.trim() === '') {
      mostrarMensaje('Ingresa un porcentaje de beca entre 0 y 100.');
      return;
    }

    const nuevaBeca = Number(inputBeca.value);
    tiraAlumno.beca = nuevaBeca;

    if (nuevaBeca >= 0 && nuevaBeca <= 100) {
      mostrarMensaje(`Beca actualizada a ${tiraAlumno.beca}%.`);
    } else {
      mostrarMensaje(
        `Beca inválida (${nuevaBeca}%): rechazada por el setter. Se mantiene en ${tiraAlumno.beca}%.`
      );
      inputBeca.value = tiraAlumno.beca;
    }

    renderTira();
  });
}

if (btnReiniciar && inputAlumno && inputBeca) {
  btnReiniciar.addEventListener('click', function () {
    const nombre = inputAlumno.value.trim();
    if (nombre === '') {
      mostrarMensaje('Escribe el nombre del alumno para crear una nueva tira.');
      return;
    }

    const becaInicial = inputBeca.value.trim() === '' ? 0 : Number(inputBeca.value);
    tiraAlumno = new TiraMaterias(nombre, becaInicial);
    inputBeca.value = tiraAlumno.beca;

    mostrarMensaje(`Nueva tira iniciada para ${tiraAlumno.alumno} (beca: ${tiraAlumno.beca}%).`);
    renderTira();
  });
}

// 6. RENDER INICIAL
renderCatalogo();
renderTira();
renderPruebas();

