const MatrizOperaciones = require("./MatrizOperaciones")

function reducirMatriz(matriz) {
  let reduccion = 0

  matriz.forEach((_, i) => {
    var menorFila = MatrizOperaciones.encontrarMenorFila(matriz, i)
    if (menorFila != 0 && menorFila != Infinity) {
      matriz = MatrizOperaciones.restarFila(matriz, i, menorFila)
      reduccion += menorFila
    }
  })

  for (let j = 0; j < matriz[0].length; j++) {
    var menorCol = MatrizOperaciones.encontrarMenorColumna(matriz, j)
    if (menorCol != 0 && menorCol != Infinity) {
      matriz = MatrizOperaciones.restarColumna(matriz, j, menorCol)
      reduccion += menorCol
    }
  }

  return [reduccion, matriz]
}

module.exports = reducirMatriz