/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */

module.exports = (app) => {
  app.on('pull_request.opened', async (context) => {
    const issueComment = context.issue({
      body: '!Nos encanta tenerte con nosotros, gracias por tu contribución constante, mucho exito. :tada:',
    })
    return context.octokit.issues.createComment(issueComment)
  })
}
