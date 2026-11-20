export default class TiraMaterias {
  // TODO (HU4): Atributos alumno, beca (0 a 100) y arreglo cursos = []
  constructor(alumno, beca = 0) {
    this.alumno = alumno;
    this.beca = beca;
    this.cursos = [];
  }

  // TODO (Criterio obligatorio): Validar mediante setter que el porcentaje de beca esté estrictamente entre 0 y 100
  // TODO (HU4): inscribirCurso(curso) -> usar ciclo for para detectar duplicados y evitar inscribir el mismo curso dos veces
  // TODO (HU4): calcularTotalMensual() -> usar ciclo for para sumar el total mensual de la colegiatura
}
