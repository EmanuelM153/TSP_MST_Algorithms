import { ArbolBinario } from "./ArbolBinario"
import { Nodo } from "./Nodo"

const arbol = new ArbolBinario(new Nodo())
const iterador = arbol.crearIteradorDerecha()

test("Inicialmente no hay hijo derecha y por lo tanto siguiente", () => {
  expect(iterador.tieneSiguiente()).toBe(false)
})

const nodo = new Nodo()
test("Agregar un hijo derecho y verificar si hay uno siguiente debe ser verdad", () => {
  arbol.agregarNodoDerecha(0, nodo)
  expect(iterador.tieneSiguiente()).toBe(true)
})

test("El siguiente debe ser el nodo derecho y la posicion debe ser correcta", () => {
  expect(iterador.siguiente()).toBe(nodo)
  expect(iterador.getPosicion()).toEqual(2)
})

test("Obtener el arbol devuele el arbol correctamente", () => {
  expect(iterador.getArbol()).toBe(arbol)
})

test("Poner la posicion funciona", () => {
  expect(iterador.tieneSiguiente()).toBe(false)
  iterador.setPosicion(0)
  expect(iterador.tieneSiguiente()).toBe(true)
})