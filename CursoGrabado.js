import Curso from './Curso.js';

export default class CursoGrabado extends Curso {
  // TODO (HU2): Usar super() para heredar clave, título y precioBase
  constructor(clave, titulo, precioBase) {
    super(clave, titulo, precioBase);
  }

  // TODO (HU2/HU3): Acceso asíncrono sin costo extra; aplicar porcentajeBeca sobre precioBase
  calcularColegiatura(porcentajeBeca) {
    return 0;
  }
}
