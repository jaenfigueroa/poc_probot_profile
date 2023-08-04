/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */

module.exports = (app) => {
  app.onAny(async (context) => {
    console.log('Se hizo algo')

    context.log.info(context.payload.repositories)
    // console.log(context.payload.repositories)
  })

  // app.on('pull_request.edited', async () => {
  //   console.log('se edito un pr')
  // })

  // // Crear una rama
  // await context.octokit.git.createRef({
  //   repo,
  //   owner,
  //   ref: `refs/heads/${branch}`,
  //   sha: reference.data.object.sha, // accesses the sha from the heads/master reference we got
  // });


  // // muestra todos los repos en los que ha instalado la aplicación
  // context.log.info(context.payload.repositories);


}