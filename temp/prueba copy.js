/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */

// const REPO = {
//   id: 674257169,
//   node_id: 'R_kgDOKDBZEQ',
// }

module.exports = (app) => {
  app.on('issues.opened', async (context) => {
    console.log('REPO: ', context.payload.repository)
    console.log('ISSUE: ', context.payload.issue)
  })
}

// module.exports = (app) => {
//   app.on('issues.opened', async (context) => {
//     const issue = context.payload.issue

//     // Verifica si la tarjeta tiene el proyecto "To Do" asignado
//     const todoColumnId = 'YOUR_TODO_COLUMN_ID'
//     const progressColumnId = 'YOUR_PROGRESS_COLUMN_ID'

//     const cardId = 'ID_DE_LA_TARJETA' // Reemplaza esto con la ID real de la tarjeta

//     // Actualiza el estado de la tarjeta a "In Progress" cambiándola a la columna adecuada
//     const updateCardMutation = `
//       mutation {
//         moveProjectCard(input: { cardId: "${cardId}", columnId: "${progressColumnId}" }) {
//           cardEdge {
//             node {
//               id
//               column {
//                 id
//                 name
//               }
//             }
//           }
//           clientMutationId
//         }
//       }
//     `

//     // Realiza la mutación para cambiar el estado de la tarjeta
//     const result = await context.github.graphql(updateCardMutation)

//     // Verifica si la tarjeta se movió con éxito
//     if (result.moveProjectCard && result.moveProjectCard.cardEdge) {
//       const movedCard = result.moveProjectCard.cardEdge.node
//       console.log(
//         `La tarjeta con ID ${movedCard.id} fue movida a la columna ${movedCard.column.name}`,
//       )
//     } else {
//       console.log('No se pudo mover la tarjeta.')
//     }
//   })
// }
