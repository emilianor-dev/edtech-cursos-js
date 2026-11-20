export default class TiraMaterias {
  constructor(alumno, beca = 0) {
    this.alumno = alumno;
    this.beca = beca;
    this.cursos = [];
  }

  get beca() {
    return this._beca;
  }

  set beca(porcentajeBeca) {
    if (porcentajeBeca >= 0 && porcentajeBeca <= 100) {
      this._beca = porcentajeBeca;
    } else {
      console.log("La beca debe estar entre 0 y 100");
    }
  }

  inscribirCurso(curso) {
    for (let i = 0; i < this.cursos.length; i++) {
      if (this.cursos[i].clave === curso.clave) {
        console.log(`El curso ${curso.clave} ya está inscrito`);
        return false;
      }
    }

    this.cursos.push(curso);
    return true;
  }

  calcularTotalMensual() {
    let total = 0;

    for (let i = 0; i < this.cursos.length; i++) {
      total += this.cursos[i].calcularColegiatura(this.beca);
    }

    return total;
  }
}