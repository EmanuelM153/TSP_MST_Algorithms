import { TSP } from "./TSP"
import { ArbolBinario } from "./ArbolBinario"
import { Nodo } from "./Nodo"
import { RutaOperaciones } from "./RutaOperaciones"

const arbol = new ArbolBinario(new Nodo(0, [], []))
const iterador = arbol.crearIteradorDerecha()
const matrizAdyancencia = [
  [Infinity, 27, 43, 16, 30, 26],
  [7, Infinity, 16, 1, 30, 25],
  [20, 13, Infinity, 35, 5, 0],
  [21, 16, 25, Infinity, 18, 18],
  [12, 46, 27, 48, Infinity, 5],
  [23, 5, 5, 9, 5, Infinity]
]

const tsp = new TSP(matrizAdyancencia, iterador)

test("La reduccion funciona", () => {
  const nuevaMatriz = [
    [Infinity, 11, 27, 0, 14, 10],
    [1, Infinity, 15, 0, 29, 24],
    [15, 13, Infinity, 35, 5, 0],
    [0, 0, 9, Infinity, 2, 2],
    [2, 41, 22, 43, Infinity, 0],
    [13, 0, 0, 4, 0, Infinity]
  ]

  expect(arbol.getNodo(0).getLimiteInferior()).toBe(48)
  expect(tsp.getMatriz()).toEqual(nuevaMatriz)
})

// agregarSubconjuntoExclusion pruebas
test("agregar al subconjunto exclusion funciona", () => {
  tsp.agregarSubconjuntoExclusion()
  const nodo = arbol.getNodo(1)
  expect(nodo.getLimiteInferior()).toBe(58)
  expect(nodo.getParejasNoConsideradas()).toEqual([[0, 3]])
})


// obtenerCaminosPosibles pruebas
test("Obtener los caminos posibles de la matriz funciona", () => {
  expect(tsp.obtenerCaminosPosibles()).toEqual([
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5],
    [1, 0], [1, 2], [1, 3], [1, 4], [1, 5],
    [2, 0], [2, 1], [2, 3], [2, 4], [2, 5],
    [3, 0], [3, 1], [3, 2], [3, 4], [3, 5],
    [4, 0], [4, 1], [4, 2], [4, 3], [4, 5],
    [5, 0], [5, 1], [5, 2], [5, 3], [5, 4]
  ])
})


// agregarSubconjuntoInclusion pruebas
test("agregar al subconjunto inclusion funciona", () => {
  tsp.agregarSubconjuntoInclusion()
  const nodo = arbol.getNodo(2)
  expect(nodo.getLimiteInferior()).toBe(49)
  expect(nodo.getParejasConsideradas()).toEqual([[0, 3]])
  expect(tsp.getRuta()).toEqual([[0, 3]])
  expect(nodo.getParejasNoConsideradas()).toEqual([[3, 0]])
})


// otra prueba
test("prueba de otro nodo en el arbol", () => {
  tsp.agregarSubconjuntoExclusion()
  var nodo = arbol.getNodo(5)
  expect(nodo.getLimiteInferior()).toBe(65)
  expect(nodo.getParejasNoConsideradas()).toEqual([[1, 0]])

  tsp.agregarSubconjuntoInclusion()
  nodo = arbol.getNodo(6)
  expect(nodo.getLimiteInferior()).toBe(51)
  expect(nodo.getParejasConsideradas()).toEqual([[1, 0]])
  expect(tsp.getRuta()).toEqual([[0, 3], [1, 0]])
  expect(nodo.getParejasNoConsideradas()).toEqual([[0, 1], [3, 1]])
})


// prueba agregarFaltante
test("agregar el nodo faltante funciona", () => {
  const n = matrizAdyancencia.length
  while (tsp.getRuta().length != (n - 2)) {
    tsp.agregarSubconjuntoExclusion()
    tsp.agregarSubconjuntoInclusion()
  }

  tsp.agregarSubconjuntoExclusion()

  tsp.agregarFaltante()
  const nodo = arbol.getNodo(iterador.getPosicion())

  expect(nodo.getLimiteInferior()).toBe(63)
  expect(nodo.getParejasConsideradas()).toEqual([[3, 2], [5, 1]])
  expect(nodo.getParejasNoConsideradas()).toEqual([])
  expect(RutaOperaciones.ordenarConexiones(tsp.getRuta())).toEqual([[0, 3], [3, 2], [2, 4], [4, 5], [5, 1], [1, 0]])
})


// prueba setPosicion
test("resetear la posicion funciona", () => {
  const tspPrueba = new TSP(matrizAdyancencia, arbol.crearIteradorDerecha())
  tspPrueba.setPosicion(iterador.getPosicion())
  expect(tsp.getMatriz()).toEqual(tspPrueba.getMatriz())
  expect(RutaOperaciones.ordenarConexiones(tspPrueba.getRuta())).toEqual([[0, 3], [3, 2], [2, 4], [4, 5], [5, 1], [1, 0]])
})