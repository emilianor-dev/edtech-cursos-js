import Curso from './Curso.js';

export default class BootcampVivo extends Curso {
  // TODO (HU2): Usar super() para heredar clave, título y precioBase, y guardar cargoMentoria (cargo adicional fijo)
  constructor(clave, titulo, precioBase, cargoMentoria) {
    super(clave, titulo, precioBase);
    this.cargoMentoria = cargoMentoria;
  }

  // TODO (HU2/HU3): Sumar cargoMentoria a precioBase y aplicar porcentajeBeca sobre el costo correspondiente
  calcularColegiatura(porcentajeBeca) {
    return 0;
  }
}
