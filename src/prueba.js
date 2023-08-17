/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */

module.exports = (app) => {
  /* AL ASIGNAR UN USUARIO A UNA ISSUE */

  app.on('issues.edited', async (context) => {
    context.octokit.rest.projects.moveCard({
      card_id: 'I_kwDOKDBZEc5ueziz',
      position: 'top',
      column_id: '29b4d1d0',
    })
  })
}
