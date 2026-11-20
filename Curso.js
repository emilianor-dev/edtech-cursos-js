export default class Curso {
  #clave
  #titulo
  #precioBase
  // TODO (HU1): Registrar cada curso con su clave, título y precio base mensual
  // TODO: Agregar getters y setters (validar que precioBase no sea negativo)
  constructor(clave, titulo, precioBase) {
    this.#clave = clave
    this.#titulo = titulo
    this.#precioBase = 0
    this.setPrecio(precioBase)
  }

  getClave(){
    return this.#clave
  }

  getTitulo(){
    return this.#titulo
  }

  getPrecio(){
    return  this.#precioBase
  }

  setClave(clave){
    this.#clave = clave
  }

  setTitulo(titulo){
    this.#titulo = titulo
  }

  setPrecio(precioBase){
    if(precioBase >= 0){
      this.#precioBase = precioBase
    }else{
      console.log("El precio base no debe de ser negativo")
    }
  }

  // TODO (HU3): Calcular el monto final aplicando el porcentaje de beca (0% a 100%)
  calcularColegiatura(porcentajeBeca = 0) {
    if(porcentajeBeca >= 0 && porcentajeBeca <= 100){
      return this.#precioBase - (this.#precioBase * porcentajeBeca / 100)
    }else{
      console.log("El porcentaje de beca debe ser entre 0 y 100")
    }
  }
}
