export class IteradorArbolCamino {
  #arbol
  #camino

  constructor(arbol, destino) {
    this.#arbol = arbol
    this.#camino = this.encontrarCamino(destino)
  }

  encontrarCamino(destino) {
    const camino = [destino]

    var posicion = destino
    while (posicion > 2) {
      const caminoDerecho = posicion % 2 === 0
      if (caminoDerecho)
        posicion = (posicion - 2) / 2
      else
        posicion = (posicion - 1) / 2
      camino.splice(0, 0, posicion)
    }

    return camino
  }

  tieneSiguiente() {
    var siguiente = -1

    const posicion = this.#camino[0]
    if (this.#arbol.getNodo(posicion) != undefined) {
      const direccionDerecha = posicion % 2 === 0
      if (direccionDerecha) 
        siguiente = 1
      else
        siguiente = 0
    }

    return siguiente
  }

  siguiente() {
    const posicion = this.#camino.splice(0, 1)[0]
    return this.#arbol.getNodo(posicion)
  }
}