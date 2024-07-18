export default class Cl_personas {
  constructor(nombre, sexo, edad) {
    this.nombre = nombre;
    this.sexo = sexo;
    this.edad = edad;
  }

  set edad(edad) {
    this._edad = edad;
  }
  get edad() {
    return this._edad;
  }
}
