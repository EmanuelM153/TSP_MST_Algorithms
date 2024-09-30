import { MatrizOperaciones } from "../modelo/MatrizOperaciones"
import { Nodo } from "../modelo/Nodo"
import { reducirMatriz } from "../modelo/reducirMatriz"
import { obtenerThetaMayor } from "../modelo/obtenerThetaMayor"
import { RutaOperaciones } from "../modelo/RutaOperaciones"
import { IteradorArbolCamino } from "../modelo/IteradorArbolCamino"

export class TSP {
  #arbol
  #matrizAdyacencia
  #matrizAdyacenciaOriginal
  #iterador
  #ruta

  constructor(matrizAdyacencia, iterador) {
    this.#matrizAdyacencia = matrizAdyacencia
    const reduccion = this.reducirMatriz()
    this.#matrizAdyacenciaOriginal = MatrizOperaciones.copiarMatriz(this.#matrizAdyacencia)
    this.#iterador = iterador
    this.#arbol = this.#iterador.getArbol()
    this.#arbol.getNodo(0).setLimiteInferior(reduccion)
    this.#ruta = []
  }

  reducirMatriz() {
    const [reduccion, matrizNueva] = reducirMatriz(this.#matrizAdyacencia)
    this.#matrizAdyacencia = matrizNueva
    return reduccion
  }

  agregarSubconjuntoExclusion() {
    const nodo = this.#arbol.getNodo(this.#iterador.getPosicion())
    const parExcluido = nodo.getParejasNoConsideradas()[0]
    var matriz = this.#matrizAdyacencia

    if (parExcluido != undefined)
      matriz = MatrizOperaciones.
          ponerInfinito(this.#matrizAdyacencia, parExcluido[0], parExcluido[1])

    const [thetaMayor, posicion] = obtenerThetaMayor(matriz)

    const posicionActual = this.#iterador.getPosicion()
    const limiteInferiorActual = this.#arbol.getNodo(posicionActual).getLimiteInferior()
    const theta = thetaMayor + limiteInferiorActual

    this.#arbol.agregarNodoIzquierda(posicionActual, new Nodo(theta, [], [posicion]));
  }

  agregarSubconjuntoInclusion() {
    const posicionActual = this.#iterador.getPosicion()
    const izquierdoParejaExclusion = this.#arbol.getHijoIzquierdo(posicionActual).getParejasNoConsideradas()[0]

    this.agregarCamino(izquierdoParejaExclusion)

    var parejasNoConsideradas = []

    const inversoParejaExclusion = [izquierdoParejaExclusion[1],
     izquierdoParejaExclusion[0]]
    parejasNoConsideradas.push(inversoParejaExclusion)
    this.#matrizAdyacencia = MatrizOperaciones.ponerInfinito(this.#matrizAdyacencia,
      inversoParejaExclusion[0], inversoParejaExclusion[1])

    const caminos = this.obtenerCaminosPosibles()
    parejasNoConsideradas = parejasNoConsideradas.concat(
      RutaOperaciones.obtenerCaminosSubRuta(this.#ruta, caminos))

    parejasNoConsideradas.forEach(par => {
      this.#matrizAdyacencia = MatrizOperaciones.ponerInfinito(this.#matrizAdyacencia,
        par[0], par[1])
    })

    this.agregarNodo([izquierdoParejaExclusion], parejasNoConsideradas)
  }

  agregarFaltante() {
    const posicionActual = this.#iterador.getPosicion()
    const izquierdoParejaExclusion = this.#arbol.getHijoIzquierdo(posicionActual).getParejasNoConsideradas()[0]

    this.agregarCamino(izquierdoParejaExclusion)

    const caminoFaltante = this.obtenerCaminosPosibles()[0]
    this.#ruta = RutaOperaciones.agregarPar(this.#ruta, caminoFaltante)

    this.agregarNodo([izquierdoParejaExclusion, caminoFaltante], [])
  }

  agregarCamino(camino) {
    this.#matrizAdyacencia = MatrizOperaciones.eliminarFila_Columna(this.#matrizAdyacencia, 
      camino[0], camino[1])
    this.#ruta = RutaOperaciones.agregarPar(this.#ruta, camino)
  }

  agregarNodo(parejasConsideradas, parejasNoConsideradas) {
    const posicionActual = this.#iterador.getPosicion()
    const limiteInferiorActual = this.#arbol.getNodo(posicionActual).getLimiteInferior()
    const reduccion = this.reducirMatriz()

    const nodo = new Nodo(reduccion + limiteInferiorActual, 
      parejasConsideradas, parejasNoConsideradas)
    this.#arbol.agregarNodoDerecha(posicionActual, nodo)
    this.#iterador.siguiente()
  }

  obtenerCaminosPosibles() {
    const caminosPosibles = []

    this.#matrizAdyacencia.forEach((fila, i) => {
      fila.forEach((e, j) => {
        if (e != Infinity) caminosPosibles.push([i, j])
      })
    })

    return caminosPosibles
  }

  getMatriz() {
    return this.#matrizAdyacencia
  }

  getRuta() {
    return this.#ruta
  }

  setPosicion(posicion) {
    this.#matrizAdyacencia = MatrizOperaciones.copiarMatriz(this.#matrizAdyacenciaOriginal)
    this.#iterador.setPosicion(posicion)
    this.#ruta = []

    const iteradorCamino = new IteradorArbolCamino(this.#arbol, posicion)
    let direccion
    while ((direccion = iteradorCamino.tieneSiguiente()) != -1) {
      const direccionDerecha = direccion === 1
      const nodo = iteradorCamino.siguiente()
      if (direccionDerecha) {
        const parIncluido = nodo.getParejasConsideradas()[0]
        this.#matrizAdyacencia = MatrizOperaciones.
          eliminarFila_Columna(this.#matrizAdyacencia, parIncluido[0], parIncluido[1])

        this.#ruta.push(...nodo.getParejasConsideradas())

        nodo.getParejasNoConsideradas().forEach(par => {
          this.#matrizAdyacencia = MatrizOperaciones.
            ponerInfinito(this.#matrizAdyacencia, par[0], par[1])
        })

        this.reducirMatriz()
      } 
    }
  }
}