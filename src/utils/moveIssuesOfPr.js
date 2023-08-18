const { GET_ISSUES_OF_PR } = require('../graphql/query/get_issues-of-pull')
const { moveCard } = require('./moveCard')

module.exports.moveIssuesOfPr = async (context, numberPr, newColumn) => {
  /* obtener los issue asociados */
  const DATA = await context.octokit.graphql(GET_ISSUES_OF_PR, {
    owner: process.env.REPO_OWNER,
    name: process.env.REPO_NAME,
    number: numberPr,
  })

  const ISSUES = DATA.repository.pullRequest.closingIssuesReferences.edges

  /* todos los issue asociados a este pr , se moveran a in dev */
  await Promise.all(
    ISSUES.map(async (issue) => {
      const ITEM_NUMBER = issue.node.number

      await moveCard(ITEM_NUMBER, newColumn)
    }),
  )
}
