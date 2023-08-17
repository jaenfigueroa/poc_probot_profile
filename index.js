require('dotenv').config()
const { run } = require('probot')
// // const bot = require('./src')
const bot = require('./src/move-card')

run(bot)
