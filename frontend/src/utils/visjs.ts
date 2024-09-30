export function verificarNombre(nombre: String, nombres: Array<String>): Boolean {
  var nombreCorrecto = false

  if (nombre != "") {
    if (nombres.filter((item) => item == nombre).length == 0) {
      nombreCorrecto = true
    } else {
      alert("Nombre existente")
    }
  } else {
    alert("Nombre incorrecto")
  }

  return nombreCorrecto
}