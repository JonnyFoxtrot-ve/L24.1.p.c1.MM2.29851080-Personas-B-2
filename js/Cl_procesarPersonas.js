export default class procesarPersonas {
  constructor() {
    this.contar = 0;
    this.acum = 0;
    this.acumeMM = 0;
  }

  edadP() {
    return this.acum / this.contar;
  }
  edadMM() {
    return this.acumeMM;
  }
  procesarPersonas(p) {
    let edad = 18;
    this.contar++;
    this.acum += p.edad;
    if (p.sexo === "F" && p.edad > 18) {
      edad = p.edad;
      this.acumeMM = p.edad;
    }
  }
}
