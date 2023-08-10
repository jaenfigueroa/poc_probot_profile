/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */

module.exports = (app) => {
  const MOVE_CARD = `
    mutation changeStatus(
      $field: ID!
      $item: ID!
      $project: ID!
      $value: ProjectV2FieldValue!
    ) {
      updateProjectV2ItemFieldValue(
        input: {
          fieldId: $field
          itemId: $item
          projectId: $project
          value: $value
        }
      ) {
        clientMutationId
        projectV2Item {
          id
        }
      }
    }
  `

  /* MOVER UNA CARD EN EL TABLERO */
  app.on('issues.edited', async (context) => {
    context.octokit.graphql(MOVE_CARD, {
      field: 'PVTSSF_lAHOBB4Q_M4AT3TgzgMsHcE', // ID del campo a actualizar /* ACTUAL */ /* status */
      item: 'PVTI_lAHOBB4Q_M4AT3TgzgIdMHc' /* ID de la card a mover */ /* ACTUAL */ /* implementar probot 144*/,
      project:
        'PVT_kwHOBB4Q_M4AT3Tg' /* ID deL proyecto */ /* ACTUAL */ /* foxed_v2 */,
      value: {
        singleSelectOptionId: '29b4d1d0' /* Nuevo status de la card */,
      },
    })
  })
}
