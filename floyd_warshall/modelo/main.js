import { Grafo } from "./Grafo"
import { FloydWarshall } from "./FloydWarshall"

export class MainFloydWarshall {
  static encontrarRutasMinimas(matrizAdyacencia) {
    const grafo = new Grafo(matrizAdyacencia)
    const floydWarshall = new FloydWarshall(grafo)
    floydWarshall.inicializarMatrices()
    floydWarshall.ejecutar()

    return floydWarshall
  }
}