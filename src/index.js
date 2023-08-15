const { getNormalizedNames } = require('./utils/getNormalizedNames')

/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */

module.exports = (app) => {
  /* AL ASIGNAR UN USUARIO A UNA ISSUE */
  app.on('issues.assigned', async (context) => {
    const ASSIGNED = context.payload.issue.assignee.login

    const issueComment = context.issue({
      body: `@${ASSIGNED} se te ha asignado esta issue ¡Adelante y mucho éxito! 😃`,
    })
    return context.octokit.issues.createComment(issueComment)
  })

  /* AL CERRAR UNA ISSUE */
  app.on('issues.closed', async (context) => {
    const ASSIGNEES = context.payload.issue.assignees.map(
      (assignee) => assignee.login,
    )
    const USERS = getNormalizedNames(ASSIGNEES)

    const issueComment = context.issue({
      body: `${USERS} ¡Excelente trabajo! 🎉`,
    })
    return context.octokit.issues.createComment(issueComment)
  })

  /* AL ABRIR UN NUEVO PR */
  app.on('pull_request.opened', async (context) => {
    const RAMA = context.payload.pull_request.base.ref
    const USER = context.payload.pull_request.user.login

    if (RAMA === 'dev') {
      const issueComment = context.issue({
        body: `@${USER} tu pr sera revisado lo antes posible. 😃`,
      })
      return context.octokit.issues.createComment(issueComment)
    }
  })

  /* AL ASIGNAR UN REVISADOR A UN PR */
  app.on('pull_request.review_requested', async (context) => {
    const REQUESTED_REVIEWER = context.payload.pull_request.requested_reviewers
    const REVIEWER = REQUESTED_REVIEWER.pop().login

    const issueComment = context.issue({
      body: `@${REVIEWER} se ha solicitado tu revisión. 😃`,
    })
    return context.octokit.issues.createComment(issueComment)
  })

  /* AL MERGEAR EL PR A DEV */
  app.on('pull_request.closed', async (context) => {
    const IS_MERGED = context.payload.pull_request.merged
    const RAMA = context.payload.pull_request.base.ref
    const USER = context.payload.pull_request.user.login

    if (IS_MERGED && RAMA === 'dev') {
      const issueComment = context.issue({
        body: `!Gracias @${USER} por tu contribución constante. 🎉`,
      })
      return context.octokit.issues.createComment(issueComment)
    }
  })
}
