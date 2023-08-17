/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */

module.exports = (app) => {
  const MOVE_CARD = `
    mutation(
      $fieldId: ID!,
      $itemId: ID!,
      $projectId: ID!,
      $value: ProjectV2FieldValue!)
      {
      updateProjectV2ItemFieldValue(
        input: {
          fieldId: $fieldId
          itemId: $itemId 
          projectId: $projectId
          value: $value
        }
      ) {
        clientMutationId
      }
    }
  `

  /* MOVER UNA CARD EN EL TABLERO */
  app.on('issues.edited', async (context) => {
    const userToken = 'TU_TOKEN_DE_ACCESO_PERSONAL_AQUI'

    const graphqlWithAuth = context.octokit.graphql.defaults({
      headers: {
        authorization: `Bearer ${userToken}`,
      },
    })

    graphqlWithAuth(MOVE_CARD, {
      fieldId: 'PVTSSF_lAHOBB4Q_M4AT3TgzgMsHcE',
      itemId: 'PVTI_lAHOBB4Q_M4AT3TgzgImQT0',
      projectId: 'PVT_kwHOBB4Q_M4AT3Tg',
      value: {
        singleSelectOptionId: '29b4d1d0',
      },
    })
  })
}
