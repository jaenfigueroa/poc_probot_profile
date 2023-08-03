const { run } = require('probot')
const app_issues = require('./src/issues')
// const app_discussions = require('./src/discussions')

// pasarle una función
run(app_issues)
// run(app_discussions)