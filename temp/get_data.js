module.exports.GET_DATA = `
{
  repository(name: "foxed", owner: "jaenfigueroa") {
    projectV2(number: 7) {
      fields(first: 20) {
        nodes {
          ... on ProjectV2SingleSelectField {
            id
            name
            project {
              id
            }
            options {
              id
              name
            }
          }
        }
      }
    }
  }
}
`
