/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */

// const REPO_ID = 674257169
// const REPO_NODE_ID = 'R_kgDOKDBZEQ'

module.exports = (app) => {
  /* AL CREARSE UN ISSUE SE AGREGA AL TABLERO EN "IN DEV" */
  // app.on('issues.opened', async (context) => {
  //   console.log('REPO: ', context.payload.repository)
  //   console.log('ISSUE: ', context.payload.issue)
  // })

  /* AL CREARSE UNA DISCUSSION NUEVA AGREGARLE EL LABEL "DOC" */
  app.on('discussion.created', async (context) => {
    // const DISCUSSION_ID = context.payload.discussion.node_id
    const DISCUSSION_ID = 'D_kwDOKDBZEc4AU_Iq'
    const LABEL_ID = 'LA_kwDOKDBZEc8AAAABWhdnCg'

    console.log(context.payload.discussion)

    context.octokit.graphql(
      `
      mutation addLabel($discussionId: ID!, $labelId: ID!) {
        addLabelsToDiscussion(input:{discussionId: $discussionId, labelIds: [$labelId]}) {
          clientMutationId
        }
      }
    `,
      {
        discussionId: DISCUSSION_ID,
        labelId: LABEL_ID,
      },
    )
  })
}
