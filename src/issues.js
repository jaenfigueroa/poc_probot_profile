/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  // Tu codigo aqui
  app.log.info("¡Sí, la aplicación se ha cargado!");

  // Cuando se abre un issue nuevo
  app.on("issues.opened", async (context) => {
    const issueComment = context.issue({
      body: "Gracias por abrir este issue 😃",
    });
    return context.octokit.issues.createComment(issueComment);
  });

  // Cuando se edita un issue
  app.on("issues.edited", async (context) => {
    const issueComment = context.issue({
      body: "Se edito un issue 😃",
    });
    return context.octokit.issues.createComment(issueComment);
  });

  // Cuando se cierra un issue
  app.on('issues.closed', async (context) => {
    const issueComment = context.issue({
      body: "Se cerro un issue 😃",
    })
    return context.octokit.issues.createComment(issueComment)
  })

  // Cuando se reabre un issue
  app.on('issues.reopened', async (context) => {
    const issueComment = context.issue({
      body: "Se reabrio un issue 😃",
    })
    return context.octokit.issues.createComment(issueComment)
  })
};
