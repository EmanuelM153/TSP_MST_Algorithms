export class MatrizOperaciones {
  static #verificarPosicion(matriz) {
    return (i) => {
      if (i < 0 || i >= matriz.length) throw "Fila Inexistente"

      return (j) => {
        if (j < 0 || j >= matriz[0].length) throw "Columna Inexistente"
      }
    }
  }

  static encontrarMenorFila(matriz, numFila) {
    this.#verificarPosicion(matriz)(numFila)

    const fila = matriz[numFila]
    return Math.min.apply(Math, fila)
  }

  static encontrarMenorColumna(matriz, numColumna) {
    this.#verificarPosicion(matriz)(0)(numColumna)

    const columna = matriz.map(fila => fila[numColumna])
    return Math.min.apply(Math, columna)
  }

  static ponerInfinito(matriz, i, j) {
    this.#verificarPosicion(matriz)(i)(j)

    const matrizCopia = this.copiarMatriz(matriz)

    matrizCopia[i][j] = Infinity
    return matrizCopia
  }

  static copiarMatriz(matriz) {
    return matriz.map(row => row.map(e => e))
  }

  static eliminarFila_Columna(matriz, i, j) {
    this.#verificarPosicion(matriz)(i)(j)

    var matrizNueva = this.copiarMatriz(matriz)
    matrizNueva[i] = matrizNueva[i].map(e => e = Infinity)
    matrizNueva.map(row => row[j] = Infinity)

    return matrizNueva
  }

  static restarFila(matriz, i, num) {
    this.#verificarPosicion(matriz)(i)

    var matrizNueva = this.copiarMatriz(matriz)
    matrizNueva[i] = matrizNueva[i].map(e => e -= num)

    return matrizNueva
  }

  static restarColumna(matriz, j, num) {
    this.#verificarPosicion(matriz)(0)(j)

    const matrizNueva = this.copiarMatriz(matriz)
    matrizNueva.map(fila => fila[j] -= num)

    return matrizNueva
  }
}