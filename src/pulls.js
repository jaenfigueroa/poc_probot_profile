/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */

module.exports = (app) => {
  // Cuando se abre un pull request, dependiendo de la rama a la que se solicite el pull request, se asigna un label diferente
  app.on('pull_request.reopened', async (context) => {
    console.log('se cerro un pr')
    const pull = context.payload.pull_request
    const branch = pull.head.ref
    console.log(branch)

    const label = branch === 'main' ? 'produccion' : 'desarrollo'
    const params = context.issue({ labels: [label] })
    console.log(params)

    return context.octokit.issues.addLabels(params)
  })
}