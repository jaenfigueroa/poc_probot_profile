/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */

// GraphQL query para agregar un comentario
const addComment = `
  mutation comment($id: ID!, $body: String!) {
    addComment(input: { subjectId: $id, body: $body }) {
      clientMutationId
    }
  }
`

module.exports = (app) => {
  app.on('issues.opened', async (context) => {
    // Agregamos un comentario a la issue
    context.octokit.graphql(addComment, {
      id: context.payload.issue.node_id,
      body: 'Hola mundo',
    })
  })
}
