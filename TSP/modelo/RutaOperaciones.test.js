import { RutaOperaciones } from "./RutaOperaciones"

const ruta = [[3, 4]]

// pruebas agregarPar
test("Agregar un par funciona", () => {
  expect(RutaOperaciones.agregarPar(ruta, [4, 5])).toEqual([[3, 4], [4, 5]])
})


// pruebas encontrarConexionesIzquierda y encontrarConexionesDerecha
test("Encontrar conexiones Izquierda y Derecha funciona", () => {
  expect(RutaOperaciones.encontrarConexionesIzquierda([[7, 8], [2, 5], [1, 2], [5, 7]], [5, 7])).toEqual([[1, 2], [2, 5], [5, 7]])
  expect(RutaOperaciones.encontrarConexionesDerecha([[7, 8], [2, 5], [1, 2], [5, 7]], [2, 5])).toEqual([[2, 5], [5, 7], [7, 8]])
})


// pruebas encontrarConexiones
test("Encontrar conexiones funciona", () => {
  expect(RutaOperaciones.encontrarConexiones([[7, 8], [2, 5], [1, 2], [5, 7]], [5, 7])).toEqual([[1, 2], [2, 5], [5, 7], [7, 8]])
  expect(RutaOperaciones.encontrarConexiones([[7, 8], [3, 5], [1, 2], [5, 7], [4, 3]], [3, 5])).toEqual([[4, 3], [3, 5], [5, 7], [7, 8]])
})


// pruebas comprobarSubrutas
test("Se detectan subrutas en una ruta", () => {
  expect(RutaOperaciones.comprobarSubrutas([[1, 2], [2, 3]], [3, 2])).toBe(true)
  expect(RutaOperaciones.comprobarSubrutas([[2, 3], [1, 2]], [3, 2])).toBe(true)
  expect(RutaOperaciones.comprobarSubrutas([[1, 4], [2, 1], [5, 6], [3, 5], [4, 3]], [6, 2])).toBe(true)
  expect(RutaOperaciones.comprobarSubrutas([[1, 4], [2, 1], [5, 6], [3, 5]], [4, 3])).toBe(false)
})


// pruebas indiceNodoInicio
test("Obtener el indice del nodo inicio funciona", () => {
  expect(RutaOperaciones.indiceNodoInicio([[4, 5], [3, 2], [1, 3], [2, 4], [5, 1]])).toBe(2)
})


// pruebas de ordenarConexiones
test("Ordenar conexiones funciona", () => {
  expect(RutaOperaciones.ordenarConexiones([[7, 8], [2, 5], [8, 1], [1, 2], [5, 7]])).toEqual([[1, 2], [2, 5], [5, 7], [7, 8], [8, 1]])
  expect(RutaOperaciones.ordenarConexiones([[1, 2], [4, 5], [3, 4], [2, 3]])).toEqual([[1, 2], [2, 3], [3, 4], [4, 5]])
})


// pruebas de revisarConexion
// test("Revisar la conexion funciona", () => {
//   expect(RutaOperaciones.revisarConexion([[1, 2], [3, 4], [4, 5], [5, 1]])).toBe(false)
//   expect(RutaOperaciones.revisarConexion([[1, 4], [4, 3], [3, 5], [5, 6], [6, 2], [2, 1]])).toBe(true)
//   expect(RutaOperaciones.revisarConexion([[1, 4], [4, 3], [3, 5], [5, 6], [6, 2], [2, 7]])).toBe(false)
//   expect(RutaOperaciones.revisarConexion([])).toBe(false)
// })


// pruebas de obtenerCaminosSubRuta
test("Obtener los caminos que crean subrutas funciona", () => {
  expect(RutaOperaciones.obtenerCaminosSubRuta([[1, 4]], [[4, 1], [2, 3]])).toEqual([[4, 1]])
  expect(RutaOperaciones.obtenerCaminosSubRuta([[1, 4], [2, 1]], [[4, 2], [1, 2]])).toEqual([[4, 2], [1, 2]])
})


// pruebas de inmutabilidad
test("La ()ruta final debe ser igual que la declarada al inicio", () => {
  expect(ruta).toEqual([[3, 4]])
})