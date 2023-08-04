/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */

module.exports = (app) => {
  // app.onAny(async (context) => {
  //   console.log('Se hizo algo')

  //   context.log.info(context.payload.repositories)
  // })

  // CUANDO SE ABRE UN PR
  app.on('pull_request.opened', async (context) => {
    console.log('se abrio un pr')

    // const RAMA_DESTINO = context.payload.pull_request.base.ref
    // const NUMBER_PR = context.payload.pull_request.number
    // const PR_STATE = context.payload.pull_request.state

    // console.log({ RAMA_DESTINO, NUMBER_PR, PR_STATE })

    // console.log('PAYLOAD: ', context.payload)
    // console.log('OCTOKIT: ', context.octokit.projects)

    const data = await context.octokit.projects.listColumns({
      project_id: 3,
    })

    console.log(data)

    // context.octokit.projects.moveCard({
    //   card_id: context.payload.pull_request.id,
    //   position: 'top',
    //   column_id: 4,
    // })

    // console.log('LOG: ', context.log)
  })

  // CUANDO UN PR SE ACEPTA Y SE CIERRA, SE MUEVE EL ISSUE A LA COLUMNA DEPENDIENDO DE LA RAMA A LA QUE SE HIZO EL PR
  app.on('pull_request.closed', async (context) => {
    console.log('se cerro y mergeo un pr')

    // const RAMA_DESTINO = context.payload.pull_request.base.ref
    // const NUMBER_PR = context.payload.pull_request.number
    // const PR_STATE = context.payload.pull_request.state
    // console.log({ RAMA_DESTINO, NUMBER_PR, PR_STATE })

    const data = await context.octokit.projects.listColumns({
      project_id: 3,
    })

    console.log(data)

    // context.octokit.projects.moveCard({
    //   card_id: context.payload.pull_request.id,
    //   position: 'top',
    //   column_id: 5,
    // })

    // if (RAMA_DESTINO === 'main') {
    //   console.log('se cerro y mergeo un pr a la rama MAIN')
    // } else if (RAMA_DESTINO === 'dev') {
    //   console.log('se cerro y mergeo un pr a la rama DEV')
    // } else {
    //   console.log('se cerro y mergeo un pr a otra que no es MAIN ni DEV')
    // }
  })

  // app.on('pull_request.closed', async (context) => {
  //   console.log('se cerro y mergeo un pr')
  //   // console.log(context.payload.pull_request)
  //   console.log('Mergeado a:', context.payload.pull_request.merged_at)
  //   console.log('a la rama: ', context.payload.pull_request.base.ref)
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