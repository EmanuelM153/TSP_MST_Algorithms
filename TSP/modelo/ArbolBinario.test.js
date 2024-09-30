import { ArbolBinario } from "./ArbolBinario"
import { Nodo } from "./Nodo"

const arbol = new ArbolBinario()

test("Agregar un nodo a la derecha en el nodo raiz funciona", () => {
  arbol.agregarNodoDerecha(0, new Nodo())
  expect(arbol.getNodo(2) != undefined).toEqual(true)
})

test("Agregar un nodo a la izquierda en el nodo raiz funciona", () => {
  arbol.agregarNodoIzquierda(0, new Nodo())
  expect(arbol.getNodo(1) != undefined).toEqual(true)
  expect(arbol.getHijoIzquierdo(0) != undefined).toEqual(true)
})

test("Obtener el nodo en la raiz da lo esperado", () => {
  const arbol = new ArbolBinario(new Nodo(5, [[4, 5]], []))
  expect(arbol.getNodo(0)).toEqual(new Nodo(5, [[4, 5]], []))
})

test("Crear un IteradorDerecha funciona", () => {
  expect(arbol.crearIteradorDerecha != undefined).toEqual(true)
})

test("Se identifica correctamente si un nodo es hoja", () => {
  const arbol = new ArbolBinario(new Nodo(5, [[4, 5]], []))
  arbol.agregarNodoDerecha(0, new Nodo())
  arbol.agregarNodoIzquierda(0, new Nodo())
  expect(arbol.esHoja(0)).toBe(false)
  expect(arbol.esHoja(1)).toBe(true)
  expect(arbol.esHoja(2)).toBe(true)
})

test("Se encuentra el menor nodo hoja", () => {
  const arbol = new ArbolBinario(new Nodo(5))
  arbol.agregarNodoDerecha(0, new Nodo(-2))
  arbol.agregarNodoIzquierda(0, new Nodo(3))

  arbol.agregarNodoDerecha(1, new Nodo(1))
  arbol.agregarNodoIzquierda(1, new Nodo(3))

  arbol.agregarNodoIzquierda(2, new Nodo(2))
  arbol.agregarNodoDerecha(2, new Nodo(-1))

  expect(arbol.buscarTerminalMenor()).toBe(6)
  expect(arbol.getNodo(arbol.buscarTerminalMenor()).getLimiteInferior()).toBe(-1)
})