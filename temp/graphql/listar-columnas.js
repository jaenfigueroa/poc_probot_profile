/* {
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
} */

/* LISTAR  COLUMNAS*/

// {
//   "data": {
//     "repository": {
//       "projectV2": {
//         "fields": {
//           "nodes": [
//             {},
//             {},
//             {
//               "id": "PVTSSF_lAHOBB4Q_M4AT3TgzgMsHcE",
//               "name": "Status",
//               "project": {
//                 "id": "PVT_kwHOBB4Q_M4AT3Tg"
//               },
//               "options": [
//                 {
//                   "id": "31599b33",
//                   "name": "Backlog"
//                 },
//                 {
//                   "id": "29b4d1d0",
//                   "name": "Todo"
//                 },
//                 {
//                   "id": "4fbe9559",
//                   "name": "In progress"
//                 },
//                 {
//                   "id": "0eb14df4",
//                   "name": "In dev"
//                 },
//                 {
//                   "id": "e7025697",
//                   "name": "In pr"
//                 },
//                 {
//                   "id": "3dd6ff31",
//                   "name": "In main"
//                 },
//                 {
//                   "id": "844ceafe",
//                   "name": "Done"
//                 }
//               ]
//             },
//             {},
//             {},
//             {},
//             {},
//             {},
//             {},
//             {}
//           ]
//         }
//       }
//     }
//   }
// }
