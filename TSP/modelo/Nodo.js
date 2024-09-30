export class Nodo {
  #limiteInferior = 0
  #parejasConsideradas = []
  #parejasNoConsideradas = []

  constructor(limiteInferior, parejasConsideradas = [], parejasNoConsideradas = []) {
    this.#limiteInferior = limiteInferior
    this.#parejasConsideradas = parejasConsideradas
    this.#parejasNoConsideradas = parejasNoConsideradas
  }

  static equals(a, b) {
    return a.getLimiteInferior() === b.getLimiteInferior() &&
      JSON.stringify(a.getParejasConsideradas()) === JSON.stringify(b.getParejasConsideradas()) &&
      JSON.stringify(a.getParejasNoConsideradas()) === JSON.stringify(b.getParejasNoConsideradas())
  }

  getLimiteInferior() {
    return this.#limiteInferior
  }

  getParejasConsideradas() {
    return this.#parejasConsideradas
  }

  getParejasNoConsideradas() {
    return this.#parejasNoConsideradas
  }

  setLimiteInferior(limite) {
    this.#limiteInferior = limite
  }
}