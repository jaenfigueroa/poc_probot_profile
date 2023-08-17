module.exports.getLabels = `
  query ($owner: String!, $repo: String!, $numLabels: Int!) {
    repository(owner: $owner, name: $repo) {
      labels(first: $numLabels) {
        nodes {
          id
          name
        }
      }
    }
  }
`

// "nodes": [
//   {
//     "id": "LA_kwDOKDBZEc8AAAABWhdnCg",
//     "name": "doc"
//   },
//   {
//     "id": "LA_kwDOKDBZEc8AAAABWisozw",
//     "name": "padre"
//   },
//   {
//     "id": "LA_kwDOKDBZEc8AAAABWisqKA",
//     "name": "subtarea"
//   },
//   {
//     "id": "LA_kwDOKDBZEc8AAAABWisuYg",
//     "name": "poc"
//   },
//   {
//     "id": "LA_kwDOKDBZEc8AAAABWisu9Q",
//     "name": "refactor"
//   },
//   {
//     "id": "LA_kwDOKDBZEc8AAAABWi9sMg",
//     "name": "PR para dev"
//   },
//   {
//     "id": "LA_kwDOKDBZEc8AAAABWjaZSg",
//     "name": "PR para main"
//   }
// ]
