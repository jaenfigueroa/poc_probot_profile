const getNormalizedNames = (nombres) => {
  const nombresFiltrados = nombres.map((nombre) => `@${nombre}`)
  return nombresFiltrados.join(' ')
}

module.exports = {
  getNormalizedNames,
}
