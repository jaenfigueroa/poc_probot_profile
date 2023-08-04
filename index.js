const { run } = require('probot')
// const app_issues = require('./src/issues')
// const app_discussions = require('./src/discussions')

// SE LE DEBE PASAR UNA FUNCION 
// run(app_issues)
// run(app_discussions)

const app_pulls = require('./src/pulls')
run(app_pulls)

// const prueba = require('./src/prueba')
// run(prueba)