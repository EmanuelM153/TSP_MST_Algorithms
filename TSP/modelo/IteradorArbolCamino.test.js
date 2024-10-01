import { IteradorArbolCamino } from "./IteradorArbolCamino"
import { ArbolBinario } from "./ArbolBinario"
import { Nodo } from "./Nodo"

const arbol = new ArbolBinario(new Nodo(5))
arbol.agregarNodoDerecha(0, new Nodo(-2))
arbol.agregarNodoIzquierda(0, new Nodo(3))

arbol.agregarNodoDerecha(1, new Nodo(1))
arbol.agregarNodoIzquierda(1, new Nodo(100))

arbol.agregarNodoIzquierda(2, new Nodo(2))
arbol.agregarNodoDerecha(2, new Nodo(-1))

test("El iterador funciona", () => {
  const iterador = new IteradorArbolCamino(arbol, 4)
  expect(iterador.tieneSiguiente()).toBe(0)
  expect(iterador.siguiente().getLimiteInferior()).toBe(3)
  expect(iterador.tieneSiguiente()).toBe(1)
  expect(iterador.siguiente().getLimiteInferior()).toBe(1)
})

arbol.agregarNodoIzquierda(6, new Nodo(2))

test("El iterador funciona", () => {
  const iterador = new IteradorArbolCamino(arbol, 13)
  expect(iterador.tieneSiguiente()).toBe(1)
  expect(iterador.siguiente().getLimiteInferior()).toBe(-2)
  expect(iterador.tieneSiguiente()).toBe(1)
  expect(iterador.siguiente().getLimiteInferior()).toBe(-1)
  expect(iterador.tieneSiguiente()).toBe(0)
  expect(iterador.siguiente().getLimiteInferior()).toBe(2)
})
