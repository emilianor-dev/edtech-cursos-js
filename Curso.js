export default class Curso {
  // TODO (HU1): Registrar cada curso con su clave, título y precio base mensual
  // TODO: Agregar getters y setters (validar que precioBase no sea negativo)
  constructor(clave, titulo, precioBase) {
    this.clave = clave;
    this.titulo = titulo;
    this.precioBase = precioBase;
  }

  // TODO (HU3): Calcular el monto final aplicando el porcentaje de beca (0% a 100%)
  calcularColegiatura(porcentajeBeca = 0) {
    return this.precioBase;
  }
}
