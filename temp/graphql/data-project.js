// {
//   repository(owner: "jaenfigueroa", name: "foxed") {
//     projectV2(number: 7) {
//       id
//       fields(first: 20) {
//         nodes {
//           ... on ProjectV2SingleSelectField {
//             id
//             name
//             options {
//               id
//               name
//             }
//           }
//         }
//       }
//       items(first: 100) {
//         nodes {
//           id
//           type
//           content {
//             ... on PullRequest {
//               title
//             }
//             ... on Issue {
//               title
//               number
//             }
//           }
//         }
//       }
//     }
//   }
// }
