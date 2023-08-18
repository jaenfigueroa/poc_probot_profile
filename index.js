require('dotenv').config()

const { run } = require('probot')
const bot = require('./src')

run(bot)
