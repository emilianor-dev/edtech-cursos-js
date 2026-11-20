import Curso from './Curso.js';
import TiraMaterias from './TiraMaterias.js';

const tira = new TiraMaterias('Ana', 20);
const curso = new Curso('JS-101', 'JavaScript', 1000);

const primeraInscripcion = tira.inscribirCurso(curso);
const segundaInscripcion = tira.inscribirCurso(curso);
const total = tira.calcularTotalMensual();

console.log('Primera inscripción:', primeraInscripcion); // true
console.log('Segunda inscripción:', segundaInscripcion); // false
console.log('Total mensual:', total); // 800
console.log('Cantidad de cursos:', tira.cursos.length); // 1

const app = document.getElementById('app');

app.innerHTML = `
  <p>Alumno: ${tira.alumno}</p>
  <p>Beca: ${tira.beca}%</p>
  <p>Cursos inscritos: ${tira.cursos.length}</p>
  <p>Total mensual: $${total}</p>
`;