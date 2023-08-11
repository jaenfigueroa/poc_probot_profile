/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */

module.exports = (app) => {
  // app.onAny(async () => {
  //   console.log('Se hizo algo')
  // })

  // Cuando se abre un issue nuevo

  app.on('issues.opened', async (context) => {

    /* AGREGAR UN LABEL */
    // context.octokit.issues.addLabels(
    //   context.issue({ labels: ['MAJIN BUU'] }),
    // )

    /* COMENTAR UN ISSUE */
    // context.octokit.issues.createComment(
    //   context.issue({ body: 'Gracias por abrir este issue 😃' }),
    // )

    /* CREAR UN LABEL */
    // context.octokit.issues.createLabel(
    //   context.issue({ name: 'ROSA', color: '8338ec', description: 'etiquet creada al azar' }),
    // )

    /* ACTUALIZAR UN ISSUE */
    // context.octokit.issues.update(
    //   context.issue({ title: 'cambiado de nombre', labels: ['uno', 'dos'], assignees: ['jaenfigueroa'] }),
    // )

    /* TRAER EL LABEL */
    context.log.info(
      context.octokit.issues.getLabel(
        context.issue({ name: 'ROSA' }),
      ),
    )
  })


  // app.on('pull_request.opened', async (context) => {
  //   console.log('se abrio un pr nuevo')

  //   /* OBTENER EL NOMBRE DE LA RAMA A LA QUE SE HIZO EL PR */
  //   const branch = context.payload.pull_request.head.ref
  //   console.log('RAMA: ', branch)

  //   /* ESCORGER QUE ETIQUETA SE VA A PONER */
  //   const label = branch === 'main' ? 'PR para main' : 'PR para dev'
  //   console.log('RAMA ELEGIDA: ', label)

  //   /* CREAR LA ESTRUCTURA */
  //   const params = context.issue({ labels: [label] })
  //   console.log('PARAMETROS: ', params)

  //   /* AGREGAR LA ETIQUETA AL ISSUE*/
  //   return context.octokit.issues.addLabels(params)
  // })
}