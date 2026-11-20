export default class Curso {
  #clave
  #titulo
  #precioBase

  constructor(clave, titulo, precioBase) {
    this.#clave = clave
    this.#titulo = titulo
    this.#precioBase = 0
    this.precioBase = precioBase
  }

  get clave(){
    return this.#clave
  }

  get titulo(){
    return this.#titulo
  }

  get precioBase(){
    return  this.#precioBase
  }

  set clave(clave){
    this.#clave = clave
  }

  set titulo(titulo){
    this.#titulo = titulo
  }

  set precioBase(precioBase){
    if(precioBase >= 0){
      this.#precioBase = precioBase
    }else{
      console.log("El precio base no debe de ser negativo")
    }
  }

  calcularColegiatura(porcentajeBeca = 0) {
    if(porcentajeBeca >= 0 && porcentajeBeca <= 100){
      return this.#precioBase - (this.#precioBase * porcentajeBeca / 100)
    }else{
      console.log("El porcentaje de beca debe ser entre 0 y 100")
      return this.#precioBase
    }
  }
}
