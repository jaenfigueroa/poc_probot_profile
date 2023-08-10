module.exports.getProjectV2 = `
{
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
}
`

// {
//   "data": {
//     "repository": {
//       "projectV2": {
//         "id": "PVT_kwHOBB4Q_M4AT3Tg",
//         "createdAt": "2023-08-09T03:51:54Z",
//         "creator": {
//           "login": "jaenfigueroa"
//         },
//         "number": 7,
//         "title": "foxed_v2",
//         "url": "https://github.com/users/jaenfigueroa/projects/7",
//         "items": {
//           "edges": [
//             {
//               "node": {
//                 "id": "PVTI_lAHOBB4Q_M4AT3TgzgIcZpo",
//                 "type": "ISSUE",
//                 "isArchived": false,
//                 "content": {}
//               }
//             }
//           ]
//         }
//       }
//     }
//   }
// }
