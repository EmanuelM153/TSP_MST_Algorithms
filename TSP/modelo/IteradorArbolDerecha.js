export class IteradorArbolDerecha {
  #arbol = undefined
  #posicion = 0

  constructor(arbol, inicio = 0) {
    this.#arbol = arbol
    this.#posicion = inicio
  }

  tieneSiguiente() {
    const siguientePos = 2 * this.#posicion + 2
    return this.#arbol.getNodo(siguientePos) != undefined
  }

  siguiente() {
    const nuevaPos = 2 * this.#posicion + 2
    this.#posicion = nuevaPos
    return this.#arbol.getNodo(nuevaPos)
  }

  getPosicion() {
    return this.#posicion
  }

  getArbol() {
    return this.#arbol
  }

  setPosicion(posicion) {
    this.#posicion = posicion
  }
}