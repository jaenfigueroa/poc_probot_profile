module.exports.GET_ISSUES_OF_PR = `
query($owner: String!, $name: String!, $number: Int!){
  repository(owner: $owner, name: $name) {
    pullRequest(number: $number) {
      title
      number
      closingIssuesReferences(first: 50) {
        edges {
          node {
            id
            number
          }
        }
      }
    }
  }
}
`
