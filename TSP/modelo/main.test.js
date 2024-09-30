import { MainTSP } from "./main"
import { Nodo } from "./Nodo"
import { prueba0, prueba1, prueba2 } from "./pruebas"

test("El algoritmo funciona", () => {
  const [ruta, arbol] = MainTSP.encontrarRutaOptima(prueba0)
  expect(ruta).toEqual([[0, 3], [3, 2], [2, 4], [4, 5], [5, 1], [1, 0]])
  expect(Nodo.equals(arbol.getNodo(0), new Nodo(48, [], []))).toBe(true)
  expect(Nodo.equals(arbol.getNodo(1), new Nodo(58, [], [[0, 3]]))).toBe(true)
  expect(Nodo.equals(arbol.getNodo(3), new Nodo(67, [], [[5, 2]]))).toBe(true)
  expect(Nodo.equals(arbol.getNodo(4), new Nodo(63, [[5, 2]], [[2, 5]]))).toBe(true)

  expect(Nodo.equals(arbol.getNodo(2), new Nodo(49, [[0, 3]], [[3, 0]]))).toBe(true)
  expect(Nodo.equals(arbol.getNodo(5), new Nodo(65, [], [[1, 0]]))).toBe(true)
  expect(Nodo.equals(arbol.getNodo(6), new Nodo(51, [[1, 0]], [[0, 1], [3, 1]]))).toBe(true)
  expect(Nodo.equals(arbol.getNodo(13), new Nodo(73, [], [[4, 5]]))).toBe(true)
  expect(Nodo.equals(arbol.getNodo(14), new Nodo(56, [[4, 5]], [[5, 4]]))).toBe(true)
  expect(Nodo.equals(arbol.getNodo(29), new Nodo(64, [], [[2, 4]]))).toBe(true)
  expect(Nodo.equals(arbol.getNodo(30), new Nodo(63, [[2, 4]], [[4, 2], [5, 2]]))).toBe(true)
  expect(Nodo.equals(arbol.getNodo(61), new Nodo(Infinity, [], [[3, 2]]))).toBe(true)
  expect(Nodo.equals(arbol.getNodo(62), new Nodo(63, [[3, 2], [5, 1]], []))).toBe(true)
})

test("Prueba 1", () => {
  const [ruta, _] = MainTSP.encontrarRutaOptima(prueba1)
  expect(ruta).toEqual([[0, 2], [2, 1], [1, 4], [4, 3], [3, 0]])
})

test("Prueba2", () => {
  const [ruta, _] = MainTSP.encontrarRutaOptima(prueba2)
  expect(ruta).toEqual([
    [0, 7],  [7, 37],  [37, 30],  [30, 43],  [43, 17],  [17, 6],  [6, 27],  [27, 5],  [5, 36],  [36, 18],  [18, 26],  [26, 16],  [16, 42],  [42, 29],  [29, 35],  [35, 45],  [45, 32],  [32, 19],  [19, 46],  [46, 20],  [20, 31],  [31, 38],  [38, 47],  [47, 4],  [4, 41],  [41, 23],  [23, 9],  [9, 44],  [44, 34],  [34, 3],  [3, 25],  [25, 1],  [1, 28],  [28, 33],  [33, 40],  [40, 15],  [15, 21],  [21, 2],  [2, 22],  [22, 13],  [13, 24],  [24, 12],  [12, 10],  [10, 11],  [11, 14],  [14, 39],  [39, 8],  [8, 0],
  ])
})