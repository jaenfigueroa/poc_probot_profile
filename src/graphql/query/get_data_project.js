module.exports.GET_DATA_PROJECT = `
query GetProjectInfo($owner: String!, $repoName: String!, $projectNumber: Int!) {
  repository(owner: $owner, name: $repoName) {
    projectV2(number: $projectNumber) {
      title
      id
      fields(first: 20) {
        nodes {
          ... on ProjectV2SingleSelectField {
            id
            name
            options {
              id
              name
            }
          }
          ... on ProjectV2Field{
            name
          }
        }
      }
      items(first: 100) {
        nodes {
          id
          type
          content {
            ... on PullRequest {
              title
            }
            ... on Issue {
              title
              number
            }
          }
        }
      }
    }
  }
}


`
