import { Nodo } from "./Nodo"

const nodo = new Nodo()

// prueba constructor
test("El constructor funciona", () => {
  const nodo = new Nodo(100, [4, 5, 2], [4, 5, 2])
  expect(nodo.getLimiteInferior()).toBe(100)
  expect(nodo.getParejasConsideradas()).toEqual([4, 5, 2])
  expect(nodo.getParejasNoConsideradas()).toEqual([4, 5, 2])
})


// prueba equals
test("La igualdad se cumple", () => {
  expect(Nodo.equals(new Nodo(0, [[1, 2]], []), new Nodo(0, [[1, 2]], []))).toBe(true)
  expect(Nodo.equals(new Nodo(0, [[1, 2]], [[4, 3]]), new Nodo(0, [[1, 2]], []))).toBe(false)
})