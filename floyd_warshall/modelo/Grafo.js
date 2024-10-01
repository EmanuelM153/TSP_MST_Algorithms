export class Grafo {
  #matrizAdyacencia
  #numNodos

  constructor(matrizAdyacencia) {
    this.#matrizAdyacencia = matrizAdyacencia
    this.#numNodos = matrizAdyacencia.length
  }

  obtenerNumeroNodos() {
    return this.#numNodos
  }

  obtenerMatrizAdyacencia() {
    return this.#matrizAdyacencia
  }
}