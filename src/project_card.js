/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  // Cuando una card del proyecto se mueve
  app.on('project_card.moved', async (context) => {
    const issueComment = context.issue({
      body: 'Se movio una card del proyecto 😃',
    })
    return context.octokit.issues.createComment(issueComment)
    // return context.octokit.projects.updateCard(issueComment)
  })
}