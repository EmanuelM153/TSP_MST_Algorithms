import { MatrizOperaciones } from "./MatrizOperaciones"

var matriz = [
  [1, 2, 5, 3, 0],
  [6, 5, 3, 5, 1],
  [6, 123, 5, 234, 2]
]

// encontrarMenorFila pruebas
test("El menor en la primera fila es 0", () => {
  expect(MatrizOperaciones.encontrarMenorFila(matriz, 0)).toBe(0)
})

test("El menor en la ultima fila es 2", () => {
  expect(MatrizOperaciones.encontrarMenorFila(matriz, matriz.length - 1)).toBe(2)
})

test("El menor de una fila inexistente da error", () => {
  expect(
    () => {
      MatrizOperaciones.encontrarMenorFila(matriz, -1)
    }
  ).toThrowError("Fila Inexistente")
  expect(
    () => {
      MatrizOperaciones.encontrarMenorFila(matriz, matriz.length)
    }
  ).toThrowError("Fila Inexistente")
})

// encontrarMenorColumna pruebas
test("El menor en la primera columna es 6", () => {
  expect(MatrizOperaciones.encontrarMenorColumna(matriz, 0)).toBe(1)
})

test("El menor en la ultima columna es 0", () => {
  expect(MatrizOperaciones.encontrarMenorColumna(matriz, matriz[0].length - 1)).toBe(0)
})

test("El menor de una columan inexistente da error", () => {
  expect(
    () => {
      MatrizOperaciones.encontrarMenorColumna(matriz, -1)
    }
  ).toThrowError("Columna Inexistente")
  expect(
    () => {
      MatrizOperaciones.encontrarMenorColumna(matriz, matriz[0].length)
    }
  ).toThrowError("Columna Inexistente")
})

// ponerInfinito pruebas
test("Poner infinito en la posicion 0, 1 retorna una matriz igual con Infinity en esta posicion", () => {
  const matrizCopia = [
    [1, 2, 5, 3, 0],
    [6, 5, 3, 5, 1],
    [6, 123, 5, 234, 2]
  ]

  matrizCopia[0][1] = Infinity
  expect(MatrizOperaciones.ponerInfinito(matriz, 0, 1)).toEqual(matrizCopia)
})

test("Poner infinito en una posicion inexistente genera error", () => {
  expect(
    () => {
      MatrizOperaciones.ponerInfinito(matriz, -1, 1)
    }
  ).toThrowError("Fila Inexistente")
  expect(
    () => {
      MatrizOperaciones.ponerInfinito(matriz, matriz.length, 1)
    }
  ).toThrowError("Fila Inexistente")
  expect(
    () => {
      MatrizOperaciones.ponerInfinito(matriz, 1, -1)
    }
  ).toThrowError("Columna Inexistente")
  expect(
    () => {
      MatrizOperaciones.ponerInfinito(matriz, 1, matriz[0].length)
    }
  ).toThrowError("Columna Inexistente")
})

// eliminarFila_Columna pruebas
test("Eliminar la segunda fila y la ultima columna", () => {
  const matrizNueva = [
    [1, 2, 5, 3, Infinity],
    [Infinity, Infinity, Infinity, Infinity, Infinity],
    [6, 123, 5, 234, Infinity]
  ]

  expect(MatrizOperaciones.eliminarFila_Columna(matriz, 1, matriz[0].length - 1)).toEqual(matrizNueva)
})

test("Eliminar una fila o columna que no existe genera error", () => {
  expect(
    () => {
      MatrizOperaciones.eliminarFila_Columna(matriz, -3, 1)
    }
  ).toThrowError("Fila Inexistente")
  expect(
    () => {
      MatrizOperaciones.eliminarFila_Columna(matriz, matriz.length + 10, 1)
    }
  ).toThrowError("Fila Inexistente")
  expect(
    () => {
      MatrizOperaciones.eliminarFila_Columna(matriz, 0, -1)
    }
  ).toThrowError("Columna Inexistente")
  expect(
    () => {
      MatrizOperaciones.eliminarFila_Columna(matriz, 0, matriz[0].length + 10)
    }
  ).toThrowError("Columna Inexistente")

})


// copiarMatriz pruebas
test("Copiar la matriz debe devolver una matriz identica", () => {
  expect(MatrizOperaciones.copiarMatriz(matriz)).toEqual(matriz)
})


// restarFila pruebas
test("Restar 2 a la ultima fila da lo correcto", () => {
  expect(MatrizOperaciones.restarFila(matriz, matriz.length - 1, 2)).toEqual([
    [1, 2, 5, 3, 0],
    [6, 5, 3, 5, 1],
    [4, 121, 3, 232, 0]
  ])
})

test("Restar a una fila inexistente genera error", () => {
  expect(() => {
    MatrizOperaciones.restarFila(matriz, -1, 5)
  }).toThrowError("Fila Inexistente")
  expect(() => {
    MatrizOperaciones.restarFila(matriz, matriz.length, 5)
  }).toThrowError("Fila Inexistente")
})


// restarColumna pruebas
test("Restar a la ultima columna da lo correcto", () => {
  expect(MatrizOperaciones.restarColumna(matriz, matriz[0].length - 1, 2)).toEqual([
    [1, 2, 5, 3, -2],
    [6, 5, 3, 5, -1],
    [6, 123, 5, 234, 0]
  ])
})

test("Restar a una columna inexistente genera error", () => {
  expect(() => {
    MatrizOperaciones.restarColumna(matriz, -1, 5)
  }).toThrowError("Columna Inexistente")
  expect(() => {
    MatrizOperaciones.restarColumna(matriz, matriz[0].length, 5)
  }).toThrowError("Columna Inexistente")
})


// prueba final
test("Despues de las operaciones la matriz debe ser la misma del comienzo", () => {
  expect(matriz).toEqual([
    [1, 2, 5, 3, 0],
    [6, 5, 3, 5, 1],
    [6, 123, 5, 234, 2]
  ])
})