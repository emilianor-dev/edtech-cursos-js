import CursoGrabado from './CursoGrabado.js';
import BootcampVivo from './BootcampVivo.js';
import TiraMaterias from './TiraMaterias.js';

const resultadosPruebas = [];

function registrarPrueba(titulo, detalle) {
  const linea = `[QA] ${titulo}: ${detalle}`;
  resultadosPruebas.push(linea);
  console.log(linea);
}

// ==========================================
// 1. CATÁLOGO DE CURSOS (HU1 y HU2)
// ==========================================
const cursoJS = new CursoGrabado('JS-101', 'JavaScript Moderno', 1000);
const cursoPython = new CursoGrabado('PY-102', 'Python para Ciencia de Datos', 1200);
const bootcampIA = new BootcampVivo('BC-201', 'Bootcamp IA en Vivo', 2000, 500);

const catalogo = [cursoJS, cursoPython, bootcampIA];

console.log('--- CATÁLOGO INICIALIZADO ---');
for (let i = 0; i < catalogo.length; i++) {
  console.log(catalogo[i].clave, '|', catalogo[i].titulo, '| Base: $' + catalogo[i].precioBase);
}

// ==========================================
// 2. INSCRIPCIÓN Y CÁLCULO MENSUAL (HU3 y HU4)
// ==========================================
const tiraAlumno = new TiraMaterias('Sofía Martínez', 50);
tiraAlumno.inscribirCurso(cursoJS);
tiraAlumno.inscribirCurso(bootcampIA);

// Intento de curso duplicado (debe rechazarse)
const intentoDuplicado = tiraAlumno.inscribirCurso(cursoJS);
registrarPrueba(
  'Curso duplicado (JS-101)',
  `Resultado inscripción repetida = ${intentoDuplicado} | Cursos inscritos actuales = ${tiraAlumno.cursos.length}`
);

const totalMensual = tiraAlumno.calcularTotalMensual();
console.log('--- TIRA DE MATERIAS ---');
console.log(`Alumno: ${tiraAlumno.alumno} | Beca: ${tiraAlumno.beca}% | Total mensual: $${totalMensual}`);

// ==========================================
// 3. PRUEBAS DE CASOS BORDE EN BECAS Y PRECIOS
// ==========================================
const bordesBeca = [-1, 0, 100, 101];

for (let i = 0; i < bordesBeca.length; i++) {
  const valorBeca = bordesBeca[i];
  try {
    const tiraPrueba = new TiraMaterias(`Prueba Beca ${valorBeca}`, valorBeca);
    tiraPrueba.inscribirCurso(cursoJS);
    registrarPrueba(
      `Beca ${valorBeca}%`,
      `Aceptada con valor ${tiraPrueba.beca}% | Total curso $1000 -> $${tiraPrueba.calcularTotalMensual()}`
    );
  } catch (error) {
    registrarPrueba(`Beca ${valorBeca}%`, `Rechazada correctamente -> ${error.message}`);
  }
}

try {
  const cursoNegativo = new CursoGrabado('ERR-01', 'Curso Precio Negativo', -500);
  registrarPrueba('Precio base negativo (-500)', `Precio almacenado = $${cursoNegativo.precioBase}`);
} catch (error) {
  registrarPrueba('Precio base negativo (-500)', `Rechazado correctamente -> ${error.message}`);
}

// ==========================================
// 4. RENDER EN HTML (conecta con los IDs de Fernando)
// ==========================================
const elCatalogo = document.getElementById('catalogo-cursos');
const elTira = document.getElementById('tira-materias');
const elTotal = document.getElementById('total-mensual');
const elPruebas = document.getElementById('pruebas-bordes');

if (elCatalogo) {
  let htmlCatalogo = '<ul>';
  for (let i = 0; i < catalogo.length; i++) {
    const c = catalogo[i];
    htmlCatalogo += `<li><strong>${c.clave}</strong> - ${c.titulo} (Base: $${c.precioBase})</li>`;
  }
  htmlCatalogo += '</ul>';
  elCatalogo.innerHTML = htmlCatalogo;
}

if (elTira) {
  let htmlTira = `<p><strong>Alumno:</strong> ${tiraAlumno.alumno} | <strong>Beca:</strong> ${tiraAlumno.beca}%</p><ul>`;
  for (let i = 0; i < tiraAlumno.cursos.length; i++) {
    const c = tiraAlumno.cursos[i];
    htmlTira += `<li>${c.clave} - ${c.titulo}: $${c.calcularColegiatura(tiraAlumno.beca)}</li>`;
  }
  htmlTira += '</ul>';
  elTira.innerHTML = htmlTira;
}

if (elTotal) {
  elTotal.textContent = `$${totalMensual}`;
}

if (elPruebas) {
  let htmlPruebas = '<ul>';
  for (let i = 0; i < resultadosPruebas.length; i++) {
    htmlPruebas += `<li>${resultadosPruebas[i]}</li>`;
  }
  htmlPruebas += '</ul>';
  elPruebas.innerHTML = htmlPruebas;
}
