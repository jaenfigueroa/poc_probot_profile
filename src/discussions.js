// /**
//  * This is the main entrypoint to your Probot app
//  * @param {import('probot').Probot} app
//  */

// module.exports = (app) => {
//   // Cuando se abre una discusión nueva
//   app.on('discussion.created', async (context) => {
//     const discussionsComment = context.issue({
//       body: 'Gracias por abrir esta discusión 😃',
//     })
//     return context.octokit.projects
//   })
// }