import Curso from './Curso.js';

export default class BootcampVivo extends Curso {
  #costoMentoria

  // TODO (HU2): Usar super() para heredar clave, título y precioBase, y guardar cargoMentoria (cargo adicional fijo)
  constructor(clave, titulo, precioBase, costoMentoria) {
    super(clave, titulo, precioBase);
    this.#costoMentoria = 0;
    this.costoMentoria = costoMentoria;
  }

  get costoMentoria() {
    return this.#costoMentoria;
  }

  set costoMentoria(costoMentoria) {
    if (costoMentoria >= 0) {
      this.#costoMentoria = costoMentoria;
    } else {
      console.log("El costo de mentoria no debe ser negativo");
    }
  }

  // TODO (HU2/HU3): Sumar cargoMentoria a precioBase y aplicar porcentajeBeca sobre el costo correspondiente
  calcularColegiatura(porcentajeBeca) {
    return super.calcularColegiatura(porcentajeBeca) + this.#costoMentoria;
  }
}