const { createNodeMiddleware, createProbot } = require('probot')
const app = require('./../../../app.js')

module.exports = createNodeMiddleware(app, {
  probot: createProbot(),
  webhooksPath: '/api/github/webhooks',
})
