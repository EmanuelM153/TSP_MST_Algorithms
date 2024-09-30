const IteradorArbolDerecha = require("./IteradorArbolDerecha")

class ArbolBinario {
  #arbol = []

  constructor(nodo) {
    this.#arbol[0] = nodo
  }

  crearIteradorDerecha() {
    return new IteradorArbolDerecha(this, 0)
  }

  esHoja(indice) {
    const nodoIzquierdo = this.getNodo(2 * indice + 1)
    const nodoDerecho = this.getNodo(2 * indice + 2)
    return nodoDerecho == undefined && nodoIzquierdo == undefined
  }

  buscarTerminalMenor(num = Infinity) {
    var posicionTerminalMenor = -1
    var menor = num

    let i = 1
    while (i < this.#arbol.length) {
      var nodoIzquierdo = this.#arbol[i]
      var nodoDerecho = this.#arbol[i + 1]

      if (nodoIzquierdo != undefined) {
        if (nodoIzquierdo.getLimiteInferior() < menor && this.esHoja(i)) {
          posicionTerminalMenor = i
          menor = nodoIzquierdo.getLimiteInferior()
        }
      }

      if (nodoDerecho != undefined) {
        if (nodoDerecho.getLimiteInferior() < menor && this.esHoja(i + 1)) {
          posicionTerminalMenor = i + 1
          menor = nodoDerecho.getLimiteInferior()
        }
      }

      i++
      if (i % 2 === 0) i += 2
    }

    return posicionTerminalMenor
  }

  getNodo(i) {
    return this.#arbol[i]
  }

  agregarNodoDerecha(indice, nodo) {
    this.#arbol[2 * indice + 2] = nodo
  }

  agregarNodoIzquierda(indice, nodo) {
    this.#arbol[2 * indice + 1] = nodo
  }

  getHijoIzquierdo(indice) {
    return this.#arbol[2 * indice + 1]
  }
}

module.exports = ArbolBinario