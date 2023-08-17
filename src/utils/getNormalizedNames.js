module.exports.getNormalizedNames = (nombres) => {
  const nombresFiltrados = nombres.map((nombre) => `@${nombre}`)
  return nombresFiltrados.join(' ')
}
