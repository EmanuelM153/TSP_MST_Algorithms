import type { Edge, Node } from "vis-network"

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

export function crearMapaNodos(nodos: Array<Node>) {
  const mapa = {};
  nodos.forEach((nodo, i) => {
    mapa[nodo.id] = i
  });

  return mapa
}

export function crearMatrizAdyacencia(mapa: Object, aristas: Array<Edge>, numNodos: Number) {
  const matriz = Array(numNodos)
    .fill(Infinity)
    .map(() => Array(numNodos).fill(Infinity));

  aristas.forEach((arista) => {
    const indiceDesde = mapa[arista.from];
    const indiceHacia = mapa[arista.to];

    matriz[indiceDesde][indiceHacia] = arista.label ? parseFloat(arista.label) : 1;

    const esDireccionado = arista.arrows === "to"
    if (!esDireccionado)
      matriz[indiceHacia][indiceDesde] = matriz[indiceDesde][indiceHacia];
  });

  return matriz
}

export function formatearMejorCamino(nodos: Array<Nodo>, solucion: Array<Array<Number>>) {
  let cadenaConFormato = ""

  solucion.forEach((par, i) => {
    const name = nodos[par[0]].label
    cadenaConFormato += `${name}, `
  })

  const nombreInicial = nodos[0].label

  cadenaConFormato += `${nombreInicial}`

  return cadenaConFormato
}