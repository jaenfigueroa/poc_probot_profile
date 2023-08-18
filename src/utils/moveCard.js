const { MOVE_CARD } = require('../graphql/mutation/move_card')
const { octokit } = require('../config/octokit')
const { options } = require('../data/columns')
const { GET_DATA_PROJECT } = require('../graphql/query/get_data_project')

module.exports.moveCard = async (item_number, column_name) => {
  const DATA = await octokit.graphql(GET_DATA_PROJECT, {
    owner: 'jaenfigueroa',
    repoName: 'foxed',
    projectNumber: 7,
  })

  const ITEMS = DATA.repository.projectV2.items.nodes

  /* filtra el que tiene un number en especifico */
  const ITEM = ITEMS.filter((item) => item.content.number === item_number)
  const ITEM_ID = ITEM[0].id

  /* MOVER */
  octokit.graphql(MOVE_CARD, {
    projectId: 'PVT_kwHOBB4Q_M4AT3Tg' /* fijo */,
    fieldId: 'PVTSSF_lAHOBB4Q_M4AT3TgzgMsHcE' /* fijo */,

    itemId: ITEM_ID,
    value: {
      singleSelectOptionId: options[column_name],
    },
  })
}
