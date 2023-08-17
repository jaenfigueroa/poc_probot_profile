const QUERY = `{
  repository(owner: "jaenfigueroa", name: "foxed") {
    projectV2(number: 7) {
      id
      createdAt
      creator {
        login
      }
      number
      title
      url
      items(first: 3) {
        edges {
          node {
            id
            type
            isArchived
            content
          }
        }
      }
    }
  }
}`

/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */

module.exports = (app) => {
  app.on('issues.opened', (context) => {
    context.octokit.graphql(QUERY)
  })
}
