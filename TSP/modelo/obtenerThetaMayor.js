const MatrizOperaciones = require("./MatrizOperaciones")

function obtenerThetaMayor(matriz) {
  let k, l
  let thetaMayor = 0

  const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

  matriz.forEach((fila, i) => {
    const indicesZero = indexOfAll(fila, 0)
    indicesZero.forEach(j => {
      const theta = obtenerTheta(matriz, i, j)
      if (theta > thetaMayor) {
        thetaMayor = theta
        k = i
        l = j
      }
    })
  });

  return [thetaMayor, [k, l]]
}

function obtenerTheta(matriz, i, j) {
  const matrizNueva = MatrizOperaciones.ponerInfinito(matriz, i, j)
  return MatrizOperaciones.encontrarMenorFila(matrizNueva, i) + MatrizOperaciones.encontrarMenorColumna(matrizNueva, j)
}


module.exports = obtenerThetaMayor