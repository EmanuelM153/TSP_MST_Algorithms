export class RutaOperaciones {
  static ordenarConexiones(pares) {
    const indiceInicio = this.indiceNodoInicio(pares)
    const paresNuevos = [pares[indiceInicio]]

    const paresFaltantes = [...pares]
    paresFaltantes.splice(indiceInicio, 1)

    for (var i = 0; i < paresFaltantes.length; i++) {
      const parFaltante = paresFaltantes[i]
      const parUltimo = paresNuevos[paresNuevos.length - 1]
      if (parFaltante[0] === parUltimo[1]) {
        paresNuevos.push(parFaltante)
        paresFaltantes.splice(i, 1)
        i = -1
      }
    }

    return paresNuevos
  }

  static indiceNodoInicio(pares) {
    let indice = 0
    let menor = pares[0]

    pares.forEach((par, i) => {
      if (par[0] < menor[0]) {
        indice = i
        menor = par
      }
    })

    return indice
  }

  static agregarPar(pares, par) {
    return pares.concat([par])
  }

  static encontrarConexionesIzquierda(pares, par, visitados = new Set()) {
    if (visitados.has(par.toString()))
      return []

    visitados.add(par.toString())

    const izquierda = pares.filter(parCandidato => parCandidato[1] === par[0])

    if (izquierda.length === 0) {
      return [par]
    } else {
      const resultado = RutaOperaciones.encontrarConexionesIzquierda(pares, izquierda[0], visitados)
      return [...resultado, par]
    }
  }

  static encontrarConexionesDerecha(pares, par, visitados = new Set()) {
    if (visitados.has(par.toString()))
      return []

    visitados.add(par.toString())

    const derecha = pares.filter(parCandidato => parCandidato[0] === par[1])

    if (derecha.length === 0) {
      return [par]
    } else {
      const resultado = RutaOperaciones.encontrarConexionesDerecha(pares, derecha[0], visitados)
      return [par, ...resultado]
    }
  }

  static encontrarConexiones(pares, par) {
    const visitados = new Set()
    const conexionesIzquierda = this.encontrarConexionesIzquierda(pares, par, visitados)

    visitados.delete(par.toString())
    const conexionesDerecha = this.encontrarConexionesDerecha(pares, par, visitados)
    conexionesDerecha.splice(0, 1)

    return conexionesIzquierda.concat(conexionesDerecha)
  }

  static comprobarSubrutas(pares, par) {
    var haySubrutas = false

    let conexiones = this.encontrarConexiones(pares, par)

    const nodoFinal = conexiones[conexiones.length - 1]

    for (let i = 0; i < conexiones.length && !haySubrutas; i++) {
      const nodo = conexiones[i]
      if (nodoFinal[1] === nodo[0]) haySubrutas = true
    }

    return haySubrutas
  }

  static obtenerCaminosSubRuta(pares, caminos) {
    const caminosSubRuta = []

    caminos.forEach(par => {
      const esSubruta = this.comprobarSubrutas(pares, par)
      if (esSubruta) caminosSubRuta.push(par)
    })

    return caminosSubRuta
  }
}