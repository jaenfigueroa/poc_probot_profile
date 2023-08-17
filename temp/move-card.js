const { MOVE_CARD } = require('../src/graphql/move_card')
const { octokit } = require('../src/config/octokit')

/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */

module.exports = (app) => {
  /* MOVER UNA CARD EN EL TABLERO */
  app.on('issues.edited', async () => {
    octokit.graphql(MOVE_CARD, {
      fieldId: 'PVTSSF_lAHOBB4Q_M4AT3TgzgMsHcE',
      itemId: 'PVTI_lAHOBB4Q_M4AT3TgzgImQT0',
      projectId: 'PVT_kwHOBB4Q_M4AT3Tg',
      value: {
        singleSelectOptionId: '29b4d1d0',
      },
    })
  })
}
