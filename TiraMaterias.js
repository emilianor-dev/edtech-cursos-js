export default class TiraMaterias {
  #alumno;
  #beca;
  #cursos;

  constructor(alumno, beca = 0) {
    this.#alumno = 'Sin nombre';
    this.alumno = alumno;
    this.#beca = 0;
    this.beca = beca;
    this.#cursos = [];
  }

  get alumno() {
    return this.#alumno;
  }

  set alumno(nombre) {
    if (nombre && nombre.trim() !== '') {
      this.#alumno = nombre.trim();
    } else {
      console.log('El nombre del alumno no puede estar vacío.');
    }
  }

  get beca() {
    return this.#beca;
  }

  set beca(porcentajeBeca) {
    if (porcentajeBeca >= 0 && porcentajeBeca <= 100) {
      this.#beca = porcentajeBeca;
    } else {
      console.log('La beca debe estar entre 0 y 100.');
    }
  }

  get cursos() {
    return this.#cursos;
  }

  inscribirCurso(curso) {
    for (let i = 0; i < this.#cursos.length; i++) {
      if (this.#cursos[i].clave === curso.clave) {
        console.log(`El curso ${curso.clave} ya está inscrito.`);
        return false;
      }
    }

    this.#cursos.push(curso);
    return true;
  }

  calcularTotalMensual() {
    let total = 0;

    for (let i = 0; i < this.#cursos.length; i++) {
      total += this.#cursos[i].calcularColegiatura(this.#beca);
    }

    return total;
  }
}

