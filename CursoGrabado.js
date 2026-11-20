import Curso from './Curso.js';

export default class CursoGrabado extends Curso {
  constructor(clave, titulo, precioBase) {
    super(clave, titulo, precioBase);
  }

  calcularColegiatura(porcentajeBeca) {
    if (porcentajeBeca < 0 || porcentajeBeca > 100) {
      console.log('El porcentaje de beca debe estar entre 0 y 100.')
      return this.precioBase
    }
      
      return this.precioBase - (this.precioBase * porcentajeBeca / 100);
  }
}
