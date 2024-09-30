const TSP = require("./TSP")
const ArbolBinario = require("./ArbolBinario")
const Nodo = require("./Nodo")
const RutaOperaciones = require("./RutaOperaciones")
const matprint = require("./matprint")

class Main {
  static encontrarRutaOptima(matrizAdyacencia) {
    const n = matrizAdyacencia.length
    const arbol = new ArbolBinario(new Nodo(0, [], []))
    const iterador = arbol.crearIteradorDerecha()
    const tsp = new TSP(matrizAdyacencia, iterador)

    var rutaOptima = []
    var limiteMinimo = Infinity
    var esLimiteMinimo = false
    var posicionTerminalMenor = 0

    while (!esLimiteMinimo) {
      let limiteInferior = arbol.getNodo(posicionTerminalMenor).getLimiteInferior()

      while (tsp.getRuta().length != (n - 2) && limiteInferior < limiteMinimo) {
        tsp.agregarSubconjuntoExclusion()
        tsp.agregarSubconjuntoInclusion()
        const nodo = arbol.getNodo(iterador.getPosicion())
        limiteInferior = nodo.getLimiteInferior()
      }

      if (limiteInferior < limiteMinimo) {
        tsp.agregarSubconjuntoExclusion()
        tsp.agregarFaltante()
        limiteInferior = arbol.getNodo(iterador.getPosicion()).getLimiteInferior()
        rutaOptima = [...tsp.getRuta()]
      }

      posicionTerminalMenor = arbol.buscarTerminalMenor(limiteInferior)
      const hayTerminalMenor = posicionTerminalMenor != -1
      if (hayTerminalMenor) {
        tsp.setPosicion(posicionTerminalMenor)
        limiteMinimo = limiteInferior
      } else {
        esLimiteMinimo = true
      }
    }

    return [RutaOperaciones.ordenarConexiones(rutaOptima), arbol]
  }
}

module.exports = Main